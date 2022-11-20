<template>
  <h5 class="subtitle-1 ml-5 mr-2">
    {{ value.name }}
  </h5>
</template>

<script>
export default {
  name: 'SearchResultsKeyword',
  props: {
    value: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
