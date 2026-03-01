<script setup lang="js">
const props = defineProps({
    name: String,
    price: Number,
    description: String
});
</script>

<template>
    <tr class="hover:bg-blue-50 transition">
        <td class="px-6 py-4 font-medium text-gray-800">
            {{ props.name }}
        </td>
        <td class="px-6 py-4 text-gray-600">
            {{ props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
        </td>
        <td class="px-6 py-4 text-gray-600"> 
            {{ props.description }}
        </td>
        <td class="px-6 py-4 flex justify-center gap-3">
            <button class="text-blue-600 font-semibold hover:underline">
                Editar
            </button>
            <button class="text-red-500 font-semibold hover:underline">
                Excluir
            </button>
        </td>
    </tr>
</template>