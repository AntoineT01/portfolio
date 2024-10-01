import { defineStore } from 'pinia'

interface Project {
    id: number
    title: string
    description: string
}

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [] as Project[]
    }),
    actions: {
        async fetchProjects() {
            // Simuler un appel API
            this.projects = [
                { id: 1, title: 'Projet 1', description: 'Description du projet 1' },
                { id: 2, title: 'Projet 2', description: 'Description du projet 2' },
                { id: 3, title: 'Projet 3', description: 'Description du projet 3' },
            ]
        }
    }
})