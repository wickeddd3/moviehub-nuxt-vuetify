<template>
  <v-container>
    <v-row justify="center">
      <v-col xl="9" lg="12" md="12" sm="12">
        <h6 class="subtitle-1 font-weight-medium my-6">
          Search results
        </h6>
        <v-row>
          <v-col cols="12" xl="3" lg="4" md="4" sm="12">
            <SearchSummary />
          </v-col>
          <v-col cols="12" xl="9" lg="8" md="8" sm="12">
            <SearchResults />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SearchContainer',
};
</script>
