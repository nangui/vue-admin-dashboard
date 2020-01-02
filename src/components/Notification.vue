<template>
  <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutRight">
    <div class="bubble">
      <div v-show="show" class="message">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Notification",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
  props: {
    text: String
  }
};
</script>

<style lang="scss" scoped>
.bubble {
  position: absolute;
  top: 10%;
  border-radius: 6px;
  padding: 5px 10px 5px 10px;
  background-color: $blue;
}

.message {
  @include medium-text;
  color: $white;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
