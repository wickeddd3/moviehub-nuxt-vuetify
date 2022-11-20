<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xl="10" lg="12" md="12" sm="12">
        <h5 class="text-h4 font-weight-medium my-6">
          TV Shows
        </h5>
        <v-row>
          <v-col cols="12" xl="3" lg="4" md="4" sm="12">
            <MoviesOption />
          </v-col>
          <v-col cols="12" xl="9" lg="8" md="8" sm="12">
            <div class="d-flex flex-wrap">
              <template v-for="(movie, index) in movies">
                <MoviesPoster
                  type="tvshow"
                  :key="`${movie.id}-${index}`"
                  :value="movie"
                />
              </template>
            </div>
            <v-btn
              color="green"
              block
              large
              class="text-h6 text-capitalize font-weight-bold mt-8 mb-12"
              @click="loadMore"
            >
              Load More
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getTvshowQueryAndTitle } from '../../utils/tvshowQueryTitle';

export default {
  name: 'TvShowsPage',
  data () {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      movies: 'movie/tvshows/results',
    }),
  },
  created () {
    this.fetch(this.$route.fullPath);
  },
  beforeRouteUpdate (to, from, next) {
    this.fetch(to.fullPath);
    next();
  },
  methods: {
    ...mapActions({
      fetchMovies: 'movie/tvshows/list',
    }),
    fetch (path) {
      const { query: movieType } = getTvshowQueryAndTitle(path);
      this.fetchMovies({ movieType });
    },
    async loadMore () {
      const { query: movieType } = getTvshowQueryAndTitle(this.$route.fullPath);
      await this.fetchMovies({ movieType, page: this.page + 1 });
      this.page++;
    },
  },
};
</script>
