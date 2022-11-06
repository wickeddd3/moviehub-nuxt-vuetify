<template>
  <v-app-bar
    dark
    elevate-on-scroll
    class="grey darken-4"
  >
    <v-container class="d-flex align-center">
      <v-toolbar-title
        tag="router-link"
        to="/"
        class="font-weight-bold green--text mr-4 text-decoration-none"
      >
        MovieHub
      </v-toolbar-title>

      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        color="white"
        text
        link
        class="overline mx-2"
      >
        {{ link.name }}
      </v-btn>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      links: [
        {
          name: 'Movies',
          to: '/movies',
        },
        {
          name: 'TV Shows',
          to: '/tv-shows',
        },
        {
          name: 'People',
          to: '/people',
        },
        {
          name: 'More',
          to: '/more',
        },
      ],
    };
  },
};
</script>
