<script setup lang="ts">
import ContentItem from './ContentContainer.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faQuestion, faBook, faLanguage, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="container px-4 py-4 mx-auto mt-24 md:px-24">
    <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
      ESL Conversation Resources
    </h1>
    <p class="text-xl text-gray-700 dark:text-gray-200 mb-8">
      Empowering ESL teachers with comprehensive conversation materials
    </p>

    <div class="space-y-8">
      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faQuestion" class="text-3xl text-blue-500 dark:text-blue-400" />
        </template>
        <template #heading>Conversation Questions</template>
        <p class="text-gray-700 dark:text-gray-200">
          Explore a wide range of engaging conversation topics suitable for various proficiency
          levels. Our questions are designed to stimulate meaningful discussions in your ESL
          classroom.
        </p>
      </ContentItem>

      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faBook" class="text-3xl text-green-500 dark:text-green-400" />
        </template>
        <template #heading>Vocabulary</template>
        <p class="text-gray-700 dark:text-gray-200">
          Each conversation topic comes with a curated list of relevant vocabulary words. Help your
          students expand their lexicon and use new words in context.
        </p>
      </ContentItem>

      <ContentItem>
        <template #icon>
          <FontAwesomeIcon
            :icon="faLanguage"
            class="text-3xl text-purple-500 dark:text-purple-400"
          />
        </template>
        <template #heading>Collocations</template>
        <p class="text-gray-700 dark:text-gray-200">
          Improve your students' natural language use with topic-specific collocations. These word
          partnerships will help learners sound more fluent and native-like.
        </p>
      </ContentItem>

      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faQuoteRight" class="text-3xl text-red-500 dark:text-red-400" />
        </template>
        <template #heading>Example Sentences</template>
        <p class="text-gray-700 dark:text-gray-200">
          Reinforce learning with practical example sentences for each topic. These sentences
          demonstrate proper usage of vocabulary and collocations in real-life contexts.
        </p>
      </ContentItem>
    </div>
  </div>
</template>
