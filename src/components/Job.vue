<template>
  <div>
    <h2>{{job.position}}</h2>
  </div>
</template>

<script>
export default {
  name: "Job",
  props: {
    data: {
      position: String,
      company: String,
      dates: String,
      descriptions: Array,
    },
  },
};
</script>