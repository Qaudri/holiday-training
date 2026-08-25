<template>
  <button
    type="submit"
    class="py-4 px-4 hanken-bold flex w-full text-white font-semibold text-base 2xl:text-lg justify-center duration-500 ease-in-out rounded-md focus:bg-primary " 
    :disabled="loading || disabled" :class="loading ? 'bg-secondary': 'bg-primary-dark hover:bg-primary'">

    <div class="flex items-center justify-center">
      <div v-if="loading"  >
        <div class="justify-center flex">
          <Loader :size="20" class="animate-spin" color-white></Loader>
        </div>
      </div>
      <div v-if="!loading">
        <slot />
      </div>
    </div>
  </button>
</template>

<script>
import { Loader } from '@lucide/vue';
export default {
  components: {Loader},
  name: "LoadingButton",
  props: {
      loading: Boolean,
      disabled: Boolean,
      loadingText: {
          default: "Authenticating",
          type: String
      },
  },
}
</script>

<style>
</style>