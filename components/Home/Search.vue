<template>
  <v-card
    height="400"
    img="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
        label="Search Movies or TV shows"
        append-icon="mdi-magnify"
        color="green"
        class="mt-4"
        flat
        solo
        rounded
        hide-details
      />
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'HomeSearch',
};
</script>
