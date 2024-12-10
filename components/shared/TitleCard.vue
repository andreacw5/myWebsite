<script setup lang="ts">
interface BreadcrumbItem {
  // i18n key is not a string
  title: any;
  to?: string;
  active?: boolean;
  disabled?: boolean;
}

defineProps({
  title: {
    type: String,
    default: ''
  },
  breadcrumb: {
    type: Array as () => BreadcrumbItem[],
    default: () => []
  },
  image: {
    type: String
  },
  icon: {
    type: String,
    default: 'line-md:home'
  }
})
</script>

<template>
  <v-container class="pa-md-6 gradient-border-bottom">
    <v-breadcrumbs class="px-0 pt-0 text-body-2" :items="breadcrumb" />

    <div class="d-flex justify-space-between">
      <h2 style="font-weight: bolder" class="ml-3 text-h2 ps-1">
        {{ title }}
      </h2>

      <div class="d-flex ml-3 ps-1">
        <v-avatar
          v-if="image"
          class="mr-1 common-card round-border hidden-sm-and-down"
          size="60"
          :image="image"
          tile
        />
        <Icon
          :name="icon"
          class="mr-1 common-card hidden-sm-and-down"
          size="60"
        />
      </div>
    </div>
  </v-container>
</template>

<style scoped>

</style>
