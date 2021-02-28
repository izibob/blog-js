import {Component} from '../core/component'
import {Form} from '../core/form'
import {Validators} from '../core/validators'
import {apiService} from '../services/api.service'

class CreateComponent extends Component{
  constructor(id) {
    super(id)
  }

  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this))

    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
    })
  }
}

function submitHandler(ev) {
  ev.preventDefault()

  if (this.form.isValid()) {
    const formData = {
      type: this.$el.type.value,
      data: new Date().toLocaleDateString(),
      ...this.form.getValue()
    }

    this.form.clearForm()
    apiService.createPost(formData)
    alert('Пост создан')
  }
}

export {
  CreateComponent
}