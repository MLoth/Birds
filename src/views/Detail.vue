<template>
  <div class="home">
	  <Header>
		  <h1>Hi there!</h1>
	  </Header>
	<img alt="Vue logo" src="../assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from '@/components/Header';

export default {
	name: 'Detail',
	components: {
		Header,
		HelloWorld
	}
};
</script>
