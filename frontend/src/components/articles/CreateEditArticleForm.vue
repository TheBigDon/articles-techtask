<script>
import { CREATE_ARTICLE, UPDATE_ARTICLE } from "../../store/actions/articles";
export default {
  data() {
    return {
      editing: false,
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
    async articleSubmitHandler() {
      if (!this.editing) {
        await this.$store.dispatch(CREATE_ARTICLE, {
          title: this.title,
          content: this.content,
        });

        this.title = "";
        this.content = "";
      } else {
        await this.$store.dispatch(UPDATE_ARTICLE, {
          id: this.article.id,
          title: this.title,
          content: this.content,
        });
      }
    },
  },
  props: {
    article: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.article) {
      this.title = this.article.title;
      this.content = this.article.content;
      this.editing = true;
    }
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
          <v-btn type="submit" width="200px" class="mt-2">
            {{ editing ? "Редактировать" : "Создать" }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
