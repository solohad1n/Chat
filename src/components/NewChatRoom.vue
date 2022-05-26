<template>
	<form>
		<textarea
			v-model="message"
			placeholder="Type a message and hit enter to send"
			@keypress.enter.prevent="handleSubmitMessage"
		></textarea>
		<div>
			<label class="shareIcon">
				<img :src="shareIcon" alt="">
			<input type="file" @change="handleChangeFile">
			</label>
		</div>
	</form>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { user } from "../composables/useUser";
import { timestamp } from "../firebase/config";
import useCollection from "../composables/useCollection";
import shareIcon from '../assets/photo-icon.png'
import useStorage from "../composables/useStorage";

const message = ref("");
const image =ref(null)

const {sendImage} = useStorage();

	const chat = {
		userId: user.value.uid, 
		name: user.value.displayName,
		createdAt: timestamp(),
		avatar: user.value.photoURL,
};

const { addDoc, error } = useCollection('messages');

const handleChangeFile = async (event) => {
	  	const {url} = await sendImage(await event.target.files[0]);
			await addDoc({...chat,image: url.value});
			if (error.value) {
				console.log(err.message);
			}
}

const handleSubmitMessage = async () => {
	await addDoc({...chat, message:message.value });
	if (error.value) {
		console.log(err.message);
	}
	message.value = "";
};
</script>

<style scoped>
form {
	margin: 10px;
	display: flex;
	align-items: center;
}
textarea {
	width: 100%;
	max-width: 100%;
	margin-bottom: 6px;
	padding: 10px;
	box-sizing: border-box;
	border: 0;
	border-radius: 20px;
	font-family: inherit;
	outline: none;
	background-color: #e8e8f5;
	resize: none;
}
.error {
	text-align: center;
	color: #ff2a58;
	font-size: 12px;
	padding: 10px 0;
}

.shareIcon img{
	max-width: 50px;
	max-height: 50px;
}
.shareIcon input{
	display: none;
}
</style> 