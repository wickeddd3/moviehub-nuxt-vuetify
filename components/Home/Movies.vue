<template>
  <v-container class="pa-0 my-15 py-8">
    <v-row class="mb-8 ml-14">
      <h5 class="text-lg-h5 font-weight-black mr-8">
        {{ title }}
      </h5>
      <v-btn-toggle
        value=""
        color="green"
        rounded
        dense
        dark
        borderless
      >
        <v-btn class="overline px-5">
          Streaming
        </v-btn>
        <v-btn class="overline px-5">
          On TV
        </v-btn>
        <v-btn class="overline px-5">
          For Rent
        </v-btn>
        <v-btn class="overline px-5">
          In Theaters
        </v-btn>
      </v-btn-toggle>
    </v-row>
    <v-slide-group
      v-model="model"
      class="pa-0"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="movie in movies"
        :key="movie.id"
      >
        <v-card
          :to="`/movies/${movie.id}`"
          class="ma-2"
          color="transparent"
          height="340"
          width="165"
          link
          flat
        >
          <v-card
            :img="`//image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
            class="ma-2"
            height="225"
            width="150"
            flat
          />
          <v-avatar size="40" style="position: absolute; bottom: 90px; left: 20px;" color="grey" />
          <v-card-actions class="d-flex flex-column align-start my-6">
            <h6 class="text-md-subtitle-2 font-weight-black">
              {{ movie.name }}
            </h6>
            <h6 class="text-md-subtitle-2 font-weight-light">
              {{ formatDateToLongDate(movie.release_date) || '' }}
            </h6>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import dateFormat from '../../mixins/dateFormat';

export default {
  name: 'HomeMovies',
  props: {
    title: {
      type: String,
      default: '',
    },
    movies: {
      type: Array,
      default: () => [],
    },
  },
  mixins: [ dateFormat ],
  data: () => ({
    model: null,
  }),
};
</script>
