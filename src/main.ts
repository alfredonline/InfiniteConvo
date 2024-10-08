import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPlane,
  faUtensils,
  faLaptop,
  faLeaf,
  faLandmark,
  faTriangleExclamation,
  faBrush,
  faLanguage,
  faBrain,
  faHeart,
  faHandHoldingHeart,
  faHandHoldingUsd,
  faHandHoldingDollar,
  faHandHoldingMedical,
  faFilm,
  faCamera,
  faSoccerBall
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPlane,
  faUtensils,
  faLaptop,
  faLeaf,
  faLandmark,
  faTriangleExclamation,
  faBrush,
  faLanguage,
  faBrain,
  faHeart,
  faHandHoldingHeart,
  faHandHoldingUsd,
  faHandHoldingDollar,
  faHandHoldingMedical,
  faCamera,
  faFilm,
  faSoccerBall
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
