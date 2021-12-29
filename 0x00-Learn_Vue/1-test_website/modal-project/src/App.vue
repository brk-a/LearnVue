<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <input type="text" ref="name1">
  <button @click="handle_click">click me</button>
  <br>
  <div v-if="showModal">
    <Modal :header="header" :text="text" :theme="sale" @close="toggle_modal"/>
  </div>
  <button @click="toggle_modal">Open Modal</button>
  <teleport  to=".modals" v-if="showModal">
      <Modal :theme="sale" @close="toggle_modal">
        <template v-slot:links>
          <a href="http://www.example.com"> Example Website</a>
          <a href="https://www.google.com">Google Website</a>
        </template>
        <h1>This is a slot in Vue</h1>
        <p>A slot, just like a prop, is used for dynamic info. Slots, however, ae scalable.</p>
      </Modal>
  </teleport>
  <br>
  <button @click="toggle_modal_two">Open Modal Two</button>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal :theme="idd" @close="toggle_modal_two">
      <template v-slot:links2>
        <a href="#">Daawah Centre</a>
        <a href="#">Masjid Near Me</a>
      </template>
      <h1>This is another slot</h1>
      <p>The 72 virgins: did anyone ask about their gender and sexual orientation?</p>
    </Modal>
  </teleport>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { HelloWorld, Modal },
  methods: {
    handle_click() {
      console.log(this.$refs.name1)
      this.$refs.name1.classList.add('active')
      this.$refs.name1.focus()
    },
    toggle_modal() {
      this.showModal = !this.showModal
    },
    toggle_modal_two() {
      this.showModalTwo = !this.showModalTwo
    }
  },
  data () {
    return {
      title: 'My First Vue App',
      header: 'Sign up for the Giveaway!',
      text: 'Get 1 free with each purchase',
      showModal: false,
      showModalTwo: false
    }
  },
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
