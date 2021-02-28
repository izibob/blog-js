import {Component} from '../core/component'
import {apiService} from '../services/api.service'
import {TransformService} from '../services/transform.service'
import {renderPost} from '../template/post.template'

class PostsComponent extends Component {
  constructor(id, loader) {
    super(id)
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', buttonHandler.bind(this))
  }

  async onShow() {
    this.loader.show()
    const fbData = await apiService.fetchPost()
    const posts = TransformService.fbObjectToArray(fbData)
    let html = ''
    posts
      ? html = posts.map(post => renderPost(post, {showButton: true}))
      : html = ['<p class="center">Не было создано ни одного поста</p>']
    this.loader.hide()
    this.$el.insertAdjacentHTML('beforeend', html.join(' '))
  }

  onHide() {
    this.$el.innerHTML = ''
  }
}

function buttonHandler(ev) {
  const $el = ev.target
  const id = $el.dataset.id
  const name = $el.dataset.name


  if (id) {
    let favorites = new Map(JSON.parse(localStorage.getItem('favorites'))) || new Map()

    if (favorites.has(id)) {
      $el.classList.remove('button-danger')
      $el.classList.add('button-primary')
      $el.innerText = 'Сохронить'
      favorites.delete(id)
      localStorage.setItem('favorites', JSON.stringify(Array.from(favorites.entries())))
    } else {
      $el.classList.remove('button-primary')
      $el.classList.add('button-danger')
      $el.innerText = 'Удалить'
      favorites.set(id, name)
      localStorage.setItem('favorites', JSON.stringify(Array.from(favorites.entries())))
    }
  }
}

export {
  PostsComponent
}