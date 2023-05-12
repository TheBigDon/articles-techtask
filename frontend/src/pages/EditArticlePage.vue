<script>
import CreateEditArticleForm from "../components/articles/CreateEditArticleForm.vue";
import { GET_FULL_ARTICLE } from "../store/actions/articles";

export default {
  components: { CreateEditArticleForm },
  data() {
    return {
      article: null,
    };
  },
  async mounted() {
    this.article = await this.$store.dispatch(
      GET_FULL_ARTICLE,
      this.$route.params.articleId
    );
  },
};
</script>

<template>
  <router-link to="/" style="display: block" class="text-decoration-none">
    Назад
  </router-link>
  <CreateEditArticleForm v-if="article" :article="article" />
</template>
