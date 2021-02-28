import {Component} from '../core/component'

class ContainerComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    localStorage.getItem('visited') ? this.show() : this.hide()
  }
}


export {
  ContainerComponent
}