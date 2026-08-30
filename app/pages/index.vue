<template>
    <Container class="grid lg:grid-cols-2 items-center gap-8 py-16">
        <div class="space-y-4">
            <span class="text-sm inline-flex items-center gap-2 bg-pink/25 p-2 px-4 rounded-full border border-pink text-pink-dark">
                <GraduationCap :size="20" color="#7D2A78" />
                Ages 8-17
            </span>
            <UiTypographyH1>
                NEXTGEN<br></br>
                <span class="heading text-primary">&lt;</span>CODING<span class="heading slash-flip text-primary">\</span><span class="text-primary heading">&gt;</span>
                <br>
                <span class="ribbon-badge heading">BOOTCAMP</span>
            </UiTypographyH1>
            <UiTypographyP>
                Don't just prepare your child for the future. Let them create it.
            </UiTypographyP>
            <div class="grid grid-cols-2 gap-4">
                <div class="p-4 rounded-lg flex items-center gap-4 bg-white border border-neutral-200">
                    <div class="p-2 bg-neutral-100 rounded">
                        <Banknote :size="28" color="#058182" />
                    </div>
                    <div>
                        <span class="text-sm">Price</span>
                        <h6 class="text-secondary text-base font-medium">&#8358;25,000</h6>
                    </div>
                </div>
                <div class="p-4 rounded-lg flex items-center gap-4 bg-white border border-neutral-200">
                    <div class="p-2 bg-neutral-100 rounded">
                        <Calendar :size="28" color="#058182" />
                    </div>
                    <div>
                        <span class="text-sm">Duration</span>
                        <h6 class="text-base font-medium">2 Weeks</h6>
                    </div>
                </div>
                <div class="p-4 rounded-lg flex items-center gap-4 bg-white border border-neutral-200">
                    <div class="p-2 bg-neutral-100 rounded">
                        <Clock5 :size="28" color="#058182" />
                    </div>
                    <div>
                        <span class="text-sm">Schedule</span>
                        <h6 class="text-base font-medium">4 Days/Week</h6>
                    </div>
                </div>
                <div class="p-4 rounded-lg flex items-center gap-4 bg-white border border-neutral-200">
                    <div class="p-2 bg-neutral-100 rounded">
                        <Users :size="28" color="#058182" />
                    </div>
                    <div>
                        <span class="text-sm">Mode</span>
                        <h6 class="text-base font-medium">Physical</h6>
                    </div>
                </div>
            </div>
            <div class="pt-4">
                <button @click="openDialog" class="bg-secondary text-white px-6 py-3 rounded flex items-center gap-1 hover:bg-primary transition gover:gap-2 duration-200 mt-8">
                    SECURE A SLOT
                    <ArrowRight :size="20" class="ml-2" />
                </button>
                <span class="text-sm block mt-2">Limited Slots Available</span>
            </div>

        </div>
        <img src="/images/hero.png" alt="Cartoon image of a kid writing a program"/>
    </Container>

    <Container class="py-16 text-center">
        <UiTypographyH2 class="bg-[url('/images/underline.svg')] bg-no-repeat bg-bottom bg-contain pb-2 inline-block"">
            WHAT THEY'LL LEARN
        </UiTypographyH2>
        <UiTypographyP class="text-center">
            A comprehensive, hands-on curriculum designed to transform curiosity into capability.
        </UiTypographyP>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div class="p-4 rounded-lg space-y-3 bg-white border border-neutral-200 text-left">
                <div class="p-2 bg-neutral-100 rounded w-fit">
                    <Code :size="28" color="#058182" />
                </div>
                <h6 class="text-lg font-medium">Coding Basics</h6>
                <UiTypographyP class="text-neutral-500">
                    Build a solid foundation in logic and programming concepts tailored for young minds.
                </UiTypographyP>
            </div>
            <div class="p-4 rounded-lg space-y-3 bg-white border border-neutral-200 text-left">
                <div class="p-2 bg-neutral-100 rounded w-fit">
                    <Globe :size="28" color="#058182" />
                </div>
                <h6 class="text-lg font-medium">Website Creation</h6>
                <UiTypographyP class="text-neutral-500">
                    Design, build, and launch responsive websites from scratch using modern web technologies.
                </UiTypographyP>
            </div>
            <div class="p-4 rounded-lg space-y-3 bg-white border border-neutral-200 text-left">
                <div class="p-2 bg-neutral-100 rounded w-fit">
                    <Bot :size="28" color="#058182" />
                </div>
                <h6 class="text-lg font-medium">AI for Kids</h6>
                <UiTypographyP class="text-neutral-500">
                   Explore the future with hands-on, accessible Artificial Intelligence projects and concepts.
                </UiTypographyP>
            </div>
            <div class="p-4 rounded-lg space-y-3 bg-white border border-neutral-200 text-left">
                <div class="p-2 bg-neutral-100 rounded w-fit">
                    <Lightbulb :size="28" color="#058182" />
                </div>
                <h6 class="text-lg font-medium">Creative Thinking</h6>
                <UiTypographyP class="text-neutral-500">
                    Develop frameworks to solve complex problems with innovative, out-of-the-box solutions.
                </UiTypographyP>
            </div>
            <div class="p-4 rounded-lg space-y-3 bg-white border border-neutral-200 text-left">
                <div class="p-2 bg-neutral-100 rounded w-fit">
                    <MonitorSmartphone :size="28" color="#058182" />
                </div>
                <h6 class="text-lg font-medium">Digital Skillss</h6>
                <UiTypographyP class="text-neutral-500">
                   Master essential digital tools and literacies required for success in the modern digital age.
                </UiTypographyP>
            </div>
        </div>
    </Container>

    <div class="bg-primary py-5">
        <Container class="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            <div class="flex min-w-0 items-center gap-3 text-white/80">
                <Calendar :size="22" color="white"/>
                <span class="text-sm">Duration: 2 Weeks</span>
            </div>
            <div class="flex min-w-0 items-center gap-3 border-white/25 text-white/80 lg:border-l lg:pl-6">
                <CalendarCheck :size="22" color="white"/>
                <span class="text-sm">Schedule: 4 Days/Week</span>
            </div>
            <div class="flex min-w-0 items-center gap-3 border-white/25 text-white/80 lg:border-l lg:pl-6">
                <MapPin :size="22" color="white"/>
                <span class="text-sm">Mode: Physical</span>
            </div>
            <div class="flex min-w-0 items-center gap-3 border-white/25 text-white/80 lg:border-l lg:pl-6">
                <Users :size="22" color="white"/>
                <span class="text-sm">Ages: 8-17</span>
            </div>
            <div class="flex min-w-0 items-center gap-3 border-white/25 text-white/80 lg:border-l lg:pl-6">
                <Tag :size="22" color="white"/>
                <span class="text-sm">Price: &#8358;25,000</span>
            </div>
        </Container>
    </div>

    <section class="bg-white">
        <Container class="py-16 grid lg:grid-cols-2 gap-6 items-center">
            <Forms />
            <div class="space-y-6">
                <img src="/images/image.webp" class="aspect-[5/3] rounded-2xl object-cover hidden md:block" alt="Image of a young black biy smiling while using a laptop"/>

                <div class="rounded-2xl border border-neutral-200 p-5 flex gap-5">
                    <Headset :size="28" color="#058182" />
                    <div>
                        <h6 class="text-lg font-medium">Need Assistance?</h6>
                        <UiTypographyP class="text-neutral-500">
                            Our enrollment team is ready to help you with the registration process.
                            <br>
                            <span class="text-primary flex items-center gap-2 text-sm mt-4"> 
                                <Phone :size="16" color="#058182" />
                                09036049992</span>
                        </UiTypographyP>
                    </div>
                </div>
            </div>
        </Container>
    </section>


    <dialog ref="enrollmentDialog" class="enrollment-dialog" @click="handleDialogClick">
        <button
            type="button"
            class="absolute right-4 top-4 z-10 text-2xl leading-none text-neutral-500 hover:text-neutral-900"
            aria-label="Close enrollment form"
            @click="closeDialog"
        >
            <X :size="24" color="#058182"/>
        </button>
        <Forms />
    </dialog>
</template>
<script setup>
import { GraduationCap, Banknote, Calendar, Clock5, Users, ArrowRight, Code, Globe, Bot, Lightbulb, MonitorSmartphone, MapPin, CalendarCheck, Tag, Headset, Phone, X } from '@lucide/vue';

const enrollmentDialog = ref(null)
let dialogTimer

const openDialog = () => {
    enrollmentDialog.value?.showModal()
}

const closeDialog = () => {
    enrollmentDialog.value?.close()
}

const handleDialogClick = (event) => {
    if (event.target === event.currentTarget) {
        closeDialog()
    }
}

onMounted(() => {
    window.addEventListener('open-enrollment-dialog', openDialog)
    dialogTimer = window.setTimeout(() => {
        openDialog()
    }, 5000)
})

onBeforeUnmount(() => {
    window.removeEventListener('open-enrollment-dialog', openDialog)
    window.clearTimeout(dialogTimer)
})
</script>
<style>
body {
    background-image:
      linear-gradient(oklch(98.5% 0 none) 1px, transparent 1px),
      linear-gradient(90deg, oklch(98.5% 0 none) 1px, transparent 1px);
    background-size:38px 38px;
}

.slash-flip {
    display: inline-block;
    transform: scaleX(-1);
    transform-origin: center;
}

.ribbon-badge {
    display: inline-block;
    position: relative;
    min-width: 7.5rem;
    padding: 0.55rem 1.5rem 0.7rem;
    background-image: url('/images/ribbon.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    color: white;
    font-size: 2.5rem;
    line-height: 1;
    text-align: center;
    vertical-align: middle;
    transform: translateY(-0.2rem);
}

.enrollment-dialog {
    position: fixed;
    width: min(90vw, 36rem);
    max-height: 90vh;
    padding: 0;
    overflow: auto;
    border: 0;
    background: transparent;
}

.enrollment-dialog::backdrop {
    background: rgb(10 10 10 / 75%);
}
</style>