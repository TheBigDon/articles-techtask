<script>
import FullArticle from "../components/articles/FullArticle.vue";
import CommentList from "../components/comments/CommentList.vue";
import { GET_FULL_ARTICLE } from "../store/actions/articles";
import { GET_COMMENTS } from "../store/actions/comments";

export default {
  components: { FullArticle, CommentList },
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
    await this.$store.dispatch(GET_COMMENTS, {
      articleId: this.$route.params.articleId,
    });
  },
  computed: {
    comments() {
      return this.$store.state.comments.comments;
    },
  },
};
</script>

<template>
  <div class="pa-6">
    <router-link to="/" style="display: block" class="text-decoration-none"
      >Назад</router-link
    ><FullArticle v-if="article" :article="article" />
    <CommentList v-if="comments.length" :comments="comments" />
  </div>
</template>
