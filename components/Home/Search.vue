<template>
  <v-card
    height="400"
    img="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    flat
    class="d-flex justify-center align-center grey lighten-2"
  >
    <v-row class="mx-15 d-flex flex-column">
      <h2 class="text-lg-h2 text-md-h4 text-sm-h4 white--text font-weight-bold">
        Welcome.
      </h2>
      <h5 class="text-lg-h5 text-md-h6 text-sm-h6 white--text font-weight-medium">
        Millions of movies, TV shows and people to discover. Explore now.
      </h5>
      <v-text-field
        v-model="searchInput"
        label="Search Movies or TV shows"
        append-icon="mdi-magnify"
        color="green"
        class="mt-4"
        flat
        solo
        rounded
        hide-details
        @click:append="search"
        @keyup.enter="search"
      />
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'HomeSearch',
  data () {
    return {
      searchInput: null,
    };
  },
  methods: {
    search () {
      this.$router.push({ name: 'search', query: { query: this.searchInput } });
    },
  },
};
</script>
