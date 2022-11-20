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

      <template v-for="menu in menus">
        <v-menu :key="menu.name" offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              color="white"
              text
              link
              class="overline mx-2"
              v-bind="attrs"
              v-on="on"
            >
              {{ menu.name }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in menu.submenu"
              :key="item.name"
              :to="item.route"
              link
              exact
              dense
            >
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

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
      menus: [
        {
          name: 'Movies',
          submenu: [
            {
              name: 'Popular',
              route: '/movies',
            },
            {
              name: 'Now Playing',
              route: '/movies?now-playing',
            },
            {
              name: 'Upcoming',
              route: '/movies?upcoming',
            },
            {
              name: 'Top Rated',
              route: '/movies?top-rated',
            },
          ],
        },
        {
          name: 'TV Shows',
          submenu: [
            {
              name: 'Popular',
              route: '/tv-shows',
            },
            {
              name: 'Airing Today',
              route: '/tv-shows?airing-today',
            },
            {
              name: 'On TV',
              route: '/tv-shows?on-the-air',
            },
            {
              name: 'Top Rated',
              route: '/tv-shows?top-rated',
            },
          ],
        },
      ],
    };
  },
};
</script>
