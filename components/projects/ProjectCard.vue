<script setup lang="ts">
import { Icon } from "@iconify/vue";
import OptimizeImage from "~/components/shared/OptimizeImage.vue";
import { ref } from "vue";

defineProps({
  item: {
    type: Object,
    required: true
  },
  imageHeight: {
    type: Number,
    default: 300
  }
})

const currentLocale = useI18n().locale;
const currentLocaleIsItalian = computed(() => currentLocale.value === 'it-IT');

const isHovered = ref(false);

const handleMouseOver = () => {
  isHovered.value = true;
};

const handleMouseLeave = () => {
  isHovered.value = false;
};
</script>

<template>
  <nuxt-link :to="'/projects/' + item.slug">
    <v-card class="atom-card common-card mx-auto card-gradient round-border">
      <optimize-image
        :src="item.preview"
        :alt-text="item.title + ' cover image'"
        :height="imageHeight"
        class="project-image"
        position="absolute"
      />
      <v-card class="mx-auto" style="background: transparent !important;">
        <template v-slot:title>
          <h2 class="title-project">
            {{ currentLocaleIsItalian ? item.title.it : item.title.en }}
          </h2>
        </template>
        <template v-slot:subtitle>
          <span class="project-subtitle">
            {{ item.client.name }}
            <span class="hidden-md-and-up">
              <br>
              <v-icon
                :color="item.technical.main.color"
                size="15"
                class="mr-1"
              >
                {{ item.technical.main.icon }}
              </v-icon>
              Made with {{ item.technical.main.name }}
            </span>
          </span>
        </template>
        <template v-slot:append>
          <v-btn
            :icon="true"
            class="round-border ma-2 card mx-auto d-flex flex-column card hidden-sm-and-down"
            size="large"
            rounded="lg"
            tile
            alt="Project Main Technology"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
          >
            <Icon
              :class="{ 'icon-hover': isHovered }"
              :icon="item.technical.main.icon"
              height="30"
              class="icon"
            />
          </v-btn>
        </template>
      </v-card>
    </v-card>
  </nuxt-link>
</template>

<style scoped>
.title-project {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
}
.project-subtitle {
  color: hsla(0,0%,100%,.7);
  font-weight: 500;
  font-size: .9rem;
}
.icon {
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}
.icon-hover {
  transform: scale(1.3);
  color: var(--color-primary) !important;
}
</style>
