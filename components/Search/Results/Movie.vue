<template>
  <v-card
    height="170"
    rounded
    class="mb-5"
  >
    <div class="d-flex flex-no-wrap">
      <v-avatar
        height="170"
        width="110"
        min-width="110"
        tile
      >
        <v-img :src="imgUrl()" />
      </v-avatar>
      <div class="text-truncate">
        <v-card-title class="subtitle-1 font-weight-bold">
          {{ value?.title || value?.name }}
        </v-card-title>
        <v-card-subtitle class="font-weight-medium text--disabled">
          {{ movieDate(value) }}
        </v-card-subtitle>
        <div class="subtitle-2 px-4 pb-4 font-weight-light text-truncate">
          {{ value?.overview }}
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import dateFormat from '../../../mixins/dateFormat';

export default {
  name: 'SearchResultsMovie',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  mixins: [ dateFormat ],
  methods: {
    movieDate (movie) {
      return (this.formatDateToLongDate(movie.release_date)
      || this.formatDateToLongDate(movie.first_air_date)) || '';
    },
    imgUrl () {
      if (this.value?.poster_path) {
        return `//image.tmdb.org/t/p/w220_and_h330_face/${this.value?.poster_path}`;
      }
      return 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg';
    },
  },
};
</script>
