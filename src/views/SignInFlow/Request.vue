<template>
  <div
    class="request-container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <RequestAccount />
    <div class="request">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
        Sign into Design+Code HQ
      </h4>
      <div class="form-container">
        <input
          type="email"
          placeholder="Email"
          :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
        />
        <button>Send Email</button>
      </div>
      <router-link
        to="/sign-in"
        :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
        >Already have an account? Sign in</router-link
      >
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "Request",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.request-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  min-height: 100vh;
}

.request {
  width: 400px;

  text-align: center;
}

@media screen and (max-width: 480px) {
  .request {
    right: auto;
    left: auto;
  }

  .request {
    width: calc(80%);

    img {
      width: 40%;
    }
  }
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
}

.form-container {
  width: 100%;
}

%input-button {
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  height: 60px;
  width: 100%;
}

input {
  @extend %input-button;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

button {
  @extend %input-button;
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  margin-bottom: 40px;
}

a {
  font-size: 16px;
  line-height: 25px;

  text-align: center;
  text-decoration: none;
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
