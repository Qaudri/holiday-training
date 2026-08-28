<template>
    <div class="rounded-3xl p-8 lg:p-10 bg-white border border-neutral-200">
        <UiTypographyH5 class="text-2xl font-medium">Reserve Your Child's Slot</UiTypographyH5>
        <UiTypographyP class="text-neutral-500">Reserving your slot today ensures priority placement.</UiTypographyP>
        <form action="" class="mt-6 grid grid-cols-2 gap-6" @submit.prevent="submitReservation">
            <FormInput label="Parent/Guardian Name" placeholder="John Doe" type="text" required/>
            <FormInput label="Phone Number" placeholder="123-456-7890" type="tel" required/>
            <FormInput label="Child's Name" placeholder="John Doe" type="text" required/>
            <FormInput label="Child's Age" placeholder="8-17" type="number" :min="8" :max="17" required/>
            <FormInput label="Email Address" placeholder="John Doe" type="email" class="col-span-2" required/>
            <FormButton :loading="loading" class="col-span-2">Enroll Now</FormButton>
        </form>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const router = useRouter()

const submitReservation = () => {
    loading.value=true
    setTimeout(() => {
        loading.value=false
        router.push('/thank-you')
    }, 2000)
}
</script>