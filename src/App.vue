<template>
  <div id="app">
  	<keep-alive exclude='detail'>
		<router-view/>
	</keep-alive>	
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	* { touch-action: none; } 
	#app{
		padding-top: 1rem;
	}
</style>
