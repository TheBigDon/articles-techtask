<script>
export default {
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<template>
  <v-container class="d-flex flex-column">
    <v-row v-for="comment in comments" :key="comment.id">
      <v-col offset="3" cols="6">
        <v-card class="d-flex justify-between">
          <span>{{ comment.content }}</span>
          <span>{{ comment.date_creation }}</span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
