<!-- ProjectCard.vue -->
<template>
    <article
        role="button"
        tabindex="0"
        class="group cursor-pointer"
        @click="$emit('open', project)"
        @keydown.enter="$emit('open', project)"
        @keydown.space.prevent="$emit('open', project)"
    >
        <div class="w-full overflow-hidden bg-gray-100 rounded-xl" :class="aspect">
            <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            >
            <div v-else class="w-full h-full bg-gray-200"></div>
        </div>

        <div class="flex items-center justify-between gap-2 mt-4">
            <div>
                <h4 class="hanken text-3xl font-bold">{{ project.title }}</h4>
                <UiTypographyP class="text-gray-500 text-sm">{{ project.description }}</UiTypographyP>
            </div>
            <span class="text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                <ArrowUpRight :size="36" />
            </span>
        </div>
    </article>
</template>

<script>
import { ArrowUpRight } from '@lucide/vue';

export default {
    props: {
        project: { type: Object, required: true },
        aspect: { type: String, default: 'aspect-[4/3]' }
    },
    components: { ArrowUpRight },
    emits: ['open']
}
</script>