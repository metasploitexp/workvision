<template>
	<div class="login-page">
		<LoginForm />
	</div>
</template>

<script>
	import { LoginForm } from "@/features/LoginForm";
	export default {
		name: "loginPage",
		components: {
			LoginForm,
		},
	};
	import { formatDateM } from "@/shared/utils/date.ts";
	const date = "22 мая 1996";
	const formattedDateM = formatDateM(date);

	console.log(formattedDateM);
</script>

<style lang="scss"></style>
