<template>
  <div class="container px-4 py-4 mx-auto mt-24 md:px-24">
    <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
      Conversation Topics for English Teachers
    </h1>
    <p class="text-xl text-gray-700 dark:text-gray-100 mb-8">
      Explore our wide range of topics to spark engaging discussions in your ESL classroom
    </p>

    <!-- Search bar -->
    <div class="mb-8">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search topics..."
        class="w-full p-2 border border-gray-300 dark:border-gray-500 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-300"
      />
    </div>

    <!-- No results message -->
    <p
      v-if="filteredTopics.length === 0"
      class="text-center text-gray-600 dark:text-gray-200 my-8 flex flex-col items-center"
    >
      <font-awesome-icon icon="fa-solid fa-triangle-exclamation" class="text-3xl mb-2" />
      No topics found matching your search
    </p>

    <!-- Topics grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <router-link
        v-for="topic in filteredTopics"
        :key="topic.id"
        :to="{
          name: 'topic',
          params: { topicName: topic.name.toLowerCase().replace(/\s+/g, '-') }
        }"
        class="flex items-center p-4 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        <font-awesome-icon :icon="topic.icon" class="text-3xl mr-4" :class="getIconColor(topic)" />
        <span class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ topic.name }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { topics } from '@/data/data'

export default {
  data() {
    return {
      searchQuery: '',
      topics: topics.map((topic) => ({
        name: topic.title,
        icon: topic.icon
      }))
    }
  },
  computed: {
    filteredTopics() {
      return this.topics.filter((topic) =>
        topic.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    getIconColor(topic) {
      const colors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-red-500']
      return colors[this.topics.indexOf(topic) % colors.length]
    }
  }
}
</script>
