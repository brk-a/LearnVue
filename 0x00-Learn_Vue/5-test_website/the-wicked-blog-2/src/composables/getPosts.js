import { ref } from '@vue/reactivity'

const getPosts = () => {
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

    return {posts, showPosts, error, load}
}

export default getPosts