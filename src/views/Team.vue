<template>
  <div class="team">
    <h1 class="subheading grey--text">Equipe</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
               <v-avatar size="100" class="info elevation-5 mb-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{person.name}}
              </div>
              <div class="grey--text">
                {{person.role}}
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Be Be", role: "Concepteur, Développeur",  avatar: '/commercial.png '},
        { name: "Ryu", role: "Graphic designer", avatar: '/avatar-2.png ' },
        { name: "Chun Li", role: "Web developer", avatar: '/avatar-3.png '},
        { name: "Gouken", role: "Social media maverick", avatar: '/avatar-4.png ' },
        { name: "Yoshi", role: "Sales guru" , avatar: '/avatar-5.png '}
      ] 
    };
  }
};
</script>