<template>
  <div class="my-12 mx-15">
    <div class="d-flex align-center">
      <h5 class="text-h5 mx-15">
        Media
      </h5>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="green"
      >
        <v-tab
          v-for="item in items"
          :key="item"
          class="text-capitalize"
        >
          {{ item }} 8
        </v-tab>
      </v-tabs>
    </div>

    <v-tabs-items v-model="tab" class="mx-15 my-8 transparent">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <MovieMediaTrailers v-if="item === 'Trailers'" />
        <MovieMediaPosters v-if="item === 'Posters'" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: 'MovieMedia',
  data () {
    return {
      tab: null,
      items: [
        'Trailers', 'Posters',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>
