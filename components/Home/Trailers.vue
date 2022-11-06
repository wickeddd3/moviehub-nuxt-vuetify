<template>
  <v-container class="pa-0 my-8">
    <v-card
      class="pt-6 pb-12"
      flat
    >
      <v-row class="mb-8 ml-14 mt-6">
        <h5 class="text-lg-h5 font-weight-black mr-8">
          Latest Trailers
        </h5>
        <v-btn-toggle
          value=""
          color="green"
          rounded
          dense
          dark
          borderless
        >
          <v-btn class="overline px-5">
            Streaming
          </v-btn>
          <v-btn class="overline px-5">
            On TV
          </v-btn>
          <v-btn class="overline px-5">
            For Rent
          </v-btn>
          <v-btn class="overline px-5">
            In Theaters
          </v-btn>
        </v-btn-toggle>
      </v-row>
      <v-slide-group
        v-model="model"
        class="pa-0"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            class="ma-2"
            color="transparent"
            height="250"
            width="316"
            @click="toggle"
            flat
          >
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-2"
              height="168"
              width="300"
              flat
            />
            <v-card-actions class="d-flex flex-column align-center my-2">
              <h6 class="text-md-subtitle-2 font-weight-black">
                Movie Title
              </h6>
              <h6 class="text-md-subtitle-2 font-weight-light">
                Dec 25, 2022
              </h6>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'HomeMoviesSlideGroup',
  data: () => ({
    model: null,
  }),
};
</script>
