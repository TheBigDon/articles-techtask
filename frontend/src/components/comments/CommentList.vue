<script>
import { DELETE_COMMENT, UPDATE_COMMENT } from "../../store/actions/comments";

export default {
  data() {
    return {
      editingCommentId: null,
      editingCommentText: "",
      contentRules: [
        (value) => {
          if (value) {
            return true;
          }

          return "Содержимое не должно быть пустым";
        },
      ],
    };
  },
  props: {
    comments: {
      type: Array,
    },
  },
  methods: {
    async deleteComment(id) {
      await this.$store.dispatch(DELETE_COMMENT, {
        articleId: this.$route.params.articleId,
        id: id,
      });
    },

    async updateComment() {
      await this.$store.dispatch(UPDATE_COMMENT, {
        articleId: this.$route.params.articleId,
        id: this.editingCommentId,
        content: this.editingCommentText,
      });

      this.editingCommentId = null;
      this.editingCommentText = "";
    },

    updateButtonClickHandler(commentId, commentContent) {
      this.editingCommentId = commentId;
      this.editingCommentText = commentContent;
    },

    cancelEdit() {
      this.editingCommentId = null;
      this.editingCommentText = "";
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
            <v-responsive
              width="400"
              v-if="comment.id === editingCommentId"
              class="px-2 py-1"
            >
              <v-text-field
                v-model="editingCommentText"
                :rules="contentRules"
                label="Содержимое комментария"
                single-line
                variant="solo"
                required
                style="width: 400px"
              >
              </v-text-field>
              <v-btn class="mr-2" color="green" @click="updateComment">✓</v-btn>
              <v-btn color="red" @click="cancelEdit">⨉</v-btn>
            </v-responsive>
            <span v-else>
              {{ comment.content }}
            </span>
            <span>
              {{ new Date(comment.date_creation).toLocaleString("ru-RU") }}
            </span>
          </div>
          <v-btn
            size="small"
            variant="text"
            class="text-red-lighten-1"
            style="width: fit-content"
            @click="deleteComment(comment.id)"
          >
            Удалить
          </v-btn>
          <v-btn
            size="small"
            variant="text"
            class="text-blue-lighten-1"
            style="width: fit-content"
            @click="updateButtonClickHandler(comment.id, comment.content)"
          >
            Редактировать
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
