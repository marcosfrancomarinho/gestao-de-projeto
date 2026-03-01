<script setup lang="ts">
import ProductItem from './ProductItem.vue';
import { ref, watch } from 'vue';

const products = ref([]);

const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Erro ao buscar produtos');
        }
        return data;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
};

watch(products, async () => {
    products.value = await fetchProducts();
}, { immediate: true });
</script>

<template>
    <section class="bg-blue-50 min-h-[80vh] py-12">
        <div class="max-w-6xl mx-auto px-6">

            <!-- Cabeçalho -->
            <div class="flex items-center justify-between mb-8">
                <h1 class="text-3xl font-bold text-blue-700">
                    Produtos Cadastrados
                </h1>

                <router-link to="/produtos/novo"
                    class="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    + Novo Produto
                </router-link>
            </div>

            <!-- Tabela -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table class="w-full text-left">

                    <thead class="bg-blue-600 text-white">
                        <tr>
                            <th class="px-6 py-3 font-semibold">Nome</th>
                            <th class="px-6 py-3 font-semibold">Preço</th>
                            <th class="px-6 py-3 font-semibold">Descrição</th>
                            <th class="px-6 py-3 font-semibold text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y">

                        <!-- Produto -->
                        <ProductItem v-for="product in products" :key="product.id" :name="product.name"
                            :price="product.price" :description="product.description" />
                    </tbody>

                </table>
            </div>

        </div>
    </section>
</template>