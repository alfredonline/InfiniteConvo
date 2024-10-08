<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow">
    <nav class="container px-6 py-4 mx-auto flex flex-wrap justify-between items-center">
      <div class="flex items-center justify-between w-full md:w-auto">
        <RouterLink to="/" class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400">
          InfiniteConvo
        </RouterLink>
        <!-- Mobile menu button -->
        <div @click="toggleMenu" class="md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ul
        :class="showMenu ? 'block' : 'hidden'"
        class="w-full md:flex md:items-center md:w-auto md:space-x-10 mt-4 md:mt-0"
      >
        <li>
          <RouterLink
            to="/"
            class="block py-2 text-sm font-bold text-gray-800 hover:text-blue-400"
            @click="toggleMenu"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            @click="toggleMenu"
            class="block py-2 text-sm font-bold text-gray-800 hover:text-blue-400"
            >About
          </RouterLink>
        </li>
        <li>
          <RouterLink
            @click="toggleMenu"
            to="/topics"
            class="block py-2 text-sm font-bold text-gray-800 hover:text-blue-400"
            >Topics</RouterLink
          >
        </li>
        <li>
          <RouterLink
            @click="toggleMenu"
            to="/contact"
            class="block py-2 text-sm font-bold text-gray-800 hover:text-blue-400"
            >Contact Us</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
