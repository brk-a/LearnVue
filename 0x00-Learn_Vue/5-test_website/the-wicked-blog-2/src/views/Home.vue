<template>
  <div class="home">
    <h1>Home</h1>
    <div class="error" v-if="error"> {{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" v-if="showPosts"/>
    </div>
    <div v-else><h2>Loading...</h2></div>
    <span><button @click="showPosts = !showPosts">Posts</button></span>
    <span v-if="showPosts">
      <button @click="posts.pop()">Delete Post</button>
    </span>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {PostList},
  setup() {
    const {posts, error, showPosts, load} = getPosts()

    load()

    return {posts, showPosts, error}
  }
}
</script>
