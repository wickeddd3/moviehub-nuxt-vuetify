<template>
  <div>
    <template v-if="empty">
      <h5 class="subtitle-1 ml-5 mr-2">
        There are no keywords that matched your query.
      </h5>
    </template>
    <template v-else>
      <component
        v-for="result in results"
        :is="resultComponent"
        :value="result"
        :key="result.id"
      />
    </template>
    <v-pagination
      v-if="paginated"
      v-model="page"
      class="my-8"
      :length="length"
      :total-visible="7"
      @input="fetch"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchResults',
  data () {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      results: 'movie/search/multi/results',
      empty: 'movie/search/multi/results/empty',
      paginated: 'movie/search/multi/results/paginated',
      type: 'movie/search/multi/type',
      length: 'movie/search/multi/total/pages',
    }),
    resultComponent () {
      let component = 'SearchResultsMovie';
      switch (this.type) {
      case 'movie':
        component = 'SearchResultsMovie';
        break;
      case 'person':
        component = 'SearchResultsPerson';
        break;
      case 'company':
        component = 'SearchResultsCompany';
        break;
      case 'keyword':
        component = 'SearchResultsKeyword';
        break;
      default:
        component = 'SearchResultsMovie';
      }
      return component;
    },
  },
  methods: {
    ...mapActions({
      searchMulti: 'movie/search/multi',
      searchByMedia: 'movie/search/by/media',
    }),
    fetch (page) {
      const { params: { slug }, query: { query } } = this.$route;
      if (slug && query) {
        this.searchByMedia({ mediaType: slug, query, page });
      } else if (query) {
        this.searchMulti({ query, page });
      }
    },
  },
};
</script>
