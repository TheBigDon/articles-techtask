<script>
export default {
  props: {
    articles: {
      type: Array,
    },
  },
};
</script>

<template>
  <v-container fluid class="px-15">
    <v-row>
      <v-col cols="2" offset="4">
        <router-link to="/create-article" class="text-decoration-none">
          <v-card
            class="d-flex align-center justify-center flex-column pa-6"
            height="300px"
          >
            <div style="font-size: 36px">+</div>
            <span>Создать статью</span>
          </v-card></router-link
        >
      </v-col>
      <v-col v-for="article in articles" :key="article.id" cols="2" offset="4">
        <router-link :to="`/${article.id}`" class="text-decoration-none">
          <v-card class="pa-3" height="300px" :text="article.title">
            <v-card-actions class="flex-column">
            </v-card-actions>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
