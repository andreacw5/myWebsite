<script setup lang="ts">
import { useI18n } from "#imports";
import TitleCard from "~/components/shared/TitleCard.vue";

interface FileItem {
  filename: string;
  description: string;
  views: number;
  createdAt: string;
  owner: {
    domain: string;
  };
}

const { t } = useI18n();

useHead({
  title: t('fileharbor.title'),
})

definePageMeta({
  middleware: 'sidebase-auth'
})

const { data, status } = useAuth();
// @ts-ignore
const token = data.value?.token;

const headers = [
  {
    title: 'Filename',
    key: 'filename',
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Views',
    key: 'views',
  },
  {
    title: 'Created',
    key: 'createdAt',
  },
  {
    title: 'Domain',
    key: 'owner.domain',
  },
  {
    title: '',
    key: 'actions',
  },
]

const items = ref<FileItem[]>([]);
const loading = ref(true);

const getFileList = async () => {
  loading.value = true;
  try {
    items.value = await $fetch<FileItem[]>('https://file-harbor.com/api/v1/files', {
      headers: {
        'X-API-KEY': `QXp9jRwSaMjLxgBnvLYTwPL5s1TGr8xxhcJQ6rNvlYkW8YQ5V95GF3Xpt8CyxQK3`,
      },
    });
  } finally {
    loading.value = false;
  }
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
}

onMounted(() => {
  getFileList();
});

const breadcrumb = [
  { title: 'Home', to: '/' },
  { title: t('fileharbor.title'), active: true },
];
</script>

<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center">
      <v-card class="card round-border mb-8">
        <title-card
          :title="t('fileharbor.title')"
          :breadcrumb="breadcrumb"
          icon="line-md:file"
        />
        <v-card-text class="mt-4">
          <v-card border rounded="lg" class="card">
            <v-data-table
              :header-props="{ class: 'bg-surface-light'}"
              :headers="headers"
              :loading="loading"
              :items="items"
              :items-per-page="10"
              style="background-color: transparent"
            >
              <template #item.createdAt="{ item }">
                <p>{{ formatDate(item.createdAt) }}</p>
              </template>
              <template #item.actions>
                <v-btn
                  class="text-none"
                  color="primary"
                  min-width="0"
                  slim
                  text="Edit"
                  variant="text"
                />
              </template>
            </v-data-table>
          </v-card>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>

</style>
