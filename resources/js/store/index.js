import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProduct (state, product) {
      state.products.push(product)
    },
    updateProduct (state, product) {
      const index = state.products.findIndex(p => p.id === product.id)
      state.products[index] = product
    },
    deleteProduct (state, id) {
      state.products = state.products.filter(p => p.id !== id)
    }
  },
  actions: {
    async addProduct (context, product) {
      await axios.post('/api/products', product)
      context.commit('addProduct', product)
    },
    async updateProduct (context, product) {
      await axios.put('/api/products/' + product.id, product)
      context.commit('updateProduct', product)
    },
    async deleteProduct (context, id) {
      await axios.delete('/api/products/' + id)
      context.commit('deleteProduct', id)
    }
  }
})
