<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ goat.fname }} {{ goat.lname }}</p>
    <button @click="updateGoat"> Update Goat</button>
    <h2>Reactive</h2>
    <p>{{ cow.fname }} {{ cow.lname }}</p>
    <button @click="updateCow">Update Cow</button>
    <h2>Computed Value</h2>
    <input type="text" v-model="search">
    <p>Search {{ search }}</p>
    <div v-for="animal in matchingNames" :key="animal"> {{ animal }}</div>
    <h2>Watch & WatchEffect</h2>
    <p>Note to reader: Inspect</p>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, reactive, ref } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'

export default {
  name: 'Home',
  setup() {
    const goat = ref({fname: 'Goat', lname: 'Matata'})
    const cow = reactive({fname: 'Dada', lname: 'Ng\'ombe'})
    const animals = ref(['Goat Matata', 'Dada Ng\'ombe', 'Kaka Sungura',
      'Kaka Mbweha', 'Kaka Mbwamwitu', 'Paka the Cat', 'Mzee Kobe', 'Julien the Lemur'])
    const search = ref('')
    
    const updateGoat = () => {
      goat.value.lname = 'Matata Zaidi'
    }

    const updateCow = () => {
      cow.fname = 'Bi.'
    }

    const matchingNames = computed(() => {
      return animals.value.filter((animal) => animal.includes(search.value) )
    })

    const quitWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const quitWatchEffect = watchEffect(() => {
      console.log('watchEffect ran', search.value)
    })

    const handleClick = () => {
      quitWatch()
      quitWatchEffect()
    }

    return {goat, updateGoat, cow, updateCow, animals, search, matchingNames}
  }
}
</script>
