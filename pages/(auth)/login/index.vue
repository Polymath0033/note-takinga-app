<script setup lang="ts">
import AuthComponent from "~/components/molecules/auth-component.vue";
import AppInput from "~/components/atoms/app-input.vue";
import AppButton from "~/components/atoms/app-button.vue";
definePageMeta({
  title: "Log In",
  description: "Please log in to continue.",
  layout: false,
});
const type = ref("password");
const togglePassword = () => {
  type.value = type.value === "password" ? "text" : "password";
};
</script>
<template>
  <AuthComponent title="Welcome to Note" paragraph="Please log in to continue">
    <div class="pt-6 w-full flex flex-col gap-4">
      <AppInput
        label="Email Address"
        placeholder="email@example.com"
        id="note-login-email"
      />
      <AppInput
        label="Password"
        placeholder="password"
        :type="type"
        id="note-login-password"
        :has-right-icon="true"
      >
      <template #label>
        <nuxt-link to="/forgot-password" class="text-sm !leading-[140%] underline font-normal capitalize text-neutral-600 ">forgot</nuxt-link>
      </template>
        <template #right>
          <button @click="togglePassword" type="button">
            <svg
              v-if="type === 'password'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0023 8.92888C8.89243 8.92888 7.99236 9.7924 7.99236 10.8585C7.99236 11.9239 8.89251 12.7881 10.0023 12.7881C11.1122 12.7881 12.0123 11.9239 12.0123 10.8585C12.0123 9.7924 11.1123 8.92888 10.0023 8.92888ZM6.74236 10.8585C6.74236 9.12936 8.20231 7.72888 10.0023 7.72888C11.8024 7.72888 13.2623 9.12936 13.2623 10.8585C13.2623 12.5866 11.8025 13.9881 10.0023 13.9881C8.20218 13.9881 6.74236 12.5866 6.74236 10.8585Z"
                fill="#717784"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.14628 6.49548C5.64161 5.28181 7.70895 4.41687 10.0016 4.41687C12.2939 4.41687 14.3612 5.28113 15.8566 6.49451C17.3359 7.69468 18.3366 9.30808 18.3366 10.8585C18.3366 12.4089 17.3359 14.0222 15.8566 15.2224C14.3612 16.4358 12.2939 17.3001 10.0016 17.3001C7.70895 17.3001 5.64161 16.4351 4.14628 15.2214C2.6673 14.021 1.66667 12.4077 1.66667 10.8585C1.66667 9.30928 2.6673 7.69588 4.14628 6.49548ZM4.95332 7.41186C3.64189 8.47626 2.91667 9.78368 2.91667 10.8585C2.91667 11.9333 3.64189 13.2406 4.95332 14.3051C6.2484 15.3562 8.03606 16.1001 10.0016 16.1001C11.967 16.1001 13.7546 15.3567 15.0498 14.3059C16.3612 13.2418 17.0866 11.9345 17.0866 10.8585C17.0866 9.78248 16.3612 8.47506 15.0498 7.41102C13.7546 6.3602 11.967 5.61687 10.0016 5.61687C8.03606 5.61687 6.2484 6.36073 4.95332 7.41186Z"
                fill="#717784"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.35033 14.7747C3.49199 13.5581 2.29199 11.7247 2.29199 10.1164C2.29199 7.3831 5.74199 4.0331 10.0003 4.0331C11.742 4.0331 13.3587 4.59143 14.6587 5.4581"
                stroke="#717784"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.542 7.17519C17.2845 8.11685 17.717 9.15849 17.717 10.1168C17.717 12.8502 14.2586 16.2002 10.0003 16.2002C9.24197 16.2002 8.50114 16.0918 7.80859 15.9002"
                stroke="#717784"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.13804 11.9724C7.6422 11.4816 7.3647 10.8124 7.3672 10.1149C7.36387 8.66076 8.54052 7.47912 9.99552 7.47662C10.6955 7.47495 11.3672 7.75245 11.8622 8.24745"
                stroke="#717784"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5917 10.5826C12.3967 11.6592 11.5542 12.5034 10.4775 12.7009"
                stroke="#717784"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5767 3.54156L3.43164 16.6866"
                stroke="#717784"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </template>
      </AppInput>
      <AppButton value="login" variant="primary" />
    </div>
    <div class="border-y border-y-neutral-200 w-full pt-6 flex flex-col gap-4 pb-200 ">
      <span class="text-text-preset-5 text-center text-neutral-600"
        >Or log in with:</span
      >
      <AppButton value="Google" variant="border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.8379 14.7181C20.9459 14.1681 20.9999 13.5881 20.9999 13.0081C20.9999 12.6161 20.9739 12.2341 20.9239 11.8611C20.8869 11.5871 20.6429 11.3881 20.3669 11.3881H12.5619C12.2519 11.3881 11.9999 11.6401 11.9999 11.9501V14.1561C11.9999 14.4661 12.2519 14.7181 12.5619 14.7181H16.8369C17.0129 14.7181 17.1419 14.8981 17.0759 15.0611C16.1409 17.3711 13.6859 18.8871 10.9439 18.3801C8.83793 17.9911 7.11193 16.3211 6.65993 14.2281C5.89293 10.6761 8.57693 7.53814 11.9999 7.53814C13.1219 7.53814 14.1619 7.87514 15.0289 8.45214C15.2609 8.60614 15.5639 8.59114 15.7599 8.39214L17.4619 6.65914C17.6939 6.42214 17.6799 6.02814 17.4159 5.82714C15.9749 4.73114 14.1929 4.06514 12.2549 4.01214C7.38293 3.87714 3.16393 7.83514 3.00493 12.7061C2.83793 17.8141 6.93193 22.0081 11.9999 22.0081C16.3829 22.0081 20.0369 18.8681 20.8379 14.7181Z"
            fill="#0E121B"
          />
        </svg>
      </AppButton>
    </div>
    <div class="text-text-preset-5" >
        <span class="text-text-preset-5 text-center text-neutral-600"
            >Don't have an account? <nuxt-link class="text-neutral-950" to="/sign-up">Sign up</nuxt-link></span
        >
    </div>
  </AuthComponent>
</template>

<style scoped></style>
