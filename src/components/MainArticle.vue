<template>
  <div class="article-container">
    <img :src="require(`/src/assets/images/${url}.png`)" alt="" class="object-cover object-center rounded-sm md:h-56">
        <div class="flex flex-col gap-4 mt-8 lg:mt-0">
          <h1 class="title">{{title}}</h1>
          <p class="desc-text">{{desc}}</p>
    <slot></slot>
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
  props:{
    url: String,
    title: String,
    desc: String
  },
};
</script>
