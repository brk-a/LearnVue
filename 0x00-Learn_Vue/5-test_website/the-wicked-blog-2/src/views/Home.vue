<template>
  <div class="home">
    <h1>Home</h1>
    <div class="error" v-if="error"> {{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" v-if="showPosts"/>
    </div>
    <div v-else><h2>Loading...</h2></div>
    <button @click="showPosts = !showPosts">Posts</button>
    <div v-if="showPosts">
      <button @click="posts.pop()">Delete Post</button>
    </div>
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
    const posts = ref([])
    const showPosts = ref(false)
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('There was a problem (no idea what it is) while fetching data')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()

    return {posts, showPosts, error}
  }
}
</script>
