// store/index.js

import { createStore } from 'vuex';
import productsModule from './modules/products';
import usersModule from './modules/users';

export default createStore({
  modules: {
    products: productsModule,
    users: usersModule,
  }
});
