<template>
  <div>
    <h2>{{position}}</h2>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    position: String,
    company: String,
    dates: String,
    descriptions: Array,
  },
};
</script>