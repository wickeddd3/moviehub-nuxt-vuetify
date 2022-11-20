<template>
  <SearchContainer />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchPage',
  created () {
    const { query: { query } } = this.$route;
    this.fetch(query);
  },
  methods: {
    ...mapActions({
      searchMulti: 'movie/search/multi',
      fetchSummary: 'movie/search/summary',
    }),
    fetch (query) {
      if (query) {
        this.searchMulti({ query });
        this.fetchSummary({ query });
      }
    },
  },
};
</script>
