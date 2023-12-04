// store/modules/users.js

const state = {
  user: null, // Initial user state
};

const mutations = {
  setUser(state, user) {
    state.user = user.user_infos; // Update user state with provided user data
  },
  clearUser(state) {
    state.user = null; // Clear user data from state
  },
};

const actions = {
  async loginUser({ commit }, userData) {
    try {
      const response = await axios.post('/api/login', userData);
      const user = response.data;
      commit('setUser', user);
      return {  user }; // Return success and user data
    } catch (error) {
      throw new Error('An error occurred during login.');
    }
  },

  logoutUser({ commit }){
    commit('clearUser');
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
