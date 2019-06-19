<template>
  <div class="dashboard">
    <!-- <v-container> -->
      <v-dialog v-model="dialog" hide-overlay persistent>
        <v-card class="pa-3">
          <span>
            <v-img :src="require('@/assets/logoG.png')" contain height="170" class="mb-4"></v-img>
          </span>
          <h1 class="display-2">
            Salut, je suis une app
            <span class="text-uppercase light-green--text">electron</span>
            de gestion de tâches
          </h1>
          <p class="subheading">Adaptée sur un Tuto de "The Net Ninja"</p>
          <v-btn block dark color="indigo" @click="dialog = false">
            Compris
            <v-icon right>fas fa-thumbs-up</v-icon>
          </v-btn>
        </v-card>
      </v-dialog>
    <!-- </v-container> -->

    
    <v-container class="my-2">
      <h1 class="subheading grey--text">
      Tableau de bord
      <v-btn icon flat @click.stop="dialog = true">
        <v-icon color="grey">far fa-question-circle</v-icon>
      </v-btn>
    </h1>
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">Par nom de Projet</span>
          </v-btn>
          <span>Trier les projets par noms</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">Par Acteur</span>
          </v-btn>
          <span>Trier les projets par acteurs</span>
        </v-tooltip>
      </v-layout>
      <v-card class="my-1" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Titre</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Acteur</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Prévu</div>
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
import db from '@/fb'
export default {
  data() {
    return {
      projects: [
        
        
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  },
  created(){
    db.collection('projects').onSnapshot(res =>{
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === 'added'){
this.projects.push({
  ...change.doc.data(),
  id: change.doc.id
})
        }
      })
    })
  }
};
</script>

<style>
.project.fait {
  border-left: 4px solid #0c5b5a;
}
.project.commencé {
  border-left: 4px solid #f55f14;
}
.project.dépassé {
  border-left: 4px solid #d52339;
}
.v-chip.fait {
  background: #0c5b5a;
}
.v-chip.commencé {
  background: #f55f14;
}
.v-chip.dépassé {
  background: #d52339;
}
</style>