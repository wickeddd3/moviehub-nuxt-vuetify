<template>
  <div>
    <!-- Release Dates -->
    <h5 class="subtitle-1 font-weight-light mb-5">
      Release Dates
    </h5>
    <div class="d-flex align-center justify-space-between mb-4">
      <h5 class="subtitle-2">
        From
      </h5>
      <div>
        <v-menu
          v-model="menuDateFrom"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="dateFrom"
              append-icon="mdi-calendar"
              readonly
              solo-inverted
              hide-details
              color="green"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="dateFrom"
            @input="menuDateFrom = false"
          />
        </v-menu>
      </div>
    </div>
    <div class="d-flex align-center justify-space-between">
      <h5 class="subtitle-2">
        To
      </h5>
      <div>
        <v-menu
          v-model="menuDateTo"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="dateTo"
              append-icon="mdi-calendar"
              readonly
              solo-inverted
              hide-details
              color="green"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="dateTo"
            @input="menuDateTo = false"
          />
        </v-menu>
      </div>
    </div>
    <!-- Release Dates -->
    <!-- Genres -->
    <h5 class="subtitle-1 font-weight-light my-5">
      Genres
    </h5>
    <h6 class="text-subtitle-2 font-weight-light">
      <v-chip
        v-for="(keyword, index) in 12"
        :key="index"
        class="mr-2 mb-2"
      >
        {{ `Genre ${index + 1}` }}
      </v-chip>
    </h6>
    <!-- Genres -->
    <!-- Language -->
    <h5 class="subtitle-1 font-weight-light my-5">
      Language
    </h5>
    <v-select
      :items="languages"
      append-icon="mdi-chevron-down"
      class="my-1"
      hide-details
      solo-inverted
    />
    <!-- Language -->
    <!-- User Score -->
    <h5 class="subtitle-1 font-weight-light mb-2 mt-5">
      User Score
    </h5>
    <v-slider
      :value="0"
      :tick-labels="['0', '5', '10']"
      :max="2"
      step="1"
      ticks="always"
      tick-size="3"
    />
    <!-- User Score -->
    <!-- Minimum User Votes -->
    <h5 class="subtitle-1 font-weight-light my-2">
      Minimum User Votes
    </h5>
    <v-slider
      :value="0"
      :tick-labels="['0', '100', '200', '300', '400', '500']"
      :max="5"
      step="1"
      ticks="always"
      tick-size="6"
    />
    <!-- Minimum User Votes -->
    <!-- Runtime -->
    <h5 class="subtitle-1 font-weight-light my-2">
      Runtime
    </h5>
    <v-slider
      :value="0"
      :tick-labels="['0', '120', '240', '360']"
      :max="3"
      step="1"
      ticks="always"
      tick-size="4"
    />
    <!-- Runtime -->
    <!-- Keywords -->
    <h5 class="subtitle-1 font-weight-light my-5">
      Keywords
    </h5>
    <v-text-field
      value=""
      class="my-1"
      hide-details
      solo-inverted
    />
    <!-- Keywords -->
  </div>
</template>

<script>
export default {
  name: 'MoviesFilters',
  data () {
    return {
      menuDateFrom: false,
      menuDateTo: false,
      dateFrom: (
        new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)
      ).toISOString().substr(0, 10),
      dateTo: (
        new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)
      ).toISOString().substr(0, 10),
      languages: [
        'English',
        'Chinese',
        'Spanish',
        'French',
        'German',
      ],
    };
  },
};
</script>
