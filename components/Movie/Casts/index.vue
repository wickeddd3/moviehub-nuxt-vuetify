<template>
  <div class="my-12 mx-15">
    <h5 class="text-h5 ml-15">
      Casts
    </h5>
    <v-slide-group
      v-model="model"
      class="pa-0"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
      >
        <MovieCastsPoster />
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script>
export default {
  name: 'MovieCasts',
  data: () => ({
    model: null,
  }),
};
</script>
