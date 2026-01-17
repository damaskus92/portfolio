import { defineStore } from 'pinia'

const GIST_URL =
  'https://gist.githubusercontent.com/damaskus92/97f685d05dcd4f3b6047004d8eecb094/raw/availability.json'

export const useAvailabilityStore = defineStore('availability', {
  state: () => ({
    isOpenForWork: true,
  }),

  actions: {
    async fetchStatus() {
      try {
        const response = await fetch(`${GIST_URL}?t=${Date.now()}`, {
          cache: 'no-store',
        })

        if (response.ok) {
          const data = await response.json()
          this.isOpenForWork = data.isOpenForWork
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.warn('Failed to fetch availability status, using fallback')
      }
    },
  },
})
