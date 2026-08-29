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
          Thanks for reserving a place in our holiday coding programme. Complete your enrollment by making the payment below.
        </UiTypographyP>

        <div class="mx-auto mt-10 max-w-md rounded-2xl border-2 border-secondary/30 bg-secondary/5 p-6">
          <h3 class="text-lg font-semibold text-primary-dark">Payment Details</h3>
          <div class="mt-4 space-y-3 text-left">
            <div>
              <span class="text-xs uppercase tracking-wider text-neutral-500">Account Number</span>
              <p class="mt-1 font-mono text-lg font-bold text-primary">6359339876</p>
            </div>
            <div>
              <span class="text-xs uppercase tracking-wider text-neutral-500">Bank</span>
              <p class="mt-1 font-semibold text-primary-dark">Moniepoint</p>
            </div>
            <div>
              <span class="text-xs uppercase tracking-wider text-neutral-500">Account Name</span>
              <p class="mt-1 font-semibold text-primary-dark">Added Digital Solutions</p>
            </div>
          </div>
          <div class="mt-5 rounded-lg bg-white p-3">
            <p class="text-sm text-neutral-600">
              <span class="font-semibold">📱 After payment,</span> send a screenshot of your receipt to <a href="https://wa.me/2349036049992" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary hover:text-secondary transition">09036049992</a> on WhatsApp to complete your enrollment.
            </p>
          </div>
        </div>

        <div class="mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 text-left">
          <div class="rounded-lg bg-neutral-50 p-4">
            <span class="text-xs uppercase tracking-wider text-neutral-500">Programme</span>
            <p class="mt-1 font-semibold text-primary-dark">Code This Holiday</p>
          </div>
          <div class="rounded-lg bg-neutral-50 p-4">
            <span class="text-xs uppercase tracking-wider text-neutral-500">Next step</span>
            <p class="mt-1 font-semibold text-primary-dark">Send receipt via WhatsApp</p>
          </div>
        </div>

        <NuxtLink to="/" class="mt-9 inline-flex items-center gap-2 rounded bg-primary-dark px-6 py-3 font-semibold text-white transition duration-200 hover:bg-primary">
          Back to home
          <ArrowRight :size="18" />
        </NuxtLink>
        <p class="mt-5 text-sm text-neutral-500">
          Questions? <a href="https://wa.me/2349036049992" target="_blank" rel="noopener noreferrer" class="font-semibold text-primary hover:text-secondary transition">Chat on WhatsApp</a>
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