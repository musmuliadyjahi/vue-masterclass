<template>
  <div class="thread">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ThreadShow msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ThreadShow from '../components/ThreadShow.vue';

export default {
  name: 'thread',
  components: {
    ThreadShow
  }
};
</script>
