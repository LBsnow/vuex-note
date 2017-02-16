import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {},
  appear:false
}

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      title:state.notes.length+'最新笔记',
      text: 'New note',
      favorite: false,
      goog:false,
      orderTime:Date.now()
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
    state.activeNote.orderTime=Date.now()  //这个返回毫秒数
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },

  CHANGE(state){
    state.appear = !state.appear
  },

  SORT_BY(state){
    state.notes.sort((a,b)=>{
        return b.orderTime-a.orderTime
    })
  }
}

export default new Vuex.Store({
  state,
  mutations
})
