<template>
  <v-footer
    padless
    class="grey darken-4"
  >
    <v-card
      flat
      tile
      class="container grey darken-4 text--white text-center"
    >
      <v-card-text>
        <v-row justify="center">
          <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
          >
            {{ link }}
          </v-btn>
        </v-row>
        <v-row justify="center">
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
      </v-card-text>

      <v-card-text class="white--text pt-0">
        By using this site you agree to and accept our User Agreement.
      </v-card-text>

      <v-divider />

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>MovieHub</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
};
</script>
