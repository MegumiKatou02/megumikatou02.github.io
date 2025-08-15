<template>
  <Header />
  <div class="container">
    <div class="content">
      <h1 class="title">This page is not ready yet</h1>
      <h3 class="description">
        Trang này chưa làm
        <span style="text-decoration: line-through">(và cũng chưa chắc làm)</span>
      </h3>
      <img class="logo" src="/メンヘラ.png" width="200" alt="" />

      <router-link to="/">
        <div class="button-wrapper">Go Home</div>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'

defineOptions({
  name: 'BlogPage',
})
</script>

<style scoped>
.container {
  background-color: #2a2a2a;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 52px);
  font-family: 'Roboto', sans-serif;
}

.content {
  margin-top: 97px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
}

.content .description,
.content .title {
  color: white;
}

.content .title {
  font-size: 50px;
  font-weight: 700;
}

.content .description {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
}

.logo {
  margin-top: 36px;
}

.content .button-wrapper {
  margin-top: 60px;
  padding: 10px;
  border: var(--border) 1px solid;
  border-radius: var(--radius-sm);
  color: white;
  text-decoration: underline;
}
</style>
