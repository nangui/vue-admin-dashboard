<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "animate.css";

export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#212c4f" : "#f0f3f5";
  }
};
</script>

<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  background-color: $dark-blue;
  margin: 0;
}

h1 {
  @include heading-1;
}

p {
  @include large-text-bold($purple);
}

#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $white;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
