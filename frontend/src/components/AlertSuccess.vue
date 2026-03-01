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
});

</script>
<template>
    <div class="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-sm fixed top-4 right-4 z-50"
        v-if="props.show">
        <svg class="w-5 h-5 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd" />
        </svg>

        <div class="flex-1 text-sm font-medium">
            {{ props.message }}
        </div>

        <button @click="emit('hide')" class="text-green-600 hover:text-green-800">
            ✕
        </button>
    </div>
</template>