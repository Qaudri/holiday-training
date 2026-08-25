<template>
    <form action="" class="bg-white rounded-3xl p-8 lg:p-10 grid grid-cols-2 gap-6">
        <FormInput label="Full Name" placeholder="John Doe" type="text"/>
        <FormInput label="Email" placeholder="john@example.com" type="email"/>
        <FormSelect
          v-model:selected-option="service"
          label="How can we help?"
          placeholder="Select a service"
          :options="serviceOptions"
          class="col-span-2"
        />
        <FormTextarea label="Your Message" placeholder="Tell us about your project" class="col-span-2" :rows="6" />
        <FormButton class="col-span-2">Send Your Message</FormButton>
    </form>
</template>
<script setup lang="ts">
const service = ref<string | undefined>(undefined)
const serviceOptions = ['Branding & Design', 'Web & Mobile', 'SEO & Marketing']
</script>