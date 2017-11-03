<template>
  <section class="container">
    <h1 class="title">
      about
    </h1>

    <p>
      <h2>Links</h2>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
        <li><nuxt-link to="/secret">Secret</nuxt-link></li>
      </ul>
    </p>

    <p>
      <p>Counter: {{ counter }}</p>
    </p>
  </section>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    head: {
      title: 'About',
    },
    // --- NuxtJS Hooks Start ---
    asyncData(ctx) {
console.log(`about asyncData | isClient: ${ctx.isClient}, isServer: ${ctx.isServer}, isStatic: ${ctx.isStatic}`);
console.log(ctx.store.state.counter);
    },
    // --- NuxtJS Hooks Finish ---
    computed: {
      //
      ...mapState(['counter']),
    },
  };
</script>
