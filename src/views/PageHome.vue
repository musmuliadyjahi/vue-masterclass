<template>
  <div class="home">
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads" />
    <!-- <ThreadList :threads="Object.values(threads)" /> -->
  </div>
</template>

<script>
import sourceData from '@/data';
import ThreadList from '@/components/ThreadList';
console.log(sourceData);

export default {
  name: 'home',
  components: {
    ThreadList
  },

  data() {
    return {
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>
<style></style>
