import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {PostsComponent} from './components/posts.component'
import {CreateComponent} from './components/create.component'
import {FavoriteComponent} from './components/favorite.component'
import {LoaderComponent} from './components/loader.component'
import {ContainerComponent} from './components/container.component'


new HeaderComponent('header')
new ContainerComponent('container')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const components = [
  {name: 'posts', component: new PostsComponent('posts', loader)},
  {name: 'create', component: new CreateComponent('create')},
  {name: 'favorite', component: new FavoriteComponent('favorite', loader)}
]

navigation.registerComponent(components)