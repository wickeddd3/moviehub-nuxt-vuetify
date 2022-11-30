<template>
  <div>
    <!-- Country -->
    <h5 class="subtitle-1 font-weight-light my-5">
      Country
    </h5>
    <v-select
      :items="countries"
      append-icon="mdi-chevron-down"
      class="my-1"
      hide-details
      solo-inverted
    />
    <!-- Country -->
    <div class="d-flex flex-wrap">
      <v-img
        v-for="(item, index) in 20"
        :key="index"
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        position="center center"
        width="50"
        max-width="50"
        max-height="50"
        min-height="50"
        class="mr-3 mt-3"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoviesWatch',
  data () {
    return {
      countries: [
        'United States',
        'United Kingdom',
        'United Arab Emirates',
        'Japan',
        'Korea',
        'Philippines',
        'China',
        'Australia',
        'Canada',
        'India',
      ],
    };
  },
};
</script>
