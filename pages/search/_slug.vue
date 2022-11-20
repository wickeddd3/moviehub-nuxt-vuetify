<template>
  <SearchContainer />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SearchSlugPage',
  created () {
    const { params: { slug }, query: { query } } = this.$route;
    this.fetch(slug, query);
  },
  methods: {
    ...mapActions({
      searchByMedia: 'movie/search/by/media',
      fetchSummary: 'movie/search/summary',
    }),
    fetch (slug, query) {
      if (slug && query) {
        this.searchByMedia({ mediaType: slug, query });
      }
      if (query) {
        this.fetchSummary({ query });
      }
    },
  },
};
</script>
