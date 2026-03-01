<script setup lang="js">
import { watchEffect } from 'vue';

const props = defineProps({
    message: String,
    show: Boolean
});
const emit = defineEmits(['hide']);

watchEffect(() => {
    if (props.show) {
         setTimeout(() => {
            emit('hide');
        }, 3000);
    }
})
</script>

<template>
    <div
        class="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg shadow-sm fixed top-4 right-4 z-50">
        <svg class="w-5 h-5 mt-0.5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
                d="M18 10A8 8 0 11.002 10 8 8 0 0118 10zM9 5a1 1 0 112 0v5a1 1 0 11-2 0V5zm0 8a1 1 0 112 0 1 1 0 01-2 0z"
                clip-rule="evenodd" />
        </svg>

        <div class="flex-1 text-sm font-medium">
            {{ props.message }}
        </div>

        <button @click="emit('hide')" class="text-red-600 hover:text-red-800">
            ✕
        </button>
    </div>
</template>