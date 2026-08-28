<template>
    <div class="w-full space-y-2">
      <label
      :for="inputId"
      :class="label_class"
      class="text-sm block text-left hanken font-bold">
        {{label}}
      </label>
      <input
      :id="inputId"
      @input="$emit('update:inputValue', $event.target.value)"
      @focus="focus()"
      :class="{'border-red-600 focus:border-red-600 active:border-red-600' : error, 'text-center placeholder-center' : centerText }"
      class="w-full py-4 px-4 border text-sm bg-gray-100 outline-none border-gray-300 ring-0 focus:outline-none focus:border-primary active:border-primary rounded-lg active:text-primary focus:text-primary text-gray-400 active:border-opacity-100 focus:border-opacity-100 duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60"
      autocomplete="off"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="inputValue"
      :required="required"
      :min="min"
      :max="max"
      ref="input">
    </div>

</template>

<script>
  export default {
    name:"Input",
    props: {
      label_class: String,
      error: Boolean,
      label: String,
      inputValue: String,
      type: String,
      disabled: Boolean,
      required: Boolean,
      placeholder:String,
      centerText: {
        default: false,
        type: Boolean
      },
      min: Number,
      max: Number
    },

    data() {
      return {
        // Unique per-instance id so the <label for="..."> actually points at
        // this input instead of nothing. Previously the label and input had
        // no relationship at all, so clicking the label didn't focus the
        // field and screen readers couldn't announce it correctly.
        inputId: `input-${Math.random().toString(36).substring(2, 11)}`
      }
    },

    methods: {
      focus() {
        this.$refs.input.focus()
      },
    }
  }
</script>