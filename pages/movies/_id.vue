<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      height="570"
    >
      <v-row
        align="start"
        justify="center"
        class="mx-12 my-15"
      >
        <v-col
          cols="3"
        >
          <MoviePoster :poster="movie?.poster_path" />
        </v-col>
        <v-col
          cols="9"
          align-self="center"
        >
          <MovieSummary
            type="movie"
            :value="movie"
          />
        </v-col>
      </v-row>
    </v-parallax>

    <v-row>
      <v-col cols="9">
        <MovieCasts />
      </v-col>
      <v-col cols="3">
        <MovieDetails />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MoviePage',
  computed: {
    ...mapGetters({
      movie: 'movie/movies/current',
    }),
  },
  created () {
    this.fetchMovie(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchMovie: 'movie/movies/current/get',
    }),
  },
};
</script>
