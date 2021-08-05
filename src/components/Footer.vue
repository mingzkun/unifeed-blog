<template>
    <footer class="bottom-0 flex flex-col gap-2 px-6 pt-8 pb-6 bg-white md:flex-row md:justify-between lg:px-auto lg:pt-10 lg:pb-4">
        <Logo class="h-8"/>
        <p class="text-sm font-medium text-gray-500 ">Unifeed &copy; 2017 All Copyrights Not Reserved</p>
    </footer>
</template>

<script>
import Logo from "./WebLogo.vue";

export default {
  name: "ArticleList",
  components: {
    Logo,
  },
};
</script>