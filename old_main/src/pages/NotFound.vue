<template>
  <section style="height: 100vh;">
    <div class="card">
      <h2>Page not found: 404 Error</h2>
      <p>
        This page could not be found - maybe check out our
        <router-link to="/home">Home</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    this.$router.replace({ name: 'NotFound' });
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
}
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}

.card a {
  color: #0070f3;
  text-decoration: underline;
}
</style>

