<template>
  <Header />
  <div class="container">
    <div class="container-info">
      <div class="image-wrapper">
        <img src="@/assets/img/avatar.jpg" alt="" class="img" />
      </div>
      <div class="about">
        <h1 class="name">Yukiookii</h1>
        <h2 class="description">Just your average software engineer</h2>
        <ul class="socials-list">
          <li v-for="social in socialsList" v-bind:key="social.link">
            <a :href="social.link"
              ><img :src="social.img" :alt="social.altName" width="20" height="20"
            /></a>
            <span>{{ social.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'

defineOptions({
  name: 'HomePage',
})

const socialsList = [
  {
    link: 'https://github.com/Alterix53',
    img: 'github.svg',
    name: 'Github',
    altName: 'Github Logo',
  },
  {
    link: 'https://stackoverflow.com/users/23184326/yukiookii',
    img: 'stackoverflow.svg',
    name: 'Stack Overflow',
    altName: 'StackOverflow Logo',
  },
  {
    link: 'https://discord.com/users/604949724788817920',
    img: 'discord.svg',
    name: 'Discord',
    altName: 'Discord Logo',
  },
  {
    link: 'https://linktr.ee/yukiooki_',
    img: 'linktree.svg',
    name: 'Linktree',
    altName: 'Linktree Logo',
  },
  {
    link: 'https://open.spotify.com/user/31uoe4jzedryeongjz5ymntipfvq',
    img: 'spotify.svg',
    name: 'Spotify',
    altName: 'Spotify Logo',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 52px);
  background-color: black;
  background: url('@/assets/img/background.jpg');
  overflow-x: auto;
}

.container-info {
  width: 550px;
  height: 140px;
  background-size: cover;
  box-shadow: 0 0 4px black;
  background-color: var(--bg-primary);
  display: flex;
  padding: 20px;
  gap: 20px;
  border: var(--border) 1px solid;
  border-radius: var(--radius-sm);
}

.image-wrapper {
  width: 200px;
  height: 100%;
}

.img {
  width: 100%;
  height: 100%;
  border: var(--border) 1px solid;
  border-radius: var(--radius-sm);
}

.container-info .about {
  width: 100%;
  font-family: 'Roboto', sans-serif;
}

.about .name {
  color: white;
  font-weight: bold;
  font-size: 36px;
}

.about .description {
  color: rgba(255, 255, 255, 0.5);
  margin-top: 14px;
  font-size: 23px;
  font-weight: 300;
}

.about .socials-list {
  margin-top: 25px;
  display: flex;
  gap: 10px;
}

.about .socials-list span {
  display: none;
}

.about .socials-list li {
  padding: 7px;
  background-color: var(--bg-secondary);
  border: var(--border) 1px solid;
  border-radius: var(--radius-sm);
}

.about .socials-list li a {
  color: white;
  filter: invert(1);
}

@media (max-width: 642px) {
  .container-info {
    flex-direction: column;
    margin: 0 2.4rem;
    height: 550px;
    align-items: center;
    padding: 20px 25px;
    justify-content: center;
  }

  .image-wrapper {
    width: 9rem;
    height: 8rem;
  }

  .container-info .about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about .socials-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .about .socials-list span {
    display: inline-block;
    color: var(--text-secondary);
    font-size: 18px;
  }

  .about .socials-list li {
    display: flex;
    width: 100%;
    height: 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.95rem;
  }
  .about .socials-list li a {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 498px) {
  .about .name {
    font-size: 2rem;
  }

  .about .description {
    font-size: 0.96rem;
  }
}
</style>
