<template>
	<Row class="c-row--lg">
		<Container>
			<section class="c-gallery">
				<slot></slot>
			</section>
		</Container>
	</Row>
</template>

<script>
	import Row from '@/components/Row';
	import Container from '@/components/Container';

	export default {
		name: 'Gallery',
		props: {
			birds: Array
		},
		components: {
			Row,
			Container
		},
		methods: {
			showBirds: function() {
				console.log( this.birds.length );
				
				for (let index = 0, length = this.birds.length; index < length; index++) {
					console.log( this.birds[index]);
				}
			}
		},
		created: function() {
			this.showBirds();
			console.log( this );
			
		}
	}
</script>

<style lang="scss" scoped>
	@import './src/style/components/components.gallery';
</style>

