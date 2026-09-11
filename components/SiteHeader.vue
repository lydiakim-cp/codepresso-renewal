<template>
  <!-- 기존 partial을 컴포넌트로 소유한다. 클래스와 마크업은 변경하지 않는다. -->
  <div v-html="header" />
</template>

<script setup lang="ts">
import header from '~/partials/header.html?raw'
</script>
