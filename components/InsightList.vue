<template>
  <ul class="insight-list">
    <li v-for="insight in insights" :key="insight.url">
      <a class="media-card insight-card" :href="insight.url" target="_blank" rel="noopener">
        <div class="media-card__media insight-card__thumb">
          <img :src="insight.image" alt="" loading="lazy" @error="useImageFallback">
        </div>
        <div class="media-card__body insight-card__body">
          <div class="media-card__meta">
            <span class="tag solid sm">{{ insight.category }}</span>
            <time v-if="insight.date" class="text-caption" :datetime="insight.date">{{ insight.date }}</time>
          </div>
          <h3 class="media-card__title insight-card__title">{{ insight.title }}</h3>
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data: insights } = await useFetch('/api/insights', { default: () => [] })

function useImageFallback(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  if (image.src.endsWith('/images/insight-placeholder.svg')) return
  image.src = '/images/insight-placeholder.svg'
}
</script>
