<script setup>
import ProjectCard from "~/components/projects/ProjectCard.vue";
import { useI18n } from '#imports'
const { t } = useI18n();
useHead({
  title: t('projects.title'),
  meta: [
    {
      name: 'description',
      content: 'Andrea Tombolato projects'
    }
  ]
})
import { useProjectStore } from "~/stores/portfolio"
import { Icon } from "@iconify/vue";
import TitleCard from "~/components/shared/TitleCard.vue";
const projectStore = useProjectStore();
let projects = projectStore.getAllProjects;
const technologies = projectStore.getAllTechs;
let tab = ref('All');
let loading = false;
watch(() => tab.value, async (value) => {
  loading = true;
  if (value === 'All') {
    projects = projectStore.getAllProjects;
  } else {
    projects = projectStore.getProjectByTech(value);
  }
  loading = false;
});

const filter = shallowRef(false)

const breadcrumb = [
  { title: 'Home', to: '/' },
  { title: t('projects.title'), to: '/projects', active: true },
];
</script>


<template>
  <v-container class="v-col-auto grid-list-md text-xs-center ms-auto">
    <v-container class="grid-list-sm text-xs-center">
      <v-card class="card round-border mb-8">
        <title-card
          :title="$t('projects.title')"
          :breadcrumb="breadcrumb"
          icon="line-md:list-indented"
        />

        <v-toolbar border="b" class="px-2" color="#1e1e1f">
          <v-btn color="medium-emphasis" icon="mdi-filter" :ripple="false" @click="filter = !filter" />

          <v-toolbar-title class="flex-0-1 ms-2">Filter</v-toolbar-title>

          <v-divider class="mx-4 align-self-center" length="30%" vertical />

          <v-btn
            class="text-none px-0 mt-md-1"
            :icon="$vuetify.display.mobile ? '$clear' : undefined"
            :ripple="$vuetify.display.mobile"
            :text="!$vuetify.display.mobile ? 'Clear filters' : undefined"
            variant="plain"
          />

          <v-spacer />

          <v-btn
            append-icon="mdi-chevron-down"
            class="text-none"
            :ripple="false"
            slim
            variant="text"
          >
            Sort by

            <v-menu activator="parent" location="bottom end">
              <v-list density="compact" :lines="false" nav color="#1e1e1f">
                <v-list-item link title="Most Popular" />
                <v-list-item link title="Newest" />
                <v-list-item link title="Featured" />
                <v-list-item link title="Price: Low to High" />
                <v-list-item link title="Price: High to Low" />
              </v-list>
            </v-menu>

            <template #append>
              <v-icon color="medium-emphasis" />
            </template>
          </v-btn>
        </v-toolbar>

        <v-expand-transition>
          <div v-if="filter">
            <v-container class="pa-md-6 border-b" fluid>
              <v-row>
                <v-defaults-provider
                  :defaults="{
                  VCheckboxBtn: {
                    density: 'comfortable',
                    color: 'primary',
                  }
                }"
                >
                  <v-col cols="12" md="6" sm="6">
                    <v-label>Tech</v-label>

                    <div class="py-4">
                      <template v-for="tech in technologies">
                        <v-checkbox-btn :label="tech.name" />
                      </template>
                    </div>
                  </v-col>

                  <v-divider v-if="$vuetify.display.smAndUp" vertical />

                  <v-col cols="12" md="6" sm="6">
                    <v-label>Size</v-label>

                    <div class="py-4">
                      <v-checkbox-btn label="Small" />
                      <v-checkbox-btn label="Medium" />
                      <v-checkbox-btn label="Large" />
                    </div>
                  </v-col>
                </v-defaults-provider>
              </v-row>
            </v-container>
          </div>
        </v-expand-transition>

        <v-tabs
            v-model="tab"
            :items="technologies"
            align-tabs="center"
            slider-color="#00A86B"
            density="comfortable"
            style="color: hsla(0,0%,100%,.7) !important;"
            class="mt-6"
          >
            <template v-slot:tab="{ item }">
                <v-tab :value="item.name">
                  <template v-slot:prepend>
                    <Icon :icon="item.icon" height="25"/>
                  </template>
                  {{ item.name }}
                </v-tab>
            </template>
          </v-tabs>
        <v-card-text>
          <v-container class="grid-list-md text-xs-center">
            <v-row v-if="loading">
              <v-col v-for="(i) in 6" :key="i" cols="12">
                <v-skeleton-loader
                  :id="i"
                  type="image"
                  class="round-border card"
                ></v-skeleton-loader>
              </v-col>
            </v-row>
            <v-row
              class="fill-height"
              align="center"
              justify="center"
              v-else
            >
              <template v-for="(project, i) in projects" :key="i">
                <v-col
                  class="px-0 px-sm-0 pa-md-2"
                  cols="12"
                  sm="12"
                  md="6"
                  lg="6"
                  xl="4"
                >
                  <project-card :item="project" />
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>
