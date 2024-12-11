import { defineStore } from 'pinia'

// ICONS: https://icon-sets.iconify.design/simple-icons/?category=Brands+%2F+Social&query=php

export const useProjectStore = defineStore('project', {
   state: () => ({
      technologies: [
         { icon: 'mdi-expand-all-outline', name: 'All', slug: 'all' },
         { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', slug: 'nuxtjs' },
         { icon: 'simple-icons:nestjs', name: 'Nest.js', slug: 'nestjs' },
         { icon: 'simple-icons:nodedotjs', name: 'Node.js', slug: 'nodejs' },
         { icon: 'simple-icons:javascript', name: 'Javascript', slug: 'javascript' },
      ],
      projects: [
         {
            slug: 'element',
            title: {
               it: 'Sito web per i gamer',
               en: 'Website for gamers'
            },
            description: {
               it: 'Ho progettato e sviluppato una piattaforma web per il monitoraggio in tempo reale degli utenti dei vari\n' +
                 'team di streamer del Network Element Gaming. L’applicazione, integrata con le API di Twitch, consente di\n' +
                 'visualizzare lo stato live di tutti gli streamer appartenenti al network, mostrando informazioni aggiornate\n' +
                 'sugli utenti online, sullo streaming attivo, e dettagli sul gioco attualmente in uso.',
               en: 'Web application for the management of a non-profit association operating in the e-sports field. Registered players can participate in events, create teams and search for players to play with based on their preferences.'
            },
            features: [
               {
                  title: 'Monitoraggio in tempo reale',
                  subtitle: 'Il sistema aggiorna in tempo reale la lista degli streamer attivi, rendendo immediatamente visibile chi è online e in streaming',
                  icon: 'line-md:document-report'
               },
               {
                  title: 'Integrazione Twitch API',
                  subtitle: 'Grazie all’integrazione diretta con le API di Twitch, l’applicazione recupera e visualizza informazioni precise sugli spettatori attivi, il titolo dello streaming e il gioco in corso',
                  icon: 'line-md:document-code'
               },
               {
                  title: 'Dashboard utente intuitiva',
                  subtitle: 'La piattaforma è dotata di un’interfaccia user-friendly sviluppata in Nuxt.js, che offre una navigazione semplice e informazioni chiare sull\'attività dei membri del team di Element Gaming.',
                  icon: 'line-md:person'
               },
               {
                  title: 'Backend affdabile',
                  subtitle: 'Sviluppato in Node.js per garantire performance elevate e la gestione efficiente dei dati in tempo reale.',
                  icon: 'line-md:speedometer'
               }
            ],
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/6b319d775a8a9be85142abfbd612054b',
                  title: 'Homepage',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/0e63b3906b488c86b7aeca3ef50d8528',
                  title: 'Elenco giocatori',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/1d4e64ee41ed8cf44af6ec0825421930',
                  title: 'Dettaglio giocatori',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/f33ccd994a53ae2b7482366069587013',
                  title: 'Elenco streamers',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/d2089dd002171ebac8fbd502e8b58548',
                  title: 'Dettaglio streamer',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/fd09dad0ac1e2f5ef91e0f5d42064239',
                  title: 'Elenco delle sezioni',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/4cfffc3bff2b5bf313aa64d3e4d609f5',
                  title: 'Elenco dei team'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/fe11b090557d6fd55591e9268b27f5c7',
                  title: 'Dettaglio del team'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/744c4944c340df5ee798e504f21d7233',
                  title: 'Elenco degli eventi'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/d14f5b3279fb6f91fa3e58000369cf8a',
                  title: 'Dettaglio evento'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/ad8b2389cd3415fde1c54d2dcae7e420',
                  title: 'Elenco delle news'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/1554a5baeb81107c94cb13ee9e23fd40',
                  title: 'Dettaglio news'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/af88406da3e46ea2eec2852e0cd6f68a',
                  title: 'Dashboard degli streamer'
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/b85c608090674ecfaa2924d564c7309e',
                  title: 'Marketplace degli streamer'
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/6b319d775a8a9be85142abfbd612054b',
            startDate: '2019',
            current: true,
            website: 'https://element-gaming.eu',
            client: {
               name: 'Element Gaming ASD',
               bio: 'Associazione operante nel campo e-sport',
               website: 'https://element-gaming.eu',
               logo: 'https://file-harbor.com/api/v1/files/53cb109ede17055fcf4280649b9906e5',
               instagram: 'https://www.instagram.com/elementgaming.eu',
               linkedin: 'https://www.linkedin.com/company/elementgaming'
            },
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' },
                  { icon: 'simple-icons:sass', title: 'Sass' }
               ]
            }
         },
         {
            slug: 'emt-links',
            title: {
               it: 'Linktree website',
               en: 'Linktree website'
            },
            description: {
               it: 'Applicazione web di gestione di una associazione no-profit operante nel campo e-sport. I giocatori iscritti possono partecipare ad eventi, creare team e cercare giocatori con cui giocare in base alle proprie preferenze.',
               en: 'Web application for the management of a non-profit association operating in the e-sports field. Registered players can participate in events, create teams and search for players to play with based on their preferences.'
            },
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/33925b190be7f512bc95f9062dce6d4f',
                  title: 'Homepage',
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/33925b190be7f512bc95f9062dce6d4f',
            startDate: '2023',
            current: true,
            website: 'https://links.element-gaming.eu',
            client: {
               name: 'Element Gaming ASD',
               bio: 'Associazione operante nel campo e-sport',
               website: 'https://element-gaming.eu',
               logo: 'https://file-harbor.com/api/v1/files/53cb109ede17055fcf4280649b9906e5',
               instagram: 'https://www.instagram.com/elementgaming.eu',
               linkedin: 'https://www.linkedin.com/company/elementgaming'
            },
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' },
                  { icon: 'simple-icons:sass', title: 'Sass' }
               ]
            }
         },
         {
            slug: 'ziplink',
            title: {
               it: 'ZipLink',
               en: 'ZipLink'
            },
            description: {
               it: 'ZipLink è un sistema gestore di url con Rest API per la gestione di url accorciati, statistiche sui click e reindirizzamenti tramite codici personalizzati.',
               en: 'ZipLink, is an url manager system with Rest API for management of short urls, click statistics and redirects by personalized codes'
            },
            features: [
               {
                  title: "Gestione di URL accorciati",
                  subtitle: "ZipLink è un sistema gestore di URL con Rest API che consente la creazione e la gestione di URL accorciati.",
                  icon: "line-md:folder-network"
               },
               {
                  title: "Statistiche sui click",
                  subtitle: "Il sistema fornisce statistiche dettagliate sui click ricevuti dagli URL accorciati.",
                  icon: "line-md:check-list-3"
               },
               {
                  title: "Reindirizzamenti tramite codici personalizzati",
                  subtitle: "Permette la configurazione di reindirizzamenti utilizzando codici URL personalizzati.",
                  icon: "line-md:edit"
               }
            ],
            startDate: '2022',
            current: true,
            github: 'https://github.com/andreacw5/ziplink',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/andreacw5/ziplink',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            preview: 'https://file-harbor.com/api/v1/files/aa446189ee45f5b45daa112ad43861c6',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { icon: 'simple-icons:typescript', title: 'Typescript' }
               ]
            }
         },
         {
            slug: 'fileharbor',
            title: {
               it: 'FileHarbor',
               en: 'FileHarbor'
            },
            description: {
               it: 'Servizio costruito con Nest.js dedicato alla gestione degli upload di immagini, come avatar, copertine di post e altri asset.',
               en: 'Service built with Nest.js dedicated to handling image uploads, such as avatars, post covers, and other assets. '
            },
            startDate: '2024',
            current: true,
            github: 'https://github.com/andreacw5/fileharbor',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/andreacw5/fileharbor',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            features: [
               {
                  "title": "Gestione degli upload",
                  "subtitle": "Servizio costruito con Nest.js per la gestione degli upload di immagini.",
                  "icon": "line-md:cloud-alt-upload"
               },
               {
                  "title": "Supporto per Avatar",
                  "subtitle": "Carica e gestisci immagini personalizzate come avatar per gli utenti.",
                  "icon": "line-md:account"
               },
               {
                  "title": "Owner dei contenuti",
                  "subtitle": "I contenuti caricati sono assegnati ad un proprietario e viene salvato il dominio di provenienza, che può gestirli e modificarli.",
                  "icon": "line-md:cloud-alt-braces"
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/9eb12aade81517f5a5e63909d6ef1ae6',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { icon: 'simple-icons:typescript', title: 'Typescript' }
               ]
            }
         },
         {
            slug: 'alertconnector',
            title: {
               it: 'AlertConnector',
               en: 'AlertConnector'
            },
            description: {
               it: 'ZipLink è un sistema gestore di url con Rest API per la gestione di url accorciati, statistiche sui click e reindirizzamenti tramite codici personalizzati.',
               en: 'ZipLink, is an url manager system with Rest API for management of short urls, click statistics and redirects by personalized codes'
            },
            startDate: '2024',
            current: true,
            github: 'https://github.com/prociv-sm/management-api',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/prociv-sm/management-api',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            preview: 'https://file-harbor.com/api/v1/files/2880cba043f55f209b3ecb92e3b69a00',
            technical: {
               main: {
                  name: 'Nest.js',
                  icon: 'simple-icons:nestjs',
                  color: '#e0234e'
               },
               technologies: [
                  { title: 'Nest.js', icon: 'simple-icons:nestjs' },
                  { icon: 'simple-icons:typescript', title: 'Typescript' }
               ]
            }
         },
         {
            slug: 'prociv',
            title: {
               it: 'Sito web per la Protezione Civile',
               en: 'Website for Civil Defence'
            },
            client: {
               name: 'Protezione Civile di Settimo Milanese',
               bio: 'Associazione di Protezione Civile',
               website: 'https://procivsettimomi.it',
               logo: 'https://file-harbor.com/api/v1/files/0163bb330af52453b2735bf5186d8b25',
               instagram: 'https://www.instagram.com/procivsettimomi'
            },
            current: false,
            startDate: '2019',
            github: 'https://github.com/prociv-sm/website',
            website: 'https://procivsettimomi.it',
            description: {
               it: 'Sito web per l\'associazione di Protezione Civile di Settimo Milanese, una vetrina sulle attività dell\'associazione, il personale, la formazione e le attrezzature impiegate.',
               en: 'Website for the Civil Protection Association of Settimo Milanese, a showcase on the activities of the association, the staff, training and equipment used.'
            },
            features: [
               {
                  title: "Monitoraggio delle allerte in tempo reale",
                  subtitle: "Il sito fornisce aggiornamenti tempestivi sulle allerte in corso, permettendo ai cittadini di visualizzare i dettagli delle emergenze attive, gli avvisi di sicurezza e le linee guida da seguire.",
                  icon: "line-md:phone-call"
               },
               {
                  title: "Informazioni sugli eventi e sulle attività del gruppo",
                  subtitle: "La piattaforma offre una panoramica delle iniziative della Protezione Civile, inclusi eventi di sensibilizzazione, corsi di formazione e opportunità di volontariato.",
                  icon: "line-md:calendar"
               },
               {
                  title: "Integrazione con sistemi di allerta e gestione delle emergenze",
                  subtitle: "Grazie al backend sviluppato in NestJS, il sistema può ricevere e processare notiche da fonti di emergenza e pubblicare aggiornamenti in tempo reale.",
                  icon: "line-md:alert"
               },
               {
                  title: "Interfaccia user-friendly",
                  subtitle: "Il sito, realizzato in Nuxt.js, presenta una struttura chiara e accessibile, ottimizzata per dispositivi mobili, che facilita la navigazione e l’accesso rapido alle informazioni critiche per la sicurezza pubblica.",
                  icon: "line-md:computer"
               }
            ],
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/7c461f4d8a1a2f286d5d7af35f98bc9d',
                  title: 'Homepage',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/a4dbd2135b6b264b8db13f0e57c50ee0',
                  title: 'Le attività del gruppo',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/3a252f4a7b30fb8ca0e614fd1927590b',
                  title: 'La sede e i contatti',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/3c32584e42ddac97888b52b217102c7d',
                  title: 'I Volontari',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/a9f4d55e3c8365691b6fb18ae738351b',
                  title: 'I mezzi del gruppo',
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/7c461f4d8a1a2f286d5d7af35f98bc9d',
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', color: '#00A86B', name: 'Nuxt.js' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' }
               ]
            }
         },
         {
            slug: 'nuxt3-vuetify',
            title: {
               it: 'Nuxt 3 Vuetify Template',
               en: 'Nuxt 3 Vuetify Template'
            },
            description: {
               it: 'Modello di partenza per Nuxt 3 con Vuetify. Ottimo punto di partenza per la costruzione di un nuovo progetto Nuxt 3 con Vuetify.',
               en: 'Minimal Nuxt 3 starter template with Vuetify. Good starting point for building a new Nuxt 3 project with Vuetify. '
            },
            preview: 'https://file-harbor.com/api/v1/files/1d1516da142bc712ae31b3a8504c9e75',
            startDate: '2023',
            current: true,
            github: 'https://github.com/andreacw5/nuxt3-vuetify',
            client: {
               name: 'Open Source',
               bio: 'Progetto open source',
               website: 'https://github.com/andreacw5/nuxt3-vuetify',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' }
               ]
            }
         },
         {
            slug: 'puma-arts',
            title: {
               it: 'Sito web per Puma Arts',
               en: 'Website for Puma Arts'
            },
            description: {
               it: 'Sito web per l\'artista Emanuele Puma, una vetrina sulle sue opere, i suoi progetti e le sue collaborazioni.',
               en: 'Website for the artist Emanuele Puma, a showcase on his works, his projects and his collaborations.'
            },
            images: [
               {
                  image: 'https://file-harbor.com/api/v1/files/2be3bf23f7972b37436e489c4cb0620f',
                  title: 'Homepage',
               },
               {
                  image: 'https://file-harbor.com/api/v1/files/c1a29911ee6523239b024e9e5669b1e4',
                  title: 'Dettaglio opera',
               }
            ],
            preview: 'https://file-harbor.com/api/v1/files/2be3bf23f7972b37436e489c4cb0620f',
            startDate: '2023',
            current: true,
            website: 'https://studioartepuma.it/',
            github: 'https://github.com/andreacw5/puma-arts',
            client: {
               name: 'Private Client',
               bio: 'Piccola bottega artistica',
               website: 'https://studioartepuma.it',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28',
               instagram: 'https://www.instagram.com/puma_art_lab'
            },
            technical: {
               main: { icon: 'simple-icons:nuxtdotjs', name: 'Nuxt.js', color: '#00A86B' },
               technologies: [
                  { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt.js' },
                  { icon: 'simple-icons:nodedotjs', title: 'Node.js' },
                  { icon: 'simple-icons:vuetify', title: 'Vuetify' },
                  { icon: 'simple-icons:nginx', title: 'NGINX' }
               ]
            }
         },
         {
            slug: 'gymtrack',
            startDate: '2018',
            title: {
               it: 'Gym Track',
               en: 'Gym Track'
            },
            preview: 'https://file-harbor.com/api/v1/files/dd294ba4654b994e9f921882215726ae',
            client: {
               name: 'Private Client',
               bio: 'Personal Trainer',
               logo: 'https://file-harbor.com/api/v1/files/3fcd8577e8c1a378f655a3d5e0956d28'
            },
            description: {
               it: 'Applicazione web per la gestione dei clienti remoti di un personal trainer, che permette di gestire i clienti e le sessioni di fitness. Assegnando anche esercizi da remoto ai clienti.',
               en: 'Web application for the management of remote customers of a personal trainer, which allows you to manage clients and fitness sessions. Also assigning remote exercises to customers.'
            },
            technical: {
               main: { color: '#68a063', name: 'Node.js', icon: 'simple-icons:nodedotjs' },
               technologies: [
                  { title: 'Node.js', icon: 'simple-icons:nodedotjs' },
                  { title: 'simple-icons:html5', name: 'HTML5' },
                  { title: 'CSS3', icon: 'simple-icons:css3' },
                  { icon: 'simple-icons:javascript', title: 'Javascript' }
               ]
            },
            current: false
         },
         {
            slug: 'alirdb',
            client: {
               name: 'ALIR Community',
               bio: 'Community di Arma 3',
               logo: 'https://file-harbor.com/api/v1/files/b770e4eef73c37303ffe66d40db35a05',
               instagram: 'https://www.instagram.com/alircommunity'
            },
            description: {
               it: 'Un portale online per la visualizzazione dei propri dati e progressi personali all\'interno del gioco Arma 3. Fornisce dati sui veicoli, incarichi, armi, ruoli e conti bancari dei giocatori.',
               en: 'An online portal for viewing your personal data and progress within the Arma 3 game. It provides data on players\' vehicles, assignments, weapons, roles, and bank accounts.'
            },
            startDate: '2017',
            preview: 'https://file-harbor.com/api/v1/files/e0f298cb75d18b5a6ee5b273d22f101a',
            technical: {
               main: {
                  icon: 'simple-icons:javascript',
                  color: '#f0db4f',
                  name: 'Javascript'
               },
               technologies: [
                  { icon: 'simple-icons:html5', title: 'HTML5' },
                  { title: 'CSS3', icon: 'simple-icons:css3' },
                  { icon: 'simple-icons:javascript', title: 'Javascript' }
               ]
            },
            current: false,
            title: {
               it: 'ALIRDB',
               en: 'ALIRDB'
            },
            github: 'https://github.com/andreacw5/ALIRDB'
         },
         {
            slug: 'alircommunity',
            title: {
               it: 'Sito web per ALIR',
               en: 'Website for ALIR'
            },
            description: {
               en: 'Arma 3 website and community forum. The website is a platform for discussion and support to the ALIR community, playing in the dedicated server based on Altis Life, a game mode.',
               it: 'Sito web e forum per la community di Arma 3. Il sito web è una piattaforma di discussione e di supporto alla community di ALIR, giocante nel server dedicato basato su Altis Life, una modalità di gioco.'
            },
            startDate: '2016',
            preview: 'https://file-harbor.com/api/v1/files/f265f76e62f263a4a76b57652ea5ed40',
            client: {
               name: 'ALIR Community',
               bio: 'Community di Arma 3',
               logo: 'https://file-harbor.com/api/v1/files/b770e4eef73c37303ffe66d40db35a05',
               instagram: 'https://www.instagram.com/alircommunity'
            },
            technical: {
               technologies: [
                  { title: 'HTML5', icon: 'simple-icons:html5' },
                  { icon: 'simple-icons:css3', title: 'CSS3' },
                  { icon: 'simple-icons:javascript', title: 'Javascript' },
                  { icon: 'simple-icons:php', title: 'PHP' }
               ],
               main: {
                  color: '#f0db4f',
                  icon: 'simple-icons:javascript',
                  name: 'Javascript'
               }
            }
         }
      ]
   }),
   getters: {
      getAllTechs (state) {
         return state.technologies
      },
      getAllProjects (state) {
         return state.projects
      },
      getProjectByTech (state) {
         return (tech: string) => {
            if (tech === 'All') return state.projects
            return state.projects.filter(project => project.technical.main.name.includes(tech))
         }
      },
      getProjectBySlug (state) {
          return (slug: string | string[]) => {
             return state.projects.find(project => project.slug === slug)
          }
      },
      getSimilarProjects (state) {
         return (slug: string | string[]) => {
            const project = state.projects.find(project => project.slug === slug)
            const filtered = state.projects.filter(p => p.technical.main.name === project?.technical.main.name && p.slug !== project.slug)
            // Limit return to 3
            return filtered.slice(0, 2)
         }
      }
   },
})
