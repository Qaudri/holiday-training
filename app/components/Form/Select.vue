<template>
  <div class="w-full space-y-2">
    <label
      v-if="label"
      :id="`${selectId}-label`"
      :for="selectId"
      :class="label_class"
      class="text-sm block text-left hanken font-bold"
    >
      {{ label }}
    </label>

    <div class="relative">
      <!-- Custom Select Trigger -->
      <div
        ref="trigger"
        :id="selectId"
        :tabindex="disabled ? -1 : 0"
        @click="!disabled && toggleDropdown()"
        @keydown="!disabled && handleKeydown($event)"
        @focus="!disabled && handleFocus()"
        @blur="!disabled && handleBlur($event)"
        :class="[{'border-red-600 focus:border-red-600 active:border-red-600' : hasError, 'text-center placeholder-center' : centerText, 'cursor-not-allowed opacity-60' : disabled, 'cursor-pointer' : !disabled}, extraClass]"
        class="w-full py-4 px-4 pr-10 border text-sm bg-gray-100 outline-none border-gray-300 ring-0 focus:outline-none focus:border-primary active:border-primary rounded-lg active:text-primary focus:text-primary text-gray-300 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out"
        role="combobox"
        :aria-expanded="isOpen"
        :aria-haspopup="true"
        :aria-labelledby="label ? `${selectId}-label` : undefined"
        :aria-disabled="disabled"
      >
        <span v-if="hasValue" class="block truncate">{{ getSelectedDisplayText() }}</span>
        <span v-else class="block truncate">{{ placeholder }}</span>
      </div>

      <!-- Dropdown icon: overridable via the #icon slot, falls back to a chevron -->
      <div class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <ChevronDown :class="{ 'rotate-180': isOpen && !disabled }" style="transition: transform 200ms ease-out;" class="w-4 h-4 text-primary" />
      </div>

      <!-- Custom Dropdown -->
      <div
        v-if="isOpen"
        ref="dropdown"
        class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto"
        role="listbox"
        :aria-labelledby="label ? `${selectId}-label` : undefined"
      >
        <div
          v-for="(option, index) in options"
          :ref="el => setOptionRef(el, index)"
          :key="getOptionValue(option)"
          @mousedown.prevent="selectOption(option)"
          @mouseenter="highlightedIndex = index"
          :class="optionClasses(option, index)"
          class="px-4 py-3 text-sm cursor-pointer transition-colors duration-150"
          role="option"
          :aria-selected="isSelected(option)"
        >
          {{ getDisplayText(option) }}
        </div>

        <!-- No options message -->
        <div v-if="options.length === 0" class="px-4 py-3 text-sm text-gray-400">
          No options available
        </div>
      </div>

      <!-- Backdrop to close dropdown -->
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40"
        @click="closeDropdown"
      ></div>
    </div>

    <p v-if="typeof error === 'string' && error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<script>
import { ChevronDown } from '@lucide/vue';
/**
 * FormSelect Component
 *
 * Supports two option formats:
 * 1. Simple strings/numbers: ['Option 1', 'Option 2', 'Option 3']
 * 2. Objects with separate display text and values:
 *    [
 *      { label: 'Display Text', value: 'actual_value' },
 *      { text: 'Another Display', value: 123 },
 *      { name: 'Category Name', value: 'category_id' }
 *    ]
 *
 * Object properties priority: label > text > name > value
 */
export default {
  components: { ChevronDown },
  name: "FormSelect",
  props: {
    extraClass: String,
    label_class: String,
    error: [Boolean, String],
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    selectedOption: [String, Number],
    disabled: Boolean,
    options: {
      type: Array,
      default: () => []
    },
    centerText: {
      default: false,
      type: Boolean
    },
    fluid: {
      default: true,
      type: Boolean
    }
  },

  data() {
    return {
      isFocused: false,
      isOpen: false,
      highlightedIndex: -1,
      selectId: `select-${Math.random().toString(36).substring(2, 11)}`,
      optionRefs: []
    }
  },

  computed: {
    hasValue() {
      return this.selectedOption !== null && this.selectedOption !== undefined && this.getSelectedDisplayText() !== '';
    },

    hasError() {
      return !!this.error
    }
  },

  methods: {
    setOptionRef(el, index) {
      this.optionRefs[index] = el
    },

    toggleDropdown() {
      if (this.disabled) return
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.highlightedIndex = this.findSelectedIndex()
        this.$nextTick(() => this.scrollHighlightedIntoView())
      }
    },

    closeDropdown() {
      this.isOpen = false
      this.highlightedIndex = -1
    },

    selectOption(option) {
      if (this.disabled) return
      const value = this.getOptionValue(option)
      this.$emit('update:selectedOption', value)
      this.closeDropdown()
      this.$refs.trigger.focus()
    },

    handleFocus() {
      if (this.disabled) return
      this.isFocused = true
    },

    handleBlur(event) {
      if (this.disabled) return
      // Only blur if not clicking on dropdown
      if (!this.$refs.dropdown?.contains(event.relatedTarget)) {
        this.isFocused = false
        this.closeDropdown()
      }
    },

    handleKeydown(event) {
      if (this.disabled) return

      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault()
          if (this.isOpen && this.highlightedIndex >= 0) {
            this.selectOption(this.options[this.highlightedIndex])
          } else {
            this.toggleDropdown()
          }
          break
        case 'Escape':
          this.closeDropdown()
          break
        case 'ArrowDown':
          event.preventDefault()
          if (!this.isOpen) {
            this.toggleDropdown()
          } else {
            this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.options.length - 1)
            this.scrollHighlightedIntoView()
          }
          break
        case 'ArrowUp':
          event.preventDefault()
          if (this.isOpen) {
            this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0)
            this.scrollHighlightedIntoView()
          }
          break
        case 'Home':
          if (this.isOpen) {
            event.preventDefault()
            this.highlightedIndex = 0
            this.scrollHighlightedIntoView()
          }
          break
        case 'End':
          if (this.isOpen) {
            event.preventDefault()
            this.highlightedIndex = this.options.length - 1
            this.scrollHighlightedIntoView()
          }
          break
      }
    },

    scrollHighlightedIntoView() {
      const el = this.optionRefs[this.highlightedIndex]
      if (el && el.scrollIntoView) {
        el.scrollIntoView({ block: 'nearest' })
      }
    },

    getDisplayText(option) {
      if (typeof option === 'object') {
        // Priority order: label > text > name > value
        return option.label || option.text || option.name || option.value || ''
      }
      return option || ''
    },

    getOptionValue(option) {
      if (typeof option === 'object') {
        return option.value !== undefined ? option.value : option
      }
      return option
    },

    getSelectedDisplayText() {
      // Find the option that matches the selected value
      const selectedOptionObj = this.options.find(option => {
        const value = this.getOptionValue(option)
        return value === this.selectedOption
      })

      if (selectedOptionObj) {
        return this.getDisplayText(selectedOptionObj)
      }

      // Fallback to the selected value itself if no matching option found
      return this.selectedOption
    },

    isSelected(option) {
      const value = this.getOptionValue(option)
      return value === this.selectedOption
    },

    findSelectedIndex() {
      return this.options.findIndex(option => {
        const value = this.getOptionValue(option)
        return value === this.selectedOption
      })
    },

    optionClasses(option, index) {
      return [
        // Hover state
        'hover:bg-gray-100',

        // Selected state
        this.isSelected(option) ? 'bg-primary bg-opacity-10 text-primary' : 'text-gray-700',

        // Highlighted state (keyboard navigation)
        index === this.highlightedIndex ? 'bg-gray-100' : ''
      ].filter(Boolean).join(' ')
    },

    focus() {
      this.$refs.trigger.focus()
    },

    handleOutsideClick(event) {
      if (!this.$el.contains(event.target)) {
        this.closeDropdown()
      }
    }
  },

  mounted() {
    // Close dropdown when clicking outside. Bound as an instance property so
    // it can be removed again in beforeUnmount — the previous version added
    // this listener on every mount and never cleaned it up, which leaked a
    // listener (and kept the component instance alive) every time the
    // select was re-mounted, e.g. inside a v-if/router view.
    document.addEventListener('click', this.handleOutsideClick)
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  }
}
</script>