<template>
  <header class="header">
    <h1 class="website-name"><router-link to="/">Yukiookii</router-link></h1>
    <div class="website-list">
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HeaderPage',
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  padding: 16px 16px;
  background-color: #1a1a1a;
  box-sizing: border-box;
  height: 52px;
}

.website-name a {
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
}

.website-list {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.website-list a {
  text-decoration: none;
  color: #efefef;
  background-color: #2a2a2a;
  padding: 0.5rem 1rem;
  border: #4a4a4a 1px solid;
  border-radius: 2px;
}

@media (max-width: 498px) {
  .website-list a {
    font-size: 16px;
  }
  .website-list {
    gap: 0.6rem;
  }
}
</style>
