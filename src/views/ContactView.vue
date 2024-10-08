<script setup lang="ts">
import ContentItem from '../components/ContentContainer.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="container px-4 py-4 mx-auto mt-24 md:px-24">
    <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
    <p class="text-xl text-gray-700 dark:text-gray-200 mb-8">
      Get in touch with InfiniteConvo - we're here to help!
    </p>

    <div class="space-y-8">
      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faEnvelope" class="text-3xl text-blue-500 dark:text-blue-400" />
        </template>
        <template #heading>Email</template>
        <p class="text-gray-700 dark:text-gray-200">
          For any inquiries, please email us at:
          <a
            href="mailto:hello@alfiewebdev.com"
            class="text-blue-600 dark:text-blue-400 hover:underline"
          >
            hello@alfiewebdev.com
          </a>
        </p>
      </ContentItem>
    </div>
  </div>
</template>
