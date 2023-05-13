<script>
import { CREATE_COMMENT } from "../../store/actions/comments";

export default {
  data() {
    return {
      content: "",
      valid: false,
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
  methods: {
    async createComment() {
      await this.$store.dispatch(CREATE_COMMENT, {
        content: this.content,
        articleId: this.$route.params.articleId,
      });

      this.content = "";
    },
  },
};
</script>

<template>
  <v-form v-model="valid" @submit.prevent="createComment">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="content"
            :rules="contentRules"
            label="Содержимое комментария"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn type="submit" width="200px" class="mt-2"> Отправить </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
