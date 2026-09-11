<template>
  <div class="hero-clients-marquee">
    <ul class="hero-clients-track">
      <li v-for="logo in logos" :key="logo.src">
        <img :src="logo.src" :alt="logo.alt" loading="lazy">
      </li>
    </ul>
    <ul class="hero-clients-track" aria-hidden="true">
      <li v-for="logo in logos" :key="`duplicate-${logo.src}`">
        <img :src="logo.src" alt="" loading="lazy">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import logos from '~/data/client-logos.json'
</script>
