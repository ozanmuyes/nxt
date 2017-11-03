<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    middleware: ['layout', 'layoutAsync'],
  };
</script>

<style>
  body {
    background-color: #6d6d6d;
  }
</style>
