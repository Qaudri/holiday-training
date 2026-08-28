<template>
  <footer class="bg-primary-dark py-12">
    <Container>
      <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-md">
          <div class="mb-4 w-36">
            <NavigationLogo class="text-primary-light" />
          </div>
          <h5 class="text-2xl text-white/80">Build something brilliant this holiday.</h5>
          <p class="mt-3 text-base text-gray-400">
            A hands-on digital skills programme for curious young minds.
          </p>
        </div>

        <div class="flex flex-col items-start gap-4 sm:items-end">
          <button
            type="button"
            class="rounded bg-secondary px-5 py-3 font-semibold text-white transition duration-200 ease-in-out hover:bg-white hover:text-secondary"
            @click="requestEnrollment"
          >
            SECURE A SLOT
          </button>
          <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="mailto:contact@addeddigital.com" class="text-gray-400 transition duration-200 ease-in-out hover:text-primary-light">
              contact@addeddigital.com
            </a>
            <a href="https://addeddigital.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-gray-400 transition duration-200 ease-in-out hover:text-primary-light">
              Visit Addeddigital.com
              <ExternalLink :size="14" />
            </a>
          </div>
        </div>
      </div>

      <div class="my-6 h-[1px] bg-primary-light/25"></div>

      <div class="mt-8 flex flex-wrap justify-between gap-4">
        <p class="text-sm text-gray-400">&copy; {{ new Date().getFullYear() }} Added Digital Solutions. All rights reserved.</p>
        <p class="text-sm text-gray-400">Powered by Added Digital Solutions</p>
      </div>
    </Container>
  </footer>
</template>
<script setup lang="ts">
import { ExternalLink } from '@lucide/vue'

const requestEnrollment = () => {
  window.dispatchEvent(new CustomEvent('open-enrollment-dialog'))
}
</script>
