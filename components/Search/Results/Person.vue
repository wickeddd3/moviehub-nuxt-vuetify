<template>
  <v-card
    height="80"
    rounded
    class="mb-5"
  >
    <div class="d-flex flex-no-wrap">
      <v-avatar
        height="80"
        width="80"
        min-width="80"
        tile
      >
        <v-img :src="imgUrl()" />
      </v-avatar>
      <div class="text-truncate">
        <v-card-title class="subtitle-1 font-weight-bold py-2">
          {{ value?.name }}
        </v-card-title>
        <div class="subtitle-2 px-4 font-weight-light text-truncate">
          {{ knownFor() }}
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'SearchResultsPerson',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    imgUrl () {
      if (this.value?.poster_path) {
        return `//image.tmdb.org/t/p/w220_and_h330_face/${this.value?.profile_path}`;
      }
      return 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg';
    },
    knownFor () {
      const knownFor = this.value?.known_for.reduce((total, currentValue) => {
        total += ` ${currentValue.original_title} • `;
        return total;
      }, '');
      return `${this.value?.known_for_department} • ${knownFor}`;
    },
  },
};
</script>
