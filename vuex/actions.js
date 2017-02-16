//添加
export const addNote = ({dispatch})=>{
	dispatch('ADD_NOTE')
}
//编辑
export const editNote = ({dispatch},e)=>{
	dispatch('EDIT_NOTE',e.target.value)
}
//删除
export const deleteNote=({dispatch})=>{
	dispatch('DELETE_NOTE')
}
//更新状态
export const updateActiveNote=({dispatch},note)=>{
	dispatch('SET_ACTIVE_NOTE',note)
}
//切换
export const toggleFavorite=({dispatch})=>{
	dispatch('TOGGLE_FAVORITE')
}

export const change=({dispatch})=>{
	dispatch('CHANGE')
}

export const sortBy=  ({dispatch})=>{
	dispatch('SORT_BY')
}