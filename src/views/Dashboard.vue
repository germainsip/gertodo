<template>
  <div class="dashboard">
    <v-container class="my-5">
 <span>
        <v-img :src="require('@/assets/logoG.png')" contain height="170" class="mb-4"></v-img>
      </span>
      <h1 class="display-2">
        Salut je suis une app 
        <span class="text-uppercase light-green--text">  electron </span>
      </h1>
      
      
      <v-btn block dark color="indigo">Commencer<v-icon right>fas fa-door-open</v-icon></v-btn>
   
    </v-container>
     
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
