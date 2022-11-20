<template>
  <v-card
    height="50"
    rounded
    class="d-flex align-center mb-2"
  >
    <h5 class="subtitle-1 ml-5 mr-2">
      {{ value.name }}
    </h5>
    <v-chip
      v-if="value?.origin_country"
      color="lighten-4"
      class="font-weight-light"
      label
      small
    >
      {{ value.origin_country }}
    </v-chip>
  </v-card>
</template>

<script>
export default {
  name: 'SearchResultsCompany',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
