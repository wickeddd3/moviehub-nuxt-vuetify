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
            height="280"
            width="535"
            flat
          >
            <v-card
              img="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
              class="ma-2"
              height="260"
              width="520"
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
  name: 'MovieMediaTrailers',
};
</script>
