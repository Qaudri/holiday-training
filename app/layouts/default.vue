<template>
  <div class="select-none" :style="{ '--navbar-height': `${navbarHeight}px` }">
    <NavigationNavBar class="z-150" @height-change="handleNavbarHeightChange" />
    <div class="w-full min-h-screen lg:pt-[var(--navbar-height)]">
      <slot />
    </div>
    <NavigationFooter />
  </div>
</template>

<script setup lang="ts">
const navbarHeight = ref(72)

const handleNavbarHeightChange = (height: number) => {
  navbarHeight.value = height
}
</script>