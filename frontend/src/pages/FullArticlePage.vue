<script>
import FullArticle from "../components/articles/FullArticle.vue";
import { GET_FULL_ARTICLE } from "../store/actions/articles";

export default {
  components: { FullArticle },
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
  <div class="pa-6">
    <router-link to="/" style="display: block" class="text-decoration-none"
      >Назад</router-link
    ><FullArticle v-if="article" :article="article" />
  </div>
</template>
