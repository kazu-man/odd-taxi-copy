<template>
  <v-app dark>
    
    <Header />

    <v-main>
      <v-container>
        <Nuxt v-cloak/>
      </v-container>
    </v-main>

    <Footer />

  </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>

  .container {
    padding:0 !important;
    max-width:100% !important;
  }

</style>