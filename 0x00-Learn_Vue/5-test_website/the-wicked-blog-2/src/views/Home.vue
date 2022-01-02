<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts"/>
    <button @click="showPosts = !showPosts">Posts</button>
    <button @click="posts.pop()">Delete Post</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {PostList},
  setup() {
    const posts = ref([
      {title: 'Welcome to The Wicked Blog', 
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      id: 1},
      {title: 'Why Vue?',
      body: 'Short answer: because Vue. Long answer: lorem ipsum dolor sit amet, consectetur adipiscing elit,\
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
      Morbi tristique senectus et netus et. Orci dapibus ultrices in iaculis \
      nunc sed augue lacus viverra. Senectus et netus et malesuada fames ac\
      turpis egestas. Maecenas pharetra convallis posuere morbi.',
      id: 2}
    ])

    const showPosts = ref(false)

    return {posts, showPosts}
  }
}
</script>
