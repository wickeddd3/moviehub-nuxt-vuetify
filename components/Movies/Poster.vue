<template>
  <v-card
    :to="moviePath"
    class="ma-2"
    color="transparent"
    height="360"
    width="195"
    flat
    link
  >
    <v-card
      :img="imgUrl"
      class="ma-2"
      height="270"
      width="180"
      flat
    />
    <v-avatar size="40" style="position: absolute; bottom: 65px; left: 20px;" color="grey" />
    <v-card-actions class="d-flex flex-column align-start my-6">
      <h6 class="text-md-subtitle-2 font-weight-black">
        {{ movieName }}
      </h6>
      <h6 class="text-md-subtitle-2 font-weight-light">
        {{ movieDate }}
      </h6>
    </v-card-actions>
  </v-card>
</template>

<script>
import dateFormat from '../../mixins/dateFormat';

export default {
  name: 'MoviesPoster',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: 'movie',
    },
  },
  mixins: [ dateFormat ],
  computed: {
    movieName () {
      return (this.type === 'movie') ? this.value.title : this.value.name;
    },
    movieDate () {
      if (this.value.release_date !== '' || this.value.first_air_date !== '') {
        return (this.type === 'movie')
          ? this.formatDateToLongDate(this.value.release_date)
          : this.formatDateToLongDate(this.value.first_air_date);
      }
      return '';
    },
    moviePath () {
      return (this.type === 'movie') ? `/movies/${this.value.id}` : `/tv-shows/${this.value.id}`;
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
