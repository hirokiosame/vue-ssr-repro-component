<template>
	<div :class="$style.TestComponent">
		TestComponent
	</div>
</template>

<script>

	const TestComponent = {
		name: 'TestComponent',
	};

	export default TestComponent;
</script>

<style module>

.TestComponent {
	height: 500px;
	width: 500px;
	border: 1px solid red;
	background-color: yellow;
}

</style>