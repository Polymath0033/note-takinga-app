<script setup lang="ts">
import AuthComponent from "~/components/molecules/auth-component.vue";
import AppButton from "~/components/atoms/app-button.vue";
import AppInput from "~/components/atoms/app-input.vue";
</script>
<template>
  <AuthComponent
    title="Forgotten your password?"
    paragraph="Enter your email below, and we’ll send you a link to reset it."
  >
    <div class="pt-6 w-full flex flex-col gap-4">
      <AppInput
        label="Email Address"
        placeholder="email@example.com"
        id="note-forget-email"
      />
        <AppButton
            type="submit"
            class="w-full"
            variant="primary"
            value="Send Reset Link"
        />
    </div>
  </AuthComponent>
</template>

<style scoped></style>
