<template>
  <v-list class="transparent">
    <v-list-item
      v-for="(item, index) in 4"
      :key="index"
      class="mb-5 grey darken-4"
    >
      <v-list-item-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="subtitle-2">
          I never said I was a hero.
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action class="caption">
        Nov 23, 2022 at 10:54 AM <br>
        by NeoLosman
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'MovieSocialDiscussion',
};
</script>
