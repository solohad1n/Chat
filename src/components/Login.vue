<script setup>
  import { ref } from "@vue/reactivity";
  import useLogin from "../composables/useLogin";
  const email = ref("");
  const password = ref("");

  const handleSubmit = async () => {
  console.log({
    email:email.value,
    password:password.value,
  })
  const {error,login} = useLogin()
  await login(email.value,password.value)

  if(error){
    console.log(error)
  }
}
</script>

<template>
	<form @submit.prevent="handleSubmit">
		<input v-model="email" type="email" required placeholder="Email" />
		<input v-model="password" type="password" required placeholder="Password" />
		<button>Log In</button>
	</form>
</template>

<style>

</style>