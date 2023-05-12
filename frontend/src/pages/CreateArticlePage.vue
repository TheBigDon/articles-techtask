<script>
import CreateEditArticleForm from "../components/articles/CreateEditArticleForm.vue";

export default { components: { CreateEditArticleForm } };
</script>

<template>
  <router-link to="/" style="display: block" class="text-decoration-none">
    Назад
  </router-link>
  <CreateEditArticleForm />
</template>
