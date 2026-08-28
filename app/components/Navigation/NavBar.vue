<template>
  <header ref="navRef" class="fixed inset-x-0 top-0 z-20 w-full bg-white duration-300 ease-in-out border-b border-neutral-200">
    <Container class="">
      <div ref="topBarRef" class="flex items-center justify-between px-6 py-4">
        <div class="w-36 shrink-0">
          <NavigationLogo class="text-primary" />
        </div>

        <div class="ml-auto">
          <button
            type="button"
            class="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:scale-105"
            @click="requestEnrollment"
          >
            SECURE A SLOT
          </button>
        </div>
      </div>
    </Container>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits<{ (e: 'height-change', height: number): void }>()

const topBarRef = ref<HTMLElement | null>(null)
const navHeight = ref(72)

const requestEnrollment = () => {
  window.dispatchEvent(new CustomEvent('open-enrollment-dialog'))
}

const updateNavHeight = () => {
  const height = topBarRef.value?.offsetHeight ?? 72
  navHeight.value = height
  emit('height-change', height)
}

onMounted(() => {
  updateNavHeight()
  window.addEventListener('resize', updateNavHeight)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateNavHeight)
})
</script>
