<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const drawer = ref(false)
const localePath = useLocalePath()
const { data, status, signOut } = useAuth()

const links = ref([
  {
    title: t("sections.home"),
    prependIcon: "line-md:home",
    to: '/',
    link: true,
    aria: 'Home section'
  },
  {
    title: t("sections.projects"),
    prependIcon: "line-md:briefcase",
    to: '/projects',
    link: true,
    aria: 'Projects section'
  },
  {
    title: t("sections.travels"),
    prependIcon: "line-md:map-marker-filled",
    to: '/travels',
    link: true,
    aria: 'Travels section'
  }
])

const projects = ref([
  {
    type: 'subheader',
    title: t('navigation.featured'),
    class: 'text-white',
  },
  {
    title: 'Element Gaming',
    to: '/projects/element',
    link: true,
    aria: 'Element Gaming project'
  },
  {
    title: 'ProCiv Settimo',
    to: '/projects/prociv',
    link: true,
    aria: 'ProCiv Settimo project'
  },
  {
    title: 'ZipLink',
    to: '/projects/ziplink',
    link: true,
    aria: 'ZipLink project'
  },
])

const closeOrOpenDrawer = () => {
  drawer.value = !drawer.value
}

const appBarItems = computed(() => {
  return [
    {
      "name": "sections.home",
      "url": "/"
    },
    {
      "name": "sections.projects",
      "url": "/projects"
    },
    {
      "name": "sections.travels",
      "url": "/travels"
    }
  ]
})
</script>

<template>
  <div class="header">
    <v-app-bar
      class="card-gradient pl-0 gradient-border-bottom"
    >
      <v-container class="d-flex align-center py-0">
        <v-app-bar-nav-icon
          variant="text"
          class="hidden-md-and-up text-white"
          :icon="drawer ? 'line-md:menu-to-close-transition' : 'line-md:menu-fold-right'"
          @click="closeOrOpenDrawer"
          aria-label="Menu button"
        />
        <v-divider vertical inset class="mr-4 ml-2 hidden-md-and-up white-text" />

        <nuxt-link :to="localePath('/')" class="mt-2">
          <img
            :height="35"
            :width="115"
            src="@/assets/branding/atom-web.webp"
            alt="Andrea Tombolato website logo"
            aria-label="Andrea Tombolato website logo"
          />
        </nuxt-link>

        <v-spacer />
        <v-btn
          v-for="item in appBarItems"
          :key="item.name"
          class="hidden-sm-and-down white-text mr-1"
          :to="localePath(item.url)"
        >
          {{ $t(item.name) }}
        </v-btn>
        <v-divider vertical inset class="mr-2 ml-2 hidden-sm-and-down white-text" />
        <v-btn
          variant="text"
          class="white-text mr-1"
          :icon="true"
          href="https://github.com/andreacw5"
          target="_blank"
          aria-label="GitHub profile"
        >
          <Icon size="25" name="line-md:github" />
        </v-btn>
        <v-btn
          v-if="status === 'unauthenticated'"
          variant="text"
          class="white-text hidden-sm-and-down"
          :icon="true"
          :to="localePath('/auth/login')"
          aria-label="Login"
        >
          <Icon size="25" name="line-md:login" />
        </v-btn>

        <v-btn v-else class="ms-1" icon rounded="lg">
          <v-avatar
            tile
            rounded="lg"
            class="card"
            image="https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83"
          />

          <v-menu activator="parent" origin="top">
            <v-list
              lines="two"
              link
              rounded="lg"
              class="card"
            >
              <v-list-item
                link
                prepend-icon="line-md:chat"
                to="/ai-caller"
                title="ChatGPT Integration"
                subtitle="Chat with an AI"
              />
              <v-list-item
                prepend-icon="line-md:logout"
                link
                title="Sign out"
                subtitle="Log out from the website"
                @click="signOut"
              />
            </v-list>
          </v-menu>
        </v-btn>

        <!--          <v-divider vertical inset class="mr-2 ml-2 hidden-sm-and-down white-text" />
              <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                <Icon :icon="locale.icon" height="25"/>
              </NuxtLink>-->

      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="card-gradient"
      temporary
    >
      <v-list class="mt-2 mb-1">
        <v-list-item
          title="Andrea Tombolato"
          subtitle="Web Developer"
        >
          <template #prepend>
            <v-avatar tile class="card" size="40">
              <v-img src="https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83" alt="Avatar" />
            </v-avatar>
          </template>
        </v-list-item>
      </v-list>

      <v-list
        density="comfortable"
        item-props
        :items="links"
        nav
        rounded
      />

      <v-list
        density="comfortable"
        item-props
        :items="projects"
        nav
      >
        <template #prepend="{ item }">
          <v-avatar
            class="pa-4"
            color="surface-light"
            variant="tonal"
            rounded="lg"
            size="24"
          >
            <v-avatar
              :text="item.title.charAt(0)"
              rounded
            >
            </v-avatar>
          </v-avatar>
        </template>
      </v-list>

      <template #append>
        <v-list-item
          class="ma-2"
          link
          nav
          :to="localePath('/auth/login')"
          prepend-icon="line-md:login"
          :title="$t('auth.login.title')"
        />
      </template>

    </v-navigation-drawer>
  </div>
</template>
