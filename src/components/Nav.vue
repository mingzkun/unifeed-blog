<template>
    <nav class="sticky top-0 flex items-center justify-between px-6 pt-10 pb-4 bg-white lg:px-auto lg:pt-10 lg:pb-4">
        <Logo/>
        <a><img class="md:hidden" src="../assets/hamburger-menu.svg" alt=""></a>
        <div class="hidden md:gap-4 md:flex md:items-center">
            <ul class="flex gap-6 text-gray-500">
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>                
        </ul>
        <button class="primary-btn">Subscribe</button>
        </div>   
    </nav>
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