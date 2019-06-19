<template>
  <div class="projects">
    <v-container class="my-2">
      <h1 class="subheading grey--text mb-3">Mes Projets</h1>
        <v-expansion-panel popout>
          <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
            <div slot="header">{{project.title}}</div>
            <v-card>
              <v-card-text class="amber--text text--lighten-2">
                <div class="font-weight-bold">prévu pour: {{project.due}}</div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
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
    }
  },
  computed: {
    myProjects(){
      return this.projects.filter(projects => {
        return projects.person === 'Be Be'
      })
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
  }
  
</script>

