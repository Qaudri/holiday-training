<template>
  <div class="w-full space-y-2">
    <label
      v-if="label"
      :for="textareaId"
      :class="label_class"
      class="text-sm block text-left hanken font-bold"
    >
      {{ label }}
    </label>

    <textarea
      ref="textarea"
      :id="textareaId"
      :value="inputValue"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      :autocomplete="autocomplete || 'off'"
      @input="!disabled && handleInput($event)"
      @focus="!disabled && handleFocus()"
      @blur="!disabled && handleBlur()"
      :class="[{'border-red-600 focus:border-red-600 active:border-red-600' : hasError, 'text-center placeholder-center' : centerText}, extraClass]"
      class="w-full py-4 px-4 border text-sm bg-gray-100 outline-none border-gray-300 ring-0 focus:outline-none focus:border-primary active:border-primary rounded-lg active:text-primary focus:text-primary text-gray-300 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60 resize-y"
      :placeholder="placeholder"
    ></textarea>

    <div v-if="maxlength" class="text-xs text-gray-300 text-right">{{ (inputValue || '').length }}/{{ maxlength }}</div>

    <p v-if="typeof error === 'string' && error" class="text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "FloatLabelTextarea",
  props: {
    extraClass: String,
    label_class: String,
    error: [Boolean, String],
    label: {
      type: String,
      required: true
    },
    placeholder: String,
    inputValue: String,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 4
    },
    // Optional character limit. When set, a small "x/limit" counter is
    // shown under the field so people aren't guessing how much room is left.
    maxlength: {
      type: Number,
      default: null
    },
    autocomplete: String,
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
      textareaId: `textarea-${Math.random().toString(36).substring(2, 11)}`
    }
  },

  computed: {
    hasError() {
      return !!this.error
    }
  },

  methods: {
    handleInput(event) {
      if (this.disabled) return
      this.$emit('update:inputValue', event.target.value)
    },

    handleFocus() {
      if (this.disabled) return
      this.isFocused = true
    },

    handleBlur() {
      if (this.disabled) return
      this.isFocused = false
    },

    focus() {
      if (this.disabled) return
      this.$refs.textarea.focus()
    }
  }
}
</script>