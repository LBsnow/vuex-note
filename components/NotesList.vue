<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>笔记本来了</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            全部笔记
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
            收藏笔记
          </button>
        </div>
      </div>
    </div>
    <div class="middle">
    	      <input type="search" 
    	        class="search"
    	        v-if="appear"
    	        v-model="message"
    	        @keyup.enter="show='sea'">
    </div>

    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group" id="haha">
        <a v-for="note in filteredNotes"
          class="list-group-item" href="#"
          :class="{active: activeNote === note}"
          @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
             {{note.title}}
           </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'

export default {
  data () {
    return {
      show: 'all',
      message:''
    }
  },
  vuex: {
    getters: {
      notes: state => state.notes,
      activeNote: state => state.activeNote,
      appear:state=>state.appear
    },
    actions: {
      updateActiveNote
    }
  },
  computed: {
    filteredNotes () {
      if (this.show === 'all'){
        return this.notes
      } else if (this.show === 'favorites') {
        return this.notes.filter(note => note.favorite)
      }else if (this.show==='sea'){
      	 for (var i = 0; i < this.notes.length; i++) {
    		if(this.notes[i].text.indexOf(this.message)>-1){
    			 this.notes[i].goog=true
    		}
    	} 
    	return this.notes.filter(note=>note.goog)
      }
    }
  },
}
</script>