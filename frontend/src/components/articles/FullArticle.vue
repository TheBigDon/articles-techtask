<script>
import { DELETE_ARTICLE } from "../../store/actions/articles";

export default {
  methods: {
    async deleteArticle() {
      await this.$store.dispatch(DELETE_ARTICLE, {
        id: this.article.id,
      });
    },
  },
  props: {
    article: {
      type: Object,
    },
  },
};
</script>

<template>
  <article class="d-flex flex-column">
    <h1
      class="text-h1 mb-6"
      style="font-size: 36px !important; line-height: 3rem"
    >
      {{ article.title }}
    </h1>
    <v-card :text="article.content" style="font-size: 24px"></v-card>
    <router-link :to="`/${article.id}/edit`" class="text-decoration-none">
      <v-btn size="small" variant="text" style="width: fit-content">
        Редактировать
      </v-btn>
    </router-link>
    <v-btn
      size="small"
      variant="text"
      class="text-red-lighten-1"
      style="width: fit-content"
      @click="deleteArticle"
    >
      Удалить
    </v-btn>
  </article>
</template>
