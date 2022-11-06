<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xl="10" lg="12" md="12" sm="12">
        <h5 class="text-h4 font-weight-medium my-6">
          Movies
        </h5>
        <v-row>
          <v-col cols="12" xl="3" lg="4" md="4" sm="12">
            <MoviesOption />
          </v-col>
          <v-col cols="12" xl="9" lg="8" md="8" sm="12">
            <div class="d-flex flex-wrap">
              <template v-for="(n, index) in 15">
                <MoviesPoster :key="index" />
              </template>
            </div>
            <v-btn
              color="green"
              block
              large
              class="text-h6 text-capitalize font-weight-bold mt-8 mb-12"
            >
              Load More
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MoviesPage',
};
</script>
