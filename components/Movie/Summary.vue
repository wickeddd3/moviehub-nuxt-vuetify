<template>
  <div>
    <h4 class="text-h4 font-weight-black">
      {{ movieName }}
    </h4>
    <h6 class="text-subtitle-1 font-weight-medium">
      {{ movieGenres }}
    </h6>
    <div class="d-flex flex-wrap align-center my-4">
      <div class="d-flex justify-center align-center">
        <v-avatar size="80" color="grey" />
        <h6 class="text-subtitle-2 font-weight-bold mx-4">
          User <br> Score
        </h6>
      </div>
      <div class="d-flex align-center">
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="grey"
        >
          <v-icon dark small>
            mdi-format-list-bulleted
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="grey"
        >
          <v-icon dark small>
            mdi-heart
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="grey"
        >
          <v-icon dark small>
            mdi-bookmark
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-2"
          fab
          dark
          small
          color="grey"
        >
          <v-icon dark small>
            mdi-star
          </v-icon>
        </v-btn>
      </div>
      <v-btn
        plain
        class="text-capitalize"
      >
        <v-icon left>
          mdi-play
        </v-icon>
        Play Trailer
      </v-btn>
    </div>
    <h6 class="text-h6 font-weight-bold">
      Overview
    </h6>
    <p class="font-weight-light">
      {{ value?.overview }}
    </p>
  </div>
</template>

<script>
import dateFormat from '../../mixins/dateFormat';

export default {
  name: 'MovieSummary',
  props: {
    type: {
      type: String,
      default: 'movie',
    },
    value: {
      type: Object,
      default: () => {},
    },
  },
  mixins: [ dateFormat ],
  computed: {
    movieName () {
      return this.type === 'movie' ? this.value?.title : this.value?.name;
    },
    movieDate () {
      if (this.value?.release_date || this.value?.first_air_date) {
        return this.formatDateToLongDate(this.value.release_date)
          || this.formatDateToLongDate(this.value.first_air_date);
      }
      return '';
    },
    movieGenres () {
      return (this.value?.genres || []).reduce((total, currentValue) => {
        total += `${currentValue.name} • `;
        return total;
      }, '');
    },
  },
};
</script>
