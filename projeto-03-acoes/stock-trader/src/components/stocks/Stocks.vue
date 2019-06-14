<template>
  <v-layout row wrap>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>

<script>
  import stock from "./Stock"

  export default {
    components: { stock },
    computed: {
      stocks() {
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style>

</style>
