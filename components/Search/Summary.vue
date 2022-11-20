<template>
  <v-list class="py-0">
    <v-list-item
      v-for="item in titles"
      :key="item.mediaType"
      :to="{
        name: 'search-slug',
        params: { slug: item.mediaType },
        query: { ...$route.query },
      }"
      color="green"
      link
      exact
    >
      <v-list-item-content>
        <v-list-item-title class="subtitle-1 font-weight-regular">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-chip
          color="lighten-4"
          class="font-weight-light"
          label
          small
        >
          {{ total(item.mediaType) }}
        </v-chip>
      </v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchSummary',
  computed: {
    ...mapGetters({
      titles: 'movie/search/titles',
      movie: 'movie/search/summary/movie/total/results',
      tv: 'movie/search/summary/tv/total/results',
      person: 'movie/search/summary/person/total/results',
      company: 'movie/search/summary/company/total/results',
      collection: 'movie/search/summary/collection/total/results',
      keyword: 'movie/search/summary/keyword/total/results',
    }),
  },
  methods: {
    total (mediaType) {
      return this[mediaType];
    },
  },
};
</script>
