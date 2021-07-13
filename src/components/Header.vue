<template>
  <header>
    <router-link class="logo" to="/">
      <img alt="Vue logo" src="../assets/logo.png" />
    </router-link>
    <!-- <router-link class="info" to="/"> 未读消息 </router-link>
    <span class="signout"> 退出 </span> -->
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
};
</script>

<style>
header {
  width: 100%;
  height: 80px;
  background-color: #E1E1E1;
  line-height: 50px;
  color: #fff;
}
.logo img {
  width: 120px;
  margin-left: 5%;
}
a.info {
  text-shadow: none;
  color: #ccc;
  margin-left: 50%;
  margin-right: 30px;
  font-size: 13px;
}
span.signout {
  cursor: pointer;
  text-shadow: none;
  color: #ccc;
  font-size: 13px;
}
</style>