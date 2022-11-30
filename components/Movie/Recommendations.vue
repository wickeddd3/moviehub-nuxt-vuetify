<template>
  <div class="my-12 mx-15">
    <v-row class="mb-8 ml-15">
      <h5 class="text-h5">
        {{ title }}
      </h5>
    </v-row>
    <v-slide-group
      class="px-10"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="movie in movies"
        :key="movie.id"
      >
        <v-card
          :to="`/movies/${movie.id}`"
          class="ma-2"
          color="transparent"
          height="340"
          width="165"
          link
          flat
        >
          <v-card
            :img="`//image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`"
            class="ma-2"
            height="225"
            width="150"
            flat
          />
          <v-card-actions class="d-flex flex-column align-start my-6">
            <h6 class="text-md-subtitle-2 font-weight-black">
              {{ movie.name || movie.title }}
            </h6>
          </v-card-actions>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: 'MovieRecommendations',
  props: {
    title: {
      type: String,
      default: '',
    },
    movies: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
