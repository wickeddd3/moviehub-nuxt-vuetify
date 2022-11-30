<template>
  <div>
    <v-card
      v-for="(item, index) in 3"
      :key="index"
      class="mb-5"
      flat
    >
      <v-card-text>
        <v-list-item>
          <v-list-item-avatar size="55">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              A review by Faraz Khan
            </v-list-item-title>
            <v-list-item-subtitle class="caption mt-2">
              Written by Faraz Khan on October 22, 2022
            </v-list-item-subtitle>
            <v-list-item-subtitle class="mt-4">
              Well it wasn't disappointing...
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'MovieSocialReview',
};
</script>
