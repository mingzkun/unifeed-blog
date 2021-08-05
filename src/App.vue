<template>
 <Nav/>
 <Aricles/>
 <Footer/>
</template>

<script>
import Nav from './components/Nav.vue'
import Aricles from './components/ArticleList.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Aricles,
    Footer
  }
}
</script>

