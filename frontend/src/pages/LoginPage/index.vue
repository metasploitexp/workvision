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
</script>

<style lang="scss"></style>
