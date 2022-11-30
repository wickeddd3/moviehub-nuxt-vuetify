<template>
  <div class="my-12 mx-15">
    <h5 class="text-h5 mx-15 mb-8">
      Current Season
    </h5>
    <v-card
      height="200"
      rounded
      class="mx-15 mb-5"
    >
      <div class="d-flex flex-no-wrap">
        <v-avatar
          height="200"
          width="140"
          min-width="140"
          tile
        >
          <v-img src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />
        </v-avatar>
        <div class="d-flex flex-column justify-center text-truncate">
          <v-card-title class="title-1 font-weight-bold">
            Season 8
          </v-card-title>
          <v-card-subtitle class="font-weight-medium text--disabled">
            2022 | 18 Episodes
          </v-card-subtitle>
          <div class="subtitle-2 px-4 pb-4 font-weight-light text-truncate">
            Season 8 of Prison Break premiered on December 25, 2022.
          </div>
        </div>
      </div>
    </v-card>
    <v-btn
      text
      color="green"
      class="mx-15"
    >
      View All Seasons
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'MovieCurrentSeason',
};
</script>
