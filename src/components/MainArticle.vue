<template>
  <div class="article-container">
    <img src="../assets/images/main-article-img.png" alt="" class="object-cover object-center md:h-56">
        <div class="flex flex-col gap-4 mt-8 lg:mt-0">
          <h1 class="title">Weekly Newsletter: Tweets for Higher Engaments</h1>
          <p class="desc-text">
        In this weekly newsletter, we will be covering ten types of engaging tweets. This is the guide if you're just starting out on Twitter.
          </p>
    <Author />
        </div>
  </div>
</template>

<script>
import Author from "./Author.vue";

export default {
  name: "Article",
  components: {
    Author,
  },
};
</script>
