<template>
  <nav>
    <v-toolbar app>
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>de Germain</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon href="https://github.com/germainsip" target="_blank">
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app>
       <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-tile-action>
                  <v-icon >{{link.icon}}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                  <v-list-tile-title >{{link.text}}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
        { icon: "dashboard", text: "Tableau de bord", route: "/" },
        { icon: "fas fa-beer", text: "Mes Projets", route: "/projects" },
        { icon: "person", text: "Equipe", route: "/team" }
      ]
        }
    },
};
</script>