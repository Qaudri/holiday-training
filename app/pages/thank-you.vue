<template>
  <main class="thank-you-page">
    <Container class="relative flex min-h-[calc(100vh-72px)] items-center justify-center py-16">
      <div class="absolute left-8 top-16 h-5 w-24 -rotate-6 bg-pink/70 sm:left-16" aria-hidden="true"></div>
      <div class="absolute bottom-20 right-8 h-4 w-16 rotate-6 bg-secondary/70 sm:right-16" aria-hidden="true"></div>

      <section class="relative w-full max-w-2xl rounded-3xl border border-neutral-200 bg-white px-6 py-12 text-center shadow-xl shadow-primary-dark/10 sm:px-12">
        <div class="mx-auto grid h-20 w-20 place-content-center rounded-full bg-primary-light/40 text-primary">
          <CheckCircle2 :size="44" :stroke-width="1.8" />
        </div>

        <p class="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-secondary">Reservation received</p>
        <UiTypographyH1 class="mt-3 text-4xl sm:text-6xl">YOU'RE ON THE LIST!</UiTypographyH1>
        <UiTypographyP class="mx-auto mt-5 max-w-lg text-neutral-600">
          Thanks for reserving a place in our holiday coding programme. Our enrollment team will contact you shortly to confirm your child's slot.
        </UiTypographyP>

        <div class="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 text-left">
          <div class="rounded-lg bg-neutral-50 p-4">
            <span class="text-xs uppercase tracking-wider text-neutral-500">Programme</span>
            <p class="mt-1 font-semibold text-primary-dark">Code This Holiday</p>
          </div>
          <div class="rounded-lg bg-neutral-50 p-4">
            <span class="text-xs uppercase tracking-wider text-neutral-500">Next step</span>
            <p class="mt-1 font-semibold text-primary-dark">Watch your inbox</p>
          </div>
        </div>

        <NuxtLink to="/" class="mt-9 inline-flex items-center gap-2 rounded bg-primary-dark px-6 py-3 font-semibold text-white transition duration-200 hover:bg-primary">
          Back to home
          <ArrowRight :size="18" />
        </NuxtLink>
        <p class="mt-5 text-sm text-neutral-500">
          Questions? <a href="tel:09036049992" class="font-semibold text-primary hover:text-secondary">09036049992</a>
        </p>
      </section>
    </Container>
  </main>
</template>

<script setup lang="ts">
import { ArrowRight, CheckCircle2 } from '@lucide/vue'
</script>

<style scoped>
.thank-you-page {
  background-color: #f4f4f4;
  background-image:
    linear-gradient(rgb(5 129 130 / 8%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(5 129 130 / 8%) 1px, transparent 1px);
  background-size: 38px 38px;
}
</style>