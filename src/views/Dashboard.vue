<template>
  <div class="dashboard">
    <v-container class="my-5">
      <v-card  class="pa-3 ma-1">
        <span>
          <v-img :src="require('@/assets/logoG.png')" contain height="170" class="mb-4"></v-img>
        </span>
        <h1 class="display-2">
          Salut je suis une app
          <span class="text-uppercase light-green--text">electron</span>
          
        </h1>
<p class="subheading">adaptée sur un Tuto de "The Net Ninja"</p>
        <v-btn block dark color="indigo">
          Commencer
          <v-icon right>fas fa-door-open</v-icon>
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
