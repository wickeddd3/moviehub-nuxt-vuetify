<template>
  <v-container class="pa-0">
    <v-card
      class="transparent"
      flat
    >
      <v-slide-group
        class="pa-0"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
        >
          <v-card
            class="ma-2"
            color="transparent"
            height="285"
            width="195"
            flat
          >
            <v-card
              img="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
              class="ma-2"
              height="270"
              width="180"
              flat
            />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'MovieMediaPosters',
};
</script>
