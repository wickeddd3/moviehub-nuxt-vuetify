<template>
  <div>
    <h5 class="subtitle-1 font-weight-light mb-3">
      Sort Results By
    </h5>
    <v-select
      :items="items"
      append-icon="mdi-chevron-down"
      class="my-1"
      hide-details
      solo-inverted
    />
  </div>
</template>

<script>
export default {
  name: 'MoviesSort',
  data () {
    return {
      items: [
        'Popularity Descending',
        'Popularity Ascending',
        'Rating Descending',
        'Rating Ascending',
      ],
    };
  },
};
</script>
