<script setup lang="ts">
interface ResponseData {
  initial: {
    prompt: string;
    translated: string;
  };
  response: {
    chatGptResp: string;
    translatedResp: string;
  };
  translate: string;
}

import TitleCard from "~/components/shared/TitleCard.vue";
import { useI18n } from "#imports";

const { t } = useI18n();

useHead({
  title: t('gpt.title'),
})

definePageMeta({
  middleware: 'sidebase-auth'
})

const { data, status } = useAuth();
// @ts-ignore
const token = data.value?.token;

const loading = ref(false);

const error = ref(false);

const form = ref({
  requestGPT: true,
  message: '',
});

const response = ref<ResponseData | null>(null);

const sendRequest = async () => {
  loading.value = true;

  if (!form.value.message) {
    error.value = true;
    loading.value = false;
    return;
  }

  try {
    response.value = await $fetch<ResponseData>('https://andreatombolato.dev/api/v1/chatgpt', {
      method: 'POST',
      body: {
        prompt: form.value.message,
        requestGPT: form.value.requestGPT,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    error.value = false;
    loading.value = false;
  } catch (e) {
    error.value = true;
    loading.value = false;
  }

  loading.value = false;
};

const breadcrumb = [
  { title: 'Home', to: '/' },
  { title: t('gpt.title'), active: true },
];
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center">
      <v-card class="card round-border mb-8">
        <title-card
          :title="t('gpt.title')"
          :breadcrumb="breadcrumb"
          icon="line-md:question-circle"
        />
        <v-card-text class="mt-4">
          <v-alert
            v-if="error"
            class="mb-8"
            :title="t('gpt.errors.title')"
            :text="t('gpt.errors.subtitle')"
            type="error"
            variant="tonal"
            border="start"
            border-color="error"
          ></v-alert>

          <v-textarea
            class="mx-auto"
            density="compact"
            label="Start a conversation"
            v-model="form.message"
            persistent-placeholder
            placeholder="Create a story with the following prompt: Once upon a time..."
            variant="outlined"
          />

          <v-checkbox-btn
            class="mx-auto"
            color="primary"
            v-model="form.requestGPT"
            density="compact"
            label="Enable response from ChatGPT"
          />

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-if="status === 'authenticated'"
            color="primary"
            variant="tonal"
            :loading="loading"
            @click="sendRequest"
          >
            Send request
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-if="response?.response" class="card round-border mb-8">
        <v-card-text class="mt-4">
          <v-row>
            <v-col cols="12" md="6">
              <v-textarea
                v-model="response.response.chatGptResp"
                class="mx-auto"
                density="compact"
                label="ChatGPT response"
                persistent-placeholder
                placeholder="I'm writing you to..."
                variant="outlined"
                auto-grow
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea
                v-model="response.response.translatedResp"
                class="mx-auto"
                density="compact"
                label="Translated response"
                persistent-placeholder
                placeholder="I'm writing you to..."
                variant="outlined"
                auto-grow
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                color="primary"
                variant="tonal"
                block
                prepend-icon="line-md:text-box-multiple"
                :href="response.translate"
                target="_blank"
              >
                Translated content
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
