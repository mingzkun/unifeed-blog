<template>
<div class="lg:grid lg:grid-col-3">
  <MainArticle class="lg:col-span-3 lg:flex-row lg:gap-16"/>
  <div class="invisible lg:visible lg:h-12 lg:col-span-3"></div>
  <Article/>
  <Article/>
  <Article/>
</div>
</template>

<script>
import MainArticle from "./MainArticle.vue";
import Article from "./Article.vue";

export default {
  name: "ArticleList",
  components: {
    MainArticle,
    Article

  },
};
</script>
