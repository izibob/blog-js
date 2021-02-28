class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  clearForm() {
    Object.keys(this.controls).forEach(control => {
      this.form[control].value = ''
    })
  }

  getValue() {
    const value = {}

    Object.keys(this.controls).forEach(control => {
      value[control] = this.form[control].value
    })

    return value
  }

  isValid() {
    let isValid = true

    Object.keys(this.controls).forEach(control => {
      let isControl = true

      this.controls[control].forEach(value => {
        isControl = isControl && value(this.form[control].value)
      })

      isControl ? removeError(this.form[control]) : setError(this.form[control])

      isValid = isValid && isControl
    })

    return isValid
  }
}

function setError($control) {
  removeError($control)

  const error = '<p class="validation-error">Введите корректное значение</p>'

  $control.classList.add('invalid')
  $control.insertAdjacentHTML('afterend', error)
}

function removeError($control) {
  $control.classList.remove('invalid')

  if ($control.nextSibling) {
    $control.closest('.form-control').removeChild($control.nextSibling)
  }
}

export {
  Form
}