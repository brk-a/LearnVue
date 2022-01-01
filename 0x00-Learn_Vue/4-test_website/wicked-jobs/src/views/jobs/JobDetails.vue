<template>
  <h1>Job Details</h1>
  <p>Job ID: {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
    //Alternative method: use the data() function and delete `props: true` in index.js
    //data() {
    //    return {
    //        id: this.$route.params.id,
    //    }
    //},

}
</script>

<style>

</style>