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
    <v-navigation-drawer v-model="drawer" app>test</v-navigation-drawer>
  </nav>
</template>
<script>
export default {
    data() {
        return {
            drawer: false
        }
    },
};
</script>