<template>
  <div class="d-flex flex-column my-12">
    <v-row class="mt-0">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 white--text"
        icon
      >
        <v-icon size="24px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-row>
    <div class="my-4">
      <div class="my-2">
        <h6 class="text-subtitle-1 font-weight-medium">
          Status
        </h6>
        <h6 class="text-subtitle-2 font-weight-light">
          Released
        </h6>
      </div>
      <div class="my-2">
        <h6 class="text-subtitle-1 font-weight-medium">
          Original Language
        </h6>
        <h6 class="text-subtitle-2 font-weight-light">
          English
        </h6>
      </div>
      <div class="my-2">
        <h6 class="text-subtitle-1 font-weight-medium">
          Budget
        </h6>
        <h6 class="text-subtitle-2 font-weight-light">
          $250,000.00
        </h6>
      </div>
      <div class="my-2">
        <h6 class="text-subtitle-1 font-weight-medium">
          Revenue
        </h6>
        <h6 class="text-subtitle-2 font-weight-light">
          $5,325,078.00
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
};
</script>
