<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="9" lg="12" md="12" sm="12">
        <HomeSearch />
        <HomeMovies title="What's Popular" />
        <HomeMovies title="Free To Watch" />
        <HomeTrailers title="Latest Trailers" />
        <HomeMovies title="Trending" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
