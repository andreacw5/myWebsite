<script setup lang="ts">
import { useSnackbarStore } from '~/stores/snackbar';

const snackbarStore = useSnackbarStore();
const snackbar = computed(() => snackbarStore.getSnackbar);

const dismissTheSnack = () => {
  snackbarStore.setSnackbar({ snackbar: snackbarStore.snackbar }, { show: false });
}

</script>

<template>
  <v-snackbar
    :model-value="snackbar.show"
    color="#1E1E1FFF"
    location="top end"
    class="mt-2"
    rounded="lg"
    :timeout="-1"
  >
    <v-list-item
      class="pa-0"
      :subtitle="snackbar.text"
      :title="snackbar.title"
    >
      <template #prepend>
        <Icon color="primary" class="icon" :name="snackbar.icon" size="45" />
      </template>
      <template #append>
        <v-divider class="me-2 my-n2 ml-4" vertical />

        <v-btn
          class="text-none"
          slim
          text="Dismiss"
          variant="text"
          @click="dismissTheSnack"
        />
      </template>
    </v-list-item>
  </v-snackbar>
</template>

<style scoped>
.rounded-lg {
  border-radius: 14px !important;
}
</style>
