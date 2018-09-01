<template>
	<Row class="c-row--footer c-row--lg">
		<Container>
			<footer class="c-footer">
				<slot></slot>
			</footer>
		</Container>
	</Row>
</template>

<script>
	import Row from '@/components/Row';
	import Container from '@/components/Container';

	export default {
		name: 'Footer',
		components: {
			Row,
			Container
		}
	}
</script>

<style lang="scss" scoped>
	@import './src/style/components/components.footer';
</style>

