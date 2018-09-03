import store from '../store';

export default function (to, from) {
	// go tell the store to update the page
	store.commit('updatePage', to.name );
}