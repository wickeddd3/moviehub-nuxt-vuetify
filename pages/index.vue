<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="9" lg="12" md="12" sm="12">
        <HomeSearch />
        <HomeMovies
          title="What's Popular"
          :movies="popular"
        />
        <HomeMovies
          title="Top Rated"
          :movies="topRated"
        />
        <HomeTrailers title="Latest Trailers" />
        <HomeMovies
          title="Upcoming"
          :movies="upcoming"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters({
      popular: 'movie/home/popular/results',
      topRated: 'movie/home/topRated/results',
      upcoming: 'movie/home/upcoming/results',
    }),
  },
  created () {
    Promise.all([
      this.fetchMovies('popular'),
      this.fetchMovies('top_rated'),
      this.fetchMovies('upcoming'),
    ]);
  },
  methods: {
    ...mapActions({
      fetchMovies: 'movie/home/list',
    }),
  },
};
</script>
