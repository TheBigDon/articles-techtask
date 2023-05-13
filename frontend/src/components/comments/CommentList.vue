<script>
import { DELETE_COMMENT } from "../../store/actions/comments";

export default {
  props: {
    comments: {
      type: Array,
    },
  },
  methods: {
    async deleteCommentHandler(id) {
      await this.$store.dispatch(DELETE_COMMENT, {
        articleId: this.$route.params.articleId,
        id: id,
      });
    },
  },
};
</script>

<template>
  <v-container class="d-flex flex-column">
    <v-row v-for="comment in comments" :key="comment.id" class="w-full">
      <v-col class="offset-md3 w-full" offset="3" cols="12">
        <v-card>
          <div class="d-flex justify-space-between pa-3">
            <span>{{ comment.content }}</span>
            <span>
              {{ new Date(comment.date_creation).toLocaleString("ru-RU") }}
            </span>
          </div>
          <v-btn
            size="small"
            variant="text"
            class="text-red-lighten-1"
            style="width: fit-content"
            @click="deleteCommentHandler(comment.id)"
          >
            Удалить
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
