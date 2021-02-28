import {Component} from '../core/component'

class NavigationComponent extends Component {
  constructor(id) {
    super(id)
    this.tabs = []
  }

  init() {
    this.$el.addEventListener('click', clickTabHandler.bind(this))
  }

  registerComponent(components) {
    this.tabs = components
  }
}

function clickTabHandler(ev) {
  ev.preventDefault()
  const $el = ev.target

  Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
    tab.classList.remove('active')
  })

  if ($el.classList.contains('tab')) {
    $el.classList.add('active')
  }

  this.tabs.forEach(tab => {
    tab.component.hide()

    if ($el.dataset.name === tab.name) {
      tab.component.show()
    }
  })
}

export {
  NavigationComponent
}