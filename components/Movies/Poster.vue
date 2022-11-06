<template>
  <v-card
    to="/movies/1"
    class="ma-2"
    color="transparent"
    height="360"
    width="195"
    flat
    link
  >
    <v-card
      color="grey lighten-1"
      class="ma-2"
      height="270"
      width="180"
      flat
    />
    <v-avatar size="40" style="position: absolute; bottom: 65px; left: 20px;" color="grey" />
    <v-card-actions class="d-flex flex-column align-start my-6">
      <h6 class="text-md-subtitle-2 font-weight-black">
        Movie Title
      </h6>
      <h6 class="text-md-subtitle-2 font-weight-light">
        Dec 25, 2022
      </h6>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MoviesPoster',
};
</script>
