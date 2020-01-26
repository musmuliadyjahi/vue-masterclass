<template>
  <div>
    <div v-for="thread in threads" :key="thread" class="col-large push-top">
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
  name: 'HelloWorld',
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

//
<div>
//     <h1>Hello Vue</h1>
//     <div v-for="thread in threads" :key="thread">
//       <h2>{{ thread.title }}</h2>
//       <div v-for="postId in thread.posts" :key="postId">
//         <p>{{ users[posts[postsId]] }}</p>
//         <p>{{ posts[postId].text }}</p>
//       </div>
//     </div>
//   </div>
