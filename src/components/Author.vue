<template>
<div class="flex items-center gap-4">
    <img :src="require(`/src/assets/images/${url}.png`)" alt="" class="rounded w-14 h-14">
    <div class="flex flex-col">
        <h2 class="title">{{name}}</h2>
        <p class="sub-title" >{{role}}</p>
    </div>
</div>   
</template>

<script>

export default {
  name: "Author",
  props:{
    url: String,
    name: String,
    role: String
  },
};
</script>