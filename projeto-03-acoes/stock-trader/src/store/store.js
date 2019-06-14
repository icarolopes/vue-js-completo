import vue from 'vue'
import vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    stocks,
    portfolio
  }
})