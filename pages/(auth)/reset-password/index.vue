<script setup lang="ts">
import AuthComponent from "~/components/molecules/auth-component.vue";
import AppButton from "~/components/atoms/app-button.vue";
import AppInput from "~/components/atoms/app-input.vue";
definePageMeta({
  title: "Reset Password",
 layout:false
});
const newType = ref("password");
const confirmType = ref("password");
const toggleNewPassword = () => {
  newType.value = newType.value === "password" ? "text" : "password";
};
const toggleConfirmPassword = () => {
  confirmType.value = confirmType.value === "password" ? "text" : "password";
};
</script>
<template>
  <AuthComponent
    title="Reset Your Password"
    paragraph="Choose a new password to secure your account."
  >
   <div class="pt-6 w-full flex flex-col gap-4">
     <AppInput
        label="New Password"
        placeholder=""
        :type="newType"
        id="note-new-password"
        :has-right-icon="true"
        :hint="true"
        hintText="At least 8 characters"
      >
        <template #right>
          <button @click="toggleNewPassword" type="button">
            <svg
              v-if="newType === 'password'"
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
       <AppInput
        label="Confirm New Password"
        placeholder=""
        :type="confirmType"
        id="note-confirm-new-password"
        :has-right-icon="true"

      >
        <template #right>
          <button @click="toggleConfirmPassword" type="button">
            <svg
              v-if="confirmType === 'password'"
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
      <AppButton value="Reset Password" variant="primary" />
    </div>
    
  </AuthComponent>
</template>

<style scoped></style>
