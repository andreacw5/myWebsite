<script setup lang="ts">
import OptimizeImage from "~/components/shared/OptimizeImage.vue";

interface ProjectCardProps {
  item: {
    title: {
      it: string;
      en: string;
    };
    client: {
      name: string;
    };
    technical: {
      main: {
        color: string;
        icon: string;
        name: string;
      };
    };
    preview: string;
    slug: string;
  };
}

defineProps({
  item: {
    type: Object as PropType<ProjectCardProps['item']>,
    required: true
  },
  imageHeight: {
    type: Number,
    default: 300
  }
})

const currentLocale = useI18n().locale;
const currentLocaleIsItalian = computed(() => currentLocale.value === 'it-IT');
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
              <Icon
                :color="item.technical.main.color"
                size="15"
                class="mr-1"
                :name="item.technical.main.icon"
              />
              Made with {{ item.technical.main.name }}
            </span>
          </span>
        </template>
        <template v-slot:append>
          <v-btn
            :icon="true"
            class="round-border ma-2 card icon transition hidden-sm-and-down"
            size="large"
            rounded="lg"
            tile
            alt="Project Main Technology"
          >
            <v-icon
              :color="item.technical.main.color"
              size="30">
              {{ item.technical.main.icon }}
            </v-icon>
          </v-btn>
        </template>
      </v-card>
    </v-card>
  </nuxt-link>
</template>

<style scoped>
.transition:hover {
  transform: scale(1.3);
}
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
.v-overlay {
  background-color: rgba(0, 0, 0, 0.9) !important;
}
</style>
