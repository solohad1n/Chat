<template>
  <div class="welcome container">
    <p>Welcome</p>
    <SignUpForm/>
  </div>
</template>

<script setup>
import SignUpForm from "../components/SignUp.vue";
</script>

<style>
.welcome{
  text-align: center;
  padding: 20px 0;
}
</style>