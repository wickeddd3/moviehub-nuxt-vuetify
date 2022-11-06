<template>
  <div>
    <v-expansion-panels
      :value="[0]"
      class="my-4"
      multiple
    >
      <v-expansion-panel
        v-for="(option, i) in options"
        :key="i"
      >
        <v-expansion-panel-header class="text-h6 font-weight-bold">
          {{ option.name }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <component :is="option.component" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn
      block
      rounded
      large
      class="text-h6 text-capitalize font-weight-regular"
    >
      Search
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'MoviesOption',
  data () {
    return {
      options: [
        {
          name: 'Sort',
          component: 'MoviesSort',
        },
        {
          name: 'Filters',
          component: 'MoviesFilters',
        },
        {
          name: 'Where To Watch',
          component: 'MoviesWatch',
        },
      ],
    };
  },
};
</script>
