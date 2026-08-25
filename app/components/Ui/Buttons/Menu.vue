<template>
  <button
    type="button"
    class="relative flex h-8 w-8 shrink-0 items-center justify-center md:hidden"
    :style="{ '--menu-line-color': color }"
    :aria-expanded="isOpen"
    aria-label="Toggle menu"
    @click="handleClick"
  >
    <span class="relative block h-4 w-8">
      <!-- classic 3-line hamburger -->
      <template v-if="variant === 'three'">
        <span class="line" :style="lineStyle('topThree')" />
        <span class="line" :style="middleFadeStyle" />
        <span class="line" :style="lineStyle('bottomThree')" />
      </template>

      <!-- 2-line variant -->
      <template v-else-if="variant === 'two'">
        <span class="line" :style="lineStyle('topTwo')" />
        <span class="line" :style="lineStyle('bottomTwo')" />
      </template>

      <!-- unique: half-width top/bottom bars pivot at true center and
           join into one diagonal; full-width middle bar forms the other -->
      <template v-else-if="variant === 'unique'">
        <span class="line" :style="lineStyle('topUnique')" />
        <span class="line" :style="uniqueMiddleStyle" />
        <span class="line" :style="lineStyle('bottomUnique')" />
      </template>
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: boolean
  color?: string
  variant?: 'two' | 'three' | 'unique'
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  color: 'currentColor',
  variant: 'three'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'toggleMenu'): void
}>()

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (value) => {
  isOpen.value = value
})

const handleClick = () => {
  isOpen.value = !isOpen.value
  emit('update:modelValue', isOpen.value)
  emit('toggleMenu')
}

type LineKey = 'topThree' | 'bottomThree' | 'topTwo' | 'bottomTwo' | 'topUnique' | 'bottomUnique'

// Every state is a single `transform` (translateY + rotate), so the
// browser only animates compositor-friendly properties.
const TRANSFORMS: Record<LineKey, { closed: string; open: string; origin?: string }> = {
  topThree:    { closed: 'translateY(calc(-50% - 6px))', open: 'translateY(-50%) rotate(45deg)' },
  bottomThree: { closed: 'translateY(calc(-50% + 6px))', open: 'translateY(-50%) rotate(-45deg)' },

  topTwo:      { closed: 'translateY(calc(-50% - 5px))', open: 'translateY(-50%) rotate(45deg)' },
  bottomTwo:   { closed: 'translateY(calc(-50% + 5px))', open: 'translateY(-50%) rotate(-45deg)' },

  // Fixed length (no scaleX) — only translateY and rotate change.
  // Origin sits on the inner edge of each half-bar, which is exactly
  // the container's center point, so both bars pivot from the same spot.
  topUnique:    { closed: 'translateY(calc(-50% - 6px)) rotate(0deg)', open: 'translateY(-50%) rotate(-45deg)', origin: 'left' },
  bottomUnique: { closed: 'translateY(calc(-50% + 6px)) rotate(0deg)', open: 'translateY(-50%) rotate(-45deg)', origin: 'right' }
}

// Static (non-animated) sizing/position for the half-width unique bars.
const STATIC_POSITION: Partial<Record<LineKey, Record<string, string>>> = {
  topUnique:    { width: '50%', left: 'auto', right: '0' },
  bottomUnique: { width: '50%', left: '0', right: 'auto' }
}

const lineStyle = (key: LineKey) => {
  const cfg = TRANSFORMS[key]
  return {
    ...STATIC_POSITION[key],
    transform: isOpen.value ? cfg.open : cfg.closed,
    transformOrigin: cfg.origin ?? 'center'
  }
}

// Shared middle line for 'three' — fades and collapses.
const middleFadeStyle = computed(() => ({
  transform: isOpen.value ? 'translateY(-50%) scaleX(0)' : 'translateY(-50%) scaleX(1)',
  opacity: isOpen.value ? 0 : 1
}))

// Middle line for 'unique' — stays visible, becomes the opposite diagonal.
const uniqueMiddleStyle = computed(() => ({
  transform: isOpen.value ? 'translateY(-50%) rotate(45deg)' : 'translateY(-50%) rotate(0deg)',
  transformOrigin: 'center'
}))
</script>

<style scoped>
.line {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2.5px;
  border-radius: 9999px;
  background-color: var(--menu-line-color);
  transition: transform 300ms cubic-bezier(0.65, 0, 0.35, 1), opacity 200ms ease-out;
  will-change: transform;
}
</style>