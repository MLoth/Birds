<template>
	<Row class="c-row--lg">
		<Container>
			<section class="c-gallery">
				<bird-tile v-for="(item, index) in birds" v-on:click.native="showDetail( $event )" :key="index" :bird="item">
				</bird-tile>
				<div class="c-gallery-curtain js-curtain"></div>
			</section>
		</Container>
	</Row>
</template>

<script>
	import Row from '@/components/Row';
	import Container from '@/components/Container';
	import BirdTile from '@/components/BirdTile';

	export default {
		name: 'Gallery',
		props: {
			birds: Array
		},
		components: {
			Row,
			Container,
			BirdTile
		},
		methods: {
			showDetail( event ) {
				let target = event.target,
					curtain = document.querySelector( '.js-curtain' );

				window.history.pushState( null, 'Name', '/bird/' );

				target.parentNode.addEventListener( 'transitionend', function( e ) {
					// basically our (now) full screen tile
					let fullscreenHeader = e.target;
					fullscreenHeader.style.transition = 'none';
					fullscreenHeader.style.transform = '';
					// Dirty for keeping exact same size
					fullscreenHeader.style.width = '100%';
					fullscreenHeader.classList.add( 'is-glued' );

					// TODO: remove this listener
					// Todo: Slide hidden content down
				});

				// offsets to a single transform
				target.parentNode.classList.add( 'c-bird-tile--full' );
				let offset = target.parentNode.offsetTop,
					scrolled = window.scrollY;
				// Unable to keep CSS added by class
				target.parentNode.style.transform = `translateY( -${ ( offset - scrolled ) }px ) translateX( -12px )`;

				curtain.classList.add( 'is-visible' );
			}
		},
		// created: function() {
		// 	this.showBirds();
		// 	console.log( this );
		// }
	}
</script>

<style lang="scss" scoped>
	@import './src/style/components/components.gallery';
</style>

