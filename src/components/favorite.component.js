import {Component} from '../core/component'
import {apiService} from '../services/api.service'
import {renderPost} from '../template/post.template'

class FavoriteComponent extends Component {
  constructor(id, loader) {
    super(id)
    this.loader = loader
  }

  init() {
    this.$el.addEventListener('click', clickListHandler.bind(this))
  }

  onShow() {
    this.loader.show()
    const favorites = new Map(JSON.parse(localStorage.getItem('favorites')))
    const html = renderList(favorites)
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', html)
  }

  onHide() {
    this.$el.innerHTML = ''
  }

}

async function clickListHandler(ev) {
  ev.preventDefault()
  const $el = ev.target

  if ($el.classList.contains('link-post')) {
    this.loader.show()
    this.$el.innerHTML = ''
    const postId = $el.dataset.id
    const post = await apiService.fetchPostId(postId)
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {showButton: false}))
  }
}

function renderList(lists = new Map()) {
  if (lists.size) {
    const keys = Array.from(lists.keys())
    const html = keys.map(key => {
      return `<li><a href="#" class="link-post" data-id="${key}">${lists.get(key)}</a></li>`
    })

    return `<ul>${html.join(' ')}</ul>`
  }

  return '<p class="center">Вы ничего не добавили в избранное</p>'
}

export {
  FavoriteComponent
}