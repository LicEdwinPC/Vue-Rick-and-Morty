

import { createStore } from 'vuex'

export default createStore({
  state: {
    characters:[],
    charactersFilter:[]
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({commit}){
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character/')
        const data = await res.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
        console.log(error);
      }
      
    },
    filterByStatus({commit,state},status){
      const results = state.characters.filter((character) => character.status === status)
      commit('setCharactersFilter', results)
    },
    filterByName({commit, state}, name){
      const results = state.characters.filter((character) => character.name.toLowerCase().includes(name.toLowerCase()))
      commit('setCharactersFilter', results)
    },
    
  },
  modules: {
  }
})
