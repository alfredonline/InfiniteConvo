<script setup lang="ts">
import ContentItem from '../components/ContentContainer.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faComments, faBullseye, faGift, faEnvelope } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="container px-4 py-4 mx-auto mt-24 md:px-24">
    <h1 class="text-4xl font-bold mb-4">About InfiniteConvo</h1>
    <p class="text-xl text-gray-600 mb-8">
      Your go-to resource for endless conversation starters and questions for ESL teachers
    </p>

    <div class="space-y-8">
      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faComments" class="text-3xl text-blue-500" />
        </template>
        <template #heading>Who We Are</template>
        <p class="text-gray-700">
          InfiniteConvo.com is dedicated to providing ESL teachers with a vast array of engaging
          conversation topics and questions. Our platform is designed to facilitate meaningful
          discussions and improve language skills in the classroom.
        </p>
      </ContentItem>

      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faBullseye" class="text-3xl text-green-500" />
        </template>
        <template #heading>Our Mission</template>
        <p class="text-gray-700">
          We aim to empower ESL teachers with comprehensive conversation materials that cater to
          various proficiency levels. Our goal is to make language learning more engaging,
          interactive, and effective for students worldwide.
        </p>
      </ContentItem>

      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faGift" class="text-3xl text-purple-500" />
        </template>
        <template #heading>What We Offer</template>
        <ul class="text-gray-700 list-disc list-inside">
          <li>Thousands of conversation starters across various topics</li>
          <li>Customizable difficulty levels for different language proficiencies</li>
          <li>Regular updates with fresh content</li>
          <li>Teacher resources and lesson plan ideas</li>
        </ul>
      </ContentItem>

      <ContentItem>
        <template #icon>
          <FontAwesomeIcon :icon="faEnvelope" class="text-3xl text-red-500" />
        </template>
        <template #heading>Get in Touch</template>
        <p class="text-gray-700">
          Have questions or suggestions? We'd love to hear from you! Contact us at
          <a href="mailto:info@infiniteconvo.com" class="text-blue-600 hover:underline">
            info@infiniteconvo.com </a
          >.
        </p>
      </ContentItem>
    </div>
  </div>
</template>
