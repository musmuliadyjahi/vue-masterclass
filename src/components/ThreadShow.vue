<template>
  <div>
    <div class="col-large push-top">
      <h2>{{ thread.title }}</h2>

      <div class="post-list">
        <div v-for="postId in thread.posts" :key="postId" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{
              users[posts[postId].userId].name
            }}</a>

            <a href="#">
              <img
                class="avatar-large"
                :src="users[posts[postId].userId].avatar"
                alt=""
              />
            </a>

            <p class="desktop-only text-small">107 posts</p>
          </div>

          <div class="post-content">
            <div>
              {{ posts[postId].text }}
            </div>
          </div>

          <div class="post-date text-faded">
            {{ posts[postId].publishedAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data';
console.log(sourceData);

export default {
  name: 'ThreadShow',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      thread: sourceData.threads[this.$route.params.id],
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>
<style></style>
