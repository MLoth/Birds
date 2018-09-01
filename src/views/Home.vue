<template>
	<div class="home">
		<Header>
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
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[],
				[]
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
