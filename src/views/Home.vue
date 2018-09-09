<template>
	<div>
		<Header class="js-header">
			<h1>Birds</h1>
		</Header>

		<!-- ALL THE BIRDS (SIZE AROUND >60%) ODD EVEN HIGHER, LOWER -->
		<Gallery v-bind:birds="birds"></Gallery>

		<Footer>
			<p>At the end.</p>
		</Footer>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default {
	name: 'home',
	data: function (){
		return {
			birds: [
				{ id: 0, name: 'Unknown'},
				{ id: 1, name: 'Unknown'},
				{ id: 2, name: 'Unknown'},
				{ id: 3, name: 'Unknown'},
				{ id: 4, name: 'Unknown'},
				{ id: 5, name: 'Unknown'},
				{ id: 6, name: 'Unknown'},
				{ id: 7, name: 'Unknown'},
				{ id: 8, name: 'Unknown'},
				{ id: 9, name: 'Unknown'},
				{ id: 10, name: 'Unknown' },
				{ id: 11, name: 'Unknown' },
				{ id: 12, name: 'Unknown' },
				{ id: 13, name: 'Unknown' },
				{ id: 14, name: 'Unknown' },
				{ id: 15, name: 'Unknown' },
				{ id: 16, name: 'Unknown' },
				{ id: 17, name: 'Unknown' },
				{ id: 18, name: 'Unknown' },
				{ id: 19, name: 'Unknown' },
				{ id: 20, name: 'Unknown' },
				{ id: 21, name: 'Unknown' },
				{ id: 22, name: 'Unknown' }
			]
		}
	},
	components: {
		Header,
		Gallery,
		Footer
	}
};
</script>
