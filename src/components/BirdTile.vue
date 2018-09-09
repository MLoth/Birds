<template>
	<router-link :to="`/bird/${ bird.id }`" class="c-bird-tile">
		<img :src="getImageUrl( bird.id )" :alt="`${ bird.name }`">

		<article>
			<h1>{{ bird.name }}</h1>
			<p>{{ bird.description || 'Test data' }}</p>
		</article>
	</router-link>
</template>

<script>
	export default {
		name: 'BirdTile',
		props: {
			bird: Object
		},
		methods: {
			getImageUrl( imageId ) {
    			return require('../assets/birds/bird-' + imageId + '.jpg' );
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './src/style/components/components.bird';
</style>
