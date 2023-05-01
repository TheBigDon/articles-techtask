<script>
import { CREATE_ARTICLE } from "../../store/actions/articles";
export default {
  data() {
    return {
      valid: false,
      title: "",
      content: "",
      titleRules: [
        (value) => {
          if (value) {
            return true;
          }

          return "Заголовок не должен быть пустым";
        },
      ],
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
    articleSubmitHandler() {
      this.$store.dispatch(CREATE_ARTICLE, {
        title: this.title,
        content: this.content,
      });
    },
  },
};
</script>

<template>
  <v-form v-model="valid" @submit.prevent="articleSubmitHandler">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="title"
            :rules="titleRules"
            label="Заголовок"
            required
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-textarea
            v-model="content"
            :rules="contentRules"
            label="Содержимое статьи"
            required
          >
          </v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn type="submit" width="200px" class="mt-2">Создать</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
