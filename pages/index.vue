<template>
  <section class="container">
    <h1 class="title">
      home - {{ $t('hello') }}
    </h1>

    <p>
      <h2>Links</h2>
      <ul>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
        <li><nuxt-link to="/secret">Secret</nuxt-link></li>
      </ul>
    </p>

    <p>
      <p>Counter: {{ counter }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </p>
  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    middleware: ['page', 'pageAsync'],
    head: {
      title: 'Home',
    },
    // --- NuxtJS Hooks Start ---
    validate() {
console.log('index validate');
      return true;
    },
    asyncData(ctx) {
console.log(`index asyncData | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);
    },
    fetch(ctx) {
console.log(`index fetch | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);
    },
    // --- NuxtJS Hooks Finish ---
    // --- VueJS Hooks Start ---
    beforeCreate() {
console.log('index beforeCreate');
    },
    created() {
console.log('index created');
    },
    beforeMount() {
console.log('index beforeMount');
    },
    mounted() {
console.log('index mounted');
    },
    beforeUpdate() {
console.log('index beforeUpdate');
    },
    updated() {
console.log('index updated');
    },
    activated() {
console.log('index activated');
    },
    deactivated() {
console.log('index deactivated');
    },
    beforeDestroy() {
console.log('index beforeDestroy');
    },
    destroyed() {
console.log('index destroyed');
    },
    // errorCaptured
    // --- VueJS Hooks Finish ---
    computed: {
      //
      ...mapState(['counter']),
    },
    methods: {
      //
      ...mapMutations(['increment', 'decrement']),
    },
  };
</script>
