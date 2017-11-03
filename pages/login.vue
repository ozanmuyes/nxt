<template>
  <section class="container">
    <h1>login</h1>

    <p>
      <h2>Links</h2>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/secret">Secret</nuxt-link></li>
      </ul>
    </p>

    <p>
      <form @submit.prevent="login">
        <p class="error" v-if="formError">{{ formError }}</p>

        <p><i>To login, use <b>john@does.co</b> as email and <b>john@does.co</b> as password.</i></p>
        <p>E-mail:&nbsp;<input type="email" v-model="formEmail" name="email" /></p>
        <p>Password:&nbsp;<input type="password" v-model="formPassword" name="password" /></p>

        <button type="submit">Login</button>
      </form>
    </p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        formError: null,
        formEmail: 'john@does.co',
        formPassword: 'john@does.co',
      };
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch('auth/login', {
            fields: {
              email: this.formEmail,
              password: this.formPassword,
              realm: 'yeppa-front',
            },
          });

          this.formEmail = '';
          this.formPassword = '';
          this.formError = null;

          // this.$router.replace('/'); // TODO Instead of '/' go to predefined path
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
</script>
