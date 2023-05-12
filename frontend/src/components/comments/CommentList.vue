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
    <v-row v-for="comment in comments" :key="comment.id" class="w-full">
      <v-col class="offset-md3 w-full" offset="3" cols="12">
        <v-card>
          <div class="d-flex justify-space-between pa-3">
            <span>{{ comment.content }}</span>
            <span>
              {{ new Date(comment.date_creation).toLocaleString("ru-RU") }}
            </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
