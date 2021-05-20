export const state = () => ({
  desks: [
    {
      id: 1,
      title: "PayFly Design",
      category: "Дизайн",
      date: 1621512423903
    },
    {
      id: 2,
      title: "abquick Продажа",
      category: "Маркетинг",
      date: 1621512423903
    },
    {
      id: 3,
      title: "PayFly Design",
      category: "Дизайн",
      date: 1621512423903
    },
  ]
});

export const mutations = {
  addDesk(state, desk) {
    state.desks = [...state.desks, desk]
  }
}

export const actions = {
  createDesk({commit}, desk) {
    commit('addDesk', desk)
  },
}

export const getters = {
  desks: s => s.desks
}
