<template>
	<Row class="c-row--lg">
		<Container>
			<header class="c-header">
				<slot></slot>
			</header>
		</Container>
	</Row>
</template>

<script>
	import Row from '@/components/Row';
	import Container from '@/components/Container';

	export default {
		name: 'Header',
		components: {
			Row,
			Container
		}
	}
</script>

<style lang="scss" scoped>
	@import './src/style/components/components.header';
</style>

