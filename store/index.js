import createPersistedState from 'vuex-persistedstate';

const storeState = () => ({
  counter: 0,
});

const mutations = {
  increment(state) {
    state.counter += 1;
  },
  decrement(state) {
    state.counter -= 1;
  },
};

const plugins = [
  createPersistedState(),
];

export default {
  state: storeState,
  mutations,
  plugins,
  //
};
