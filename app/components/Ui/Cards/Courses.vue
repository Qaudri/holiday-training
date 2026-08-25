<script setup>
import { ArrowRight } from '@lucide/vue';
defineProps({
  icon: { type: [Object, Function], required: true },
  color: {
    type: String,
    default: 'orange',
    validator: (v) => ['orange', 'purple', 'teal', 'brown', 'mint'].includes(v),
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  badge: { type: String, required: true },
  href: { type: String, default: '#' },
  featured: { type: Boolean, default: false },
})

// Icon square background + icon color per palette (non-featured cards only).
const iconStyles = {
  orange: 'bg-secondary/10 text-secondary',
  purple: 'bg-purple-100 text-purple-700',
  teal: 'bg-primary/10 text-primary',
  brown: 'bg-amber-800/10 text-amber-800',
  mint: 'bg-emerald-50 text-teal-700',
}
</script>

<template>
  <li
    class="group rounded-2xl p-8 border transition-colors duration-200"
    :class="
      featured
        ? 'bg-teal-700 border-teal-700 text-white'
        : 'bg-white border-gray-200 hover:bg-primary group'
    "
  >
    <div
      class="w-12 h-12 rounded-lg grid place-content-center mb-6 group-hover:bg-primary-dark/30"
      :class="featured ? 'bg-white/10' : iconStyles[color]"
    >
      <component
        :is="icon"
        :size="26"
        :class="featured ? 'text-white' : 'group-hover:text-white'"
      />
    </div>

    <h3
      class="text-2xl font-semibold hanken mb-4"
      :class="!featured && 'group-hover:text-white'"
    >
      {{ title }}
    </h3>

    <UiTypographyP
      class="mb-8"
      :class="featured ? 'text-white/80' : 'group-hover:text-gray-300'"
    >
      {{ description }}
    </UiTypographyP>

    <div
      class="border-t pt-6 flex items-center justify-between"
      :class="featured ? 'border-white/20' : 'border-gray-200'"
    >
      <span
        class="text-xs uppercase hanken"
        :class="featured ? 'text-white/70' : 'text-neutral-300'"
      >
        {{ badge }}
      </span>
      <NuxtLink
        class="font-bold text-base flex items-center gap-2"
        :class="featured ? 'text-white' : 'text-primary group-hover:text-white'"
      >
        View Course
        <ArrowRight :size="20" />
      </NuxtLink>
    </div>
  </li>
</template>