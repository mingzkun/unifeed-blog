<template>
<div class="lg:grid lg:grid-col-3">
  <MainArticle class="lg:col-span-3 lg:flex-row lg:gap-16" url="main-article-img" title="Weekly Newsletter: Tweets for Higher Engaments" desc="In this weekly newsletter, we will be covering ten types of engaging tweets. This is the guide if you're just starting out on Twitter.">
    <Author url="user-avatar-0" name="Jessica Andrews" role="Content Manager" />
  </MainArticle>
  <div class="invisible lg:visible lg:h-12 lg:col-span-3"></div>
  <Article url="article-1-img" title="7 Tips for Organic Traffic" desc="From SEO to integrating with Paid Advertising, this article covers it all.">
     <Author url="user-avatar-1" name="Spencer David" role="SEO Specialist" />
  </Article>
  <Article url="article-2-img" title="How To Start Your Own Bussiness" desc="Starting your own bussiness in 2021 has never been easier.">
 <Author url="user-avatar-2" name="Sara Frey" role="Bussiness Leader" />
  </Article>
  <Article url="article-3-img" title="5 Tips for Better Branding" desc="From SEO to integrating with Paid Advertising, this article covers it all.">
   <Author url="user-avatar-3" name=" David Suns" role="Brand Manager" />
  </Article>
</div>
</template>

<script>
import MainArticle from "./MainArticle.vue";
import Article from "./Article.vue";
import Author from "./Author.vue";

export default {
  name: "ArticleList",
  components: {
    MainArticle,
    Article,
    Author
  },
};
</script>
