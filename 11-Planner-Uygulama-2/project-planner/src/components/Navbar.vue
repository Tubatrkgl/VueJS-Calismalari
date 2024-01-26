<template>
  <nav class="main">
    <router-link :to="{ name: 'Home' }">Projects</router-link> |
    <router-link :to="{ name: 'AddProject' }">Add New Project</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav.main {
  text-align: center;
  margin: 40px auto;
}
nav.main a {
  display: inline-block;
  text-decoration: none;
  color: #999;
  margin: 0 10px;
  font-size: 18px;
}
 a.router-link-active{
  border-bottom: 2px solid #76dd78;
  padding-bottom:4px;
  color: #76dd78;
 }
</style>