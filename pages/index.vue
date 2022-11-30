<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="9" lg="12" md="12" sm="12">
        <HomeSearch />
        <HomeMovies
          title="What's Popular"
          :ready="popularReady"
          :movies="popular"
        />
        <HomeMovies
          title="Top Rated"
          :ready="topRatedReady"
          :movies="topRated"
        />
        <HomeTrailers title="Latest Trailers" />
        <HomeMovies
          title="Upcoming"
          :ready="upcomingReady"
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
      popular: 'movie/home/popular/value/results',
      popularReady: 'movie/home/popular/ready',
      topRated: 'movie/home/topRated/value/results',
      topRatedReady: 'movie/home/topRated/ready',
      upcoming: 'movie/home/upcoming/value/results',
      upcomingReady: 'movie/home/upcoming/ready',
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
