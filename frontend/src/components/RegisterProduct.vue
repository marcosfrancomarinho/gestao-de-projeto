<script setup lang="js">
import { ref } from 'vue';
import AlertError from './AlertError.vue';
import AlertSuccess from './AlertSuccess.vue';
const name = ref('');
const price = ref(0);
const description = ref(null);
const err = ref({ message: '', show: false });
const success = ref({ message: '', show: false });

const handleSubmit = async (event) => {
    event.preventDefault();
    err.value = { message: '', show: false };
    success.value = { message: '', show: false };

    const newProduct = {
        name: name.value,
        price: price.value,
        description: description.value
    };

    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error);
        }
        success.value = { message: 'Produto cadastrado com sucesso!', show: true };
        name.value = '';
        price.value = 0;
        description.value = '';
    } catch (error) {
        err.value = { message: `${error.message}. Tente novamente.`, show: true };
    }
};

</script>

<template>
    <section class="bg-blue-50 min-h-[80vh] flex items-center">
        <AlertError v-if="err.show" :message="err.message" :show="err.show" @hide="() => {err.show = false, console.log('Erro ocultado')}" />
        <AlertSuccess v-if="success.show" :message="success.message" :show="success.show" @hide="() => success.show = false" />
        <div class="max-w-2xl mx-auto w-full px-6 py-12">

            <!-- Card -->
            <div class="bg-white rounded-2xl shadow-lg p-8">

                <h1 class="text-2xl font-bold text-blue-700 mb-6">
                    Cadastrar Produto
                </h1>

                <form @submit="handleSubmit" class="space-y-5">

                    <!-- Nome -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">
                            Nome do Produto
                        </label>
                        <input type="text" name="name" required v-model="name"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ex: Notebook Dell" />
                    </div>

                    <!-- Preço -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">
                            Preço
                        </label>
                        <input type="number" name="price" step="0.01" required v-model="price"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ex: 1999.90" />
                    </div>

                    <!-- Descrição -->
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-1">
                            Descrição
                        </label>
                        <textarea name="description" rows="3" v-model="description"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Detalhes do produto..."></textarea>
                    </div>

                    <!-- Botões -->
                    <div class="flex gap-4 pt-4">
                        <button type="submit"
                            class="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Salvar Produto
                        </button>

                        <router-link to="/produtos"
                            class="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
                            Cancelar
                        </router-link>
                    </div>

                </form>
            </div>

        </div>
    </section>
</template>