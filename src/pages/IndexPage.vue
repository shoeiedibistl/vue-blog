<script setup>
  import Content from "@/components/widgets/Content.vue";
</script>

<template>
  <Content>
    <h1>Index</h1>

    <RouterLink to="/">Index page</RouterLink>
    <br />
    <RouterLink to="ui">Ui page</RouterLink>
    <br />
    <RouterLink to="/article">Article page</RouterLink>
  </Content>
</template>
