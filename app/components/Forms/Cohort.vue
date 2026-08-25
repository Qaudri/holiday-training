<template>
    <form action="" class="bg-white p-20 rounded-3xl shadow-lg grid gap-6">
        <FormInput label="Full Name" placeholder="John Doe" type="text"/>
        <FormInput label="Email" placeholder="john@example.com" type="email"/>
        <FormInput label="Phone Number" placeholder="(123) 456-7890" type="tel"/>
        <div class="space-y-4">
            <FormButton>Secure Your Spot</FormButton>
            <UiTypographyP class="text-gray-500 text-sm">
                By submitting this form, you agree to our 
                <NuxtLink to="/privacy-policy" class="text-primary font-semibold">privacy policy</NuxtLink> and 
                <NuxtLink to="/terms" class="text-primary font-semibold">terms</NuxtLink>.
            </UiTypographyP>
        </div>
    </form>
</template>