<template>
  <div class="dashboard">
    <v-container class="my-5">
      
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      width="300"
    >
      <v-card  class="pa-3">
        <span>
          <v-img :src="require('@/assets/logoG.png')" contain height="170" class="mb-4"></v-img>
        </span>
        <h1 class="display-2">
          Salut, je suis une app
          <span class="text-uppercase light-green--text">electron</span>
          
        </h1>
<p class="subheading">Adaptée sur un Tuto de "The Net Ninja"</p>
        <v-btn block dark color="indigo" @click="dialog = false">
          Commencer
          <v-icon right>fas fa-door-open</v-icon>
        </v-btn>
      </v-card>
      </v-dialog>
    </v-container>
    
    <h1 class="subheading grey--text">Tableau de bord <v-btn
      icon
      flat
      @click.stop="dialog = true"
    >
      <v-icon color="grey">far fa-question-circle</v-icon>
    </v-btn></h1>
    <v-container class="my-5">
      <v-card class="my-1" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "commencé",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "fait",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "fait",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "dépassé",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  }
};
</script>

<style>
.project.fait {
  border-left: 4px solid #3cd1c2;
}
.project.commencé {
  border-left: 4px solid orange;
}
.project.dépassé {
  border-left: 4px solid tomato;
}
.v-chip.fait{
  background: #3cd1c2;
}
.v-chip.commencé{
  background: #ffaa2c;
}
.v-chip.dépassé{
  background: #f83e70;
}
</style>