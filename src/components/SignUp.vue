<script setup>
import {ref} from '@vue/reactivity'
import useSignup from '../composables/useSignup';

const {signup,error} = useSignup();

const name = ref('');
const email = ref('');
const password = ref('');
// const avatar = ref(null);

const successSignup = defineEmits(['successSignup'])

const handleSubmit = async () => {
await signup(email.value,password.value,name.value)

  if(!error.value){
    successSignup('successSignup')
  }
  else{
    console.log(error.value)
  }
}

// const handleChangeFile = (event) => {
//   avatar.value = event.target.files[0];
// }

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="name" type="text" required placeholder="Name" />
    <input v-model="email" type="email" required placeholder="Email" />
    <input v-model="password" type="password" required placeholder="Password" />
    <input type="file" @change="handleChangeFile"/>
    <button>Sign Up</button>
  </form>
</template>

<style>

</style>