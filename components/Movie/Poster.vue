<template>
  <v-card
    class="ma-2"
    color="transparent"
    height="510"
    width="315"
    flat
  >
    <v-card
      :img="imgUrl"
      class="ma-2"
      height="450"
      width="300"
      flat
    />
    <v-card-actions class="d-flex flex-column align-start my-6" />
  </v-card>
</template>

<script>
export default {
  name: 'MoviePoster',
  props: {
    poster: {
      type: String,
      default: '',
    },
  },
  computed: {
    imgUrl () {
      if (this.poster) {
        return `//image.tmdb.org/t/p/w300_and_h450_bestv2/${this.poster}`;
      }
      return 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg';
    },
  },
};
</script>
