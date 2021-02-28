import {Component} from '../core/component'

class HeaderComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    if (localStorage.getItem('visited')) {
      this.hide()
    }

    this.$el.querySelector('.js-header-start').addEventListener('click', buttonHandler.bind(this))
  }
}

function buttonHandler() {
  localStorage.setItem('visited', JSON.stringify(true))
  this.hide()
  document.getElementById('container').classList.remove('hide')
}

export {
  HeaderComponent
}