<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <a @click="onClick">Logout</a>
  </div>
</template>

<script>
import { auth } from "@/main";

export default {
  name: "Header",
  methods: {
    onClick() {
      const currentUser = auth.currentUser();

      currentUser
        .logout()
        .then(() => {
          this.$router.push({
            name: "sign-in",
            params: {
              userLoggedOut: true
            }
          });
        })
        .catch(error => alert(`Error ${error}`));
    }
  }
};
</script>

<style scoped lang="scss"></style>
