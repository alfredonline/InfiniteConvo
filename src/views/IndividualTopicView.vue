<script>
import { topics } from '../data/data'
import ContentItem from '../components/ContentContainer.vue'

export default {
  components: {
    ContentItem
  },
  data() {
    return {
      topic: null
    }
  },
  computed: {
    topicName() {
      return this.$route.params.topicName
    },
    capitalizedTopicName() {
      return this.topicName
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },
    questions() {
      return this.topic?.questions || []
    },
    vocabulary() {
      return this.topic?.vocabulary || []
    },
    summary() {
      return this.topic?.summary || ''
    },
    exampleSentences() {
      return this.topic?.exampleSentences || []
    },
    collocations() {
      return this.topic?.collocations || []
    }
  },
  created() {
    this.fetchTopicData()
  },
  methods: {
    fetchTopicData() {
      console.log('Fetching topic data for:', this.topicName)
      console.log('Available topics:', topics)
      this.topic = topics.find(
        (topic) => topic.title.toLowerCase() === this.topicName.toLowerCase()
      )
      console.log('Found topic:', this.topic)
    }
  }
}
</script>

<template>
  <div class="container px-4 py-4 mx-auto mt-24 md:px-24">
    <h1 class="text-4xl font-bold mb-4">
      {{ capitalizedTopicName }}
    </h1>
    <p class="text-xl text-gray-600 mb-8">
      Explore this topic with our comprehensive ESL conversation materials
    </p>

    <div v-if="topic" class="space-y-8">
      <!-- Summary -->
      <ContentItem>
        <template #heading>Summary</template>
        <p class="text-gray-700">{{ summary }}</p>
      </ContentItem>

      <!-- Questions -->
      <ContentItem>
        <template #heading>Discussion Questions</template>
        <ul class="list-disc list-inside space-y-2">
          <li v-for="(question, index) in questions" :key="index" class="text-gray-700">
            {{ question }}
          </li>
        </ul>
      </ContentItem>

      <!-- Vocabulary -->
      <ContentItem>
        <template #heading>Vocabulary</template>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(word, index) in vocabulary"
            :key="index"
            class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {{ word }}
          </span>
        </div>
      </ContentItem>

      <!-- Example Sentences -->
      <ContentItem>
        <template #heading>Example Sentences</template>
        <div v-if="exampleSentences.length > 0">
          <ul class="space-y-2">
            <li
              v-for="(sentence, index) in exampleSentences"
              :key="index"
              class="text-gray-700 italic"
            >
              "{{ sentence }}"
            </li>
          </ul>
        </div>
        <div v-else>
          <p class="text-gray-700">No example sentences found for this topic.</p>
        </div>
      </ContentItem>

      <!-- Collocations -->
      <ContentItem>
        <template #heading>Collocations</template>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(collocation, index) in collocations"
            :key="index"
            class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
          >
            {{ collocation }}
          </span>
        </div>
      </ContentItem>
    </div>
    <div v-else class="text-red-500 text-center">
      No topic data found. Topic name: {{ topicName }}
    </div>
  </div>
</template>
