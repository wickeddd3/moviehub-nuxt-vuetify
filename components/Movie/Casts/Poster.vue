<template>
  <v-card
    class="ma-2"
    color="transparent"
    height="255"
    width="138"
    flat
  >
    <v-card
      img="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      class="ma-2"
      height="175"
      width="125"
      flat
    />
    <v-card-actions class="d-flex flex-column align-start my-6">
      <h6 class="text-md-subtitle-2 font-weight-black">
        John Doe
      </h6>
      <h6 class="text-md-subtitle-2 font-weight-light">
        John
      </h6>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCastsPoster',
};
</script>
