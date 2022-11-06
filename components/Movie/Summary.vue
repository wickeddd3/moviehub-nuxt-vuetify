<template>
  <div>
    <h4 class="text-h4 font-weight-black">
      Movie Title (2022)
    </h4>
    <h6 class="text-subtitle-1 font-weight-medium">
      Horror, Thriller
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
      After being resurrected by a sinister entity, Art the Clown returns to Miles County
      where he must hunt down and destroy a teenage girl and her younger brother on Halloween
      night. As the body count rises, the siblings fight to stay alive while uncovering the
      true nature of Art's evil intent.
    </p>
    <h6 class="text-subtitle-1 font-weight-medium">
      Damien Leone
    </h6>
    <h6 class="text-subtitle-2 font-weight-light">
      Director, Writer
    </h6>
  </div>
</template>

<script>
export default {
  name: 'MovieSummary',
};
</script>
