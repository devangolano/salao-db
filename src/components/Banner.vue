<template>
    <div id="controls-carousel" class="relative w-full" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-80 overflow-hidden md:h-[780px] ">
            <!-- Carousel items -->
            <div v-for="(item, index) in items" :key="index"
                :class="{ 'hidden': currentItem !== index, 'duration-700 ease-in-out': true }" data-carousel-item>
                <img :src="item.src" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="...">
            </div>
        </div>

        <!-- Slider controls -->
        <button type="button" @click="prevItem"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <!-- Previous arrow SVG -->
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>

        <button type="button" @click="nextItem"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <!-- Next arrow SVG -->
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const items = [
    { src: '/imagem1.jpg' },
    { src: '/imagem2.jpg' },
    { src: '/imagem3.jpg' },
    { src: '/imagem4.jpg' },
    { src: '/imagem5.jpg' },
    { src: '/imagem6.jpg' }
];

const currentItem = ref(0);

const prevItem = () => {
    currentItem.value = (currentItem.value - 1 + items.length) % items.length;
};

const nextItem = () => {
    currentItem.value = (currentItem.value + 1) % items.length;
};

// Auto slide every 5 seconds
let timer;
onMounted(() => {
    timer = setInterval(() => {
        nextItem();
    }, 5000);
});

// Clear timer on component unmount
onUnmounted(() => {
    clearInterval(timer);
});
</script>
