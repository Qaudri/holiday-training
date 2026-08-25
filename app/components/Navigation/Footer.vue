<template>
  <footer class="bg-primary-dark py-16">
    <Container>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div class="w-36 mb-4">
            <NavigationLogo class="text-primary" />
          </div>
          <p class="text-base text-gray-400">
            Breathing new life into brands.
            Award-winning specialists in digital
            storytelling.
          </p>

          <div class="mt-6 flex gap-6">
            <NuxtLink class="bg-white/10 hover:bg-white/25 ease-in-out duration-200 w-10 h-10 rounded-full grid place-content-center">
              <Share2 color="white" :size="18" />
            </NuxtLink>
            <NuxtLink class="bg-white/10 hover:bg-white/25 ease-in-out duration-200 w-10 h-10 rounded-full grid place-content-center">
              <Link2 color="white" :size="18" />
            </NuxtLink>
          </div>
        </div>

        <div>
          <h6 class="text-base text-primary-light">Company</h6>
          <ul class="mt-2 space-y-4">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">Services</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">Blog</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h6 class="text-base text-primary-light">Services</h6>
          <ul class="mt-2 space-y-4">
            <li>
              <NuxtLink to="/" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">Branding</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">Web Design</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">Marketing</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-gray-400 hover:text-primary-light ease-in-out duration-200">SEO Strategy</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h6 class="text-base text-primary-light m-0">Location</h6>
          <p class="my-4 text-gray-400">
            Sidolink filling station, Agunbelewo along Oyo road,<br/>
            Iwo, Osun state, Nigeria
          </p>
          <NuxtLink
            to="mailto:contact@addeddigital.com"
            class="block max-w-full truncate text-primary-light font-bold transition duration-200 ease-in-out hover:text-white"
          >
            contact@addeddigital.com
          </NuxtLink>
        </div>
      </div>

      <div class="my-6 h-[1px] bg-primary-light/25"></div>

      <div class="flex flex-wrap gap-8 align-items justify-between mt-8">
        <p class="text-sm text-gray-400">&copy; {{ new Date().getFullYear() }} Added Digital Solutions. All rights reserved.</p>

        <div class="flex gap-6">
          <NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-primary-light ease-in-out duration-200 text-sm">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms-of-service" class="text-gray-400 hover:text-primary-light ease-in-out duration-200 text-sm">Terms of Service</NuxtLink>
        </div>
      </div>
    </Container>
  </footer>
</template>
<script setup lang="ts">
import { Share2, Link2 } from '@lucide/vue'
</script>
