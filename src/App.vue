<template>
<div id="app">
<HeaderComponent />
<router-view />
</div>
</template>

<script>
import HeaderComponent from '@/components/header-component.vue'
export default {
  name: "App",
  components: {
    HeaderComponent
  }
}
</script>


