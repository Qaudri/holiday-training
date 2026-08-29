<template>
    <div class="rounded-3xl p-8 lg:p-10 bg-white border border-neutral-200">
        <UiTypographyH5 class="text-2xl font-medium">Reserve Your Child's Slot</UiTypographyH5>
        <UiTypographyP class="text-neutral-500">Reserving your slot today ensures priority placement.</UiTypographyP>
        <form action="" class="mt-6 grid grid-cols-2 gap-6" @submit.prevent="submitReservation">
            <FormInput v-model:inputValue="parentName" label="Parent/Guardian Name" placeholder="John Doe" type="text" required/>
            <FormInput v-model:inputValue="parentPhone" label="Phone Number" placeholder="123-456-7890" type="tel" required/>
            <FormInput v-model:inputValue="childName" label="Child's Name" placeholder="John Doe" type="text" required/>
            <FormInput v-model:inputValue="childAge" label="Child's Age" placeholder="8-17" type="number" :min="8" :max="17" required/>
            <FormInput v-model:inputValue="parentEmail" label="Email Address" placeholder="john@example.com" type="email" class="col-span-2" required/>
            <FormButton :loading="loading" class="col-span-2">Enroll Now</FormButton>
        </form>
    </div>

</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const router = useRouter()

const parentName = ref('')
const parentPhone = ref('')
const childName = ref('')
const childAge = ref('')
const parentEmail = ref('')

const submitReservation = () => {
    loading.value = true
    
    // Format the enrollment details as a WhatsApp message
    const message = `*New Enrollment Request*
    
Parent/Guardian: ${parentName.value}
Phone: ${parentPhone.value}
Child's Name: ${childName.value}
Child's Age: ${childAge.value}
Email: ${parentEmail.value}

Amount: ₦25,000`

    // Encode message for URL and open WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/2349036049992?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    
    // Redirect to thank-you page after a short delay
    setTimeout(() => {
        loading.value = false
        router.push('/thank-you')
    }, 1500)
}
</script>