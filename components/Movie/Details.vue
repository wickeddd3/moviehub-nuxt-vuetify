<template>
  <div class="d-flex flex-column my-12">
    <v-row class="mt-0">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-2 white--text"
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
      <div class="my-8 mr-8">
        <h6 class="text-subtitle-1 font-weight-medium">
          Keywords
        </h6>
        <h6 class="text-subtitle-2 font-weight-light">
          <v-chip
            v-for="(keyword, index) in 5"
            :key="index"
            class="mr-2 mb-2"
            label
            small
          >
            {{ `Keyword ${index + 1}` }}
          </v-chip>
        </h6>
      </div>
    </div>
    <hr class="mr-8" />
    <div class="my-8 mr-8">
      <h6 class="text-subtitle-1 font-weight-medium">
        Top Contributors
      </h6>
      <v-list
        class="transparent"
        two-line
      >
        <v-list-item
          v-for="(item, index) in 4"
          :key="index"
          class="px-0"
        >
          <v-list-item-avatar>
            <v-img
              src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ index + 10 }}
            </v-list-item-title>
            <v-list-item-subtitle>
              johndoe
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
