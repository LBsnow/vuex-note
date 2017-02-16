<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-heart"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-trash"></i>
    <i class="glyphicon glyphicon-search" @click="change"></i>
    <i class="glyphicon glyphicon-sort-by-order" @click="sortBy"></i>
  </div>
</template>

<script>
import { addNote, deleteNote, toggleFavorite, change, sortBy} from '../vuex/actions'

export default {
  vuex: {
    getters: {
      activeNote: state => state.activeNote
    },
    actions: {
      addNote,
      deleteNote,
      toggleFavorite,
      change,
      sortBy
    }
  }
}
</script>
