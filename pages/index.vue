<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white shadow-lg">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-4xl font-bold">{{ cv.name }}</h1>
        <p class="text-xl">{{ cv.profession }}</p>
      </div>
    </header>

    <main class="container mx-auto px-4 py-8">
      <CV :cv="cv" />

      <section class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">Mes Projets</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
              v-for="project in projects"
              :key="project.id"
              :title="project.title"
              :description="project.description"
          />
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white mt-12">
      <div class="container mx-auto px-4 py-6 text-center">
        <p>&copy; {{ new Date().getFullYear() }} {{ cv.name }}. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useProjectsStore } from '~/stores/projects'
import CV from '~/components/CV.vue'

// Charger le contenu du CV depuis le fichier JSON
const { data: cv } = await useAsyncData('cv', () => queryContent('cv').findOne())

// Utiliser le store Pinia pour gérer les projets
const projectsStore = useProjectsStore()
await projectsStore.fetchProjects()
const projects = computed(() => projectsStore.projects)
</script>