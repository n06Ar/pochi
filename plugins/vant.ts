import { defineNuxtPlugin } from 'nuxt/app'
import { Row, Col, Icon, Image, Cell, CellGroup } from 'vant'

import 'vant/lib/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Row).use(Col).use(Image).use(Icon).use(Cell).use(CellGroup)
})
