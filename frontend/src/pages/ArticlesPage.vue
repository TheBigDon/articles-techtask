<script>
import ArticleList from "../components/articles/ArticleList.vue";
import { GET_ARTICLES } from "../store/actions/articles";

export default {
  components: { ArticleList },
  mounted() {
    this.$store.dispatch(GET_ARTICLES);
  },
  computed: {
    articles() {
      return this.$store.state.articles.articles;
    },
  },
};
</script>

<template>
  <ArticleList :articles="articles" />
</template>
