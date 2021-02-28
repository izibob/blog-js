function renderPost(post, options = {}) {
  const tag = post.type === 'news'
    ? '<li class="tag tag-blue tag-rounded">Новость</li>'
    : '<li class="tag tag-rounded">Заметка</li>'

  const button = (localStorage.getItem('favorites') || []).includes(post.id)
    ? `<button class="button-round button-small button-danger" data-id="${post.id}" data-name="${post.title}">Удалить</button>`
    : `<button class="button-round button-small button-primary" data-id="${post.id}" data-name="${post.title}">Сохронить</button>`

  return `
  <div class="panel">
    <div class="panel-head">
      <p class="panel-title">${post.title}</p>
      <ul class="tags">${tag}</ul>
    </div>
    <div class="panel-body">
      <p class="multi-line">${post.fulltext}</p>
    </div>
    <div class="panel-footer w-panel-footer">
      <small>${post.data}</small>
      ${options.showButton ? button : ''}
    </div>
  </div>
  `
}

export {
  renderPost
}