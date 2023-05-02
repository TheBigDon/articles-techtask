<script>
export default {
  props: {
    article: {
      type: Object,
    },
  },
};
</script>

<template>
  <article class="d-flex flex-column">
    <h1 class="text-h1 mb-6">{{ article.title }}</h1>
    <v-card :text="article.content"></v-card>
  </article>
</template>
