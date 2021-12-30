<template>
  <p class="result">Reaction time: {{ score }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['score'],
    data() {
        return {
            rank: null,
        }
    },
    mounted() {
        if (this.score < 150) {
            this.rank = 'Fancy Fingers!'
        } else if (this.score < 300) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail\'s Pace...'
        }
    },
}
</script>

<style>
.rank{
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}
</style>