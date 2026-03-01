<template>
    <section class="bg-blue-50 min-h-[70vh] flex items-center">
        <div class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

            <!-- Texto -->
            <div>
                <h1 class="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
                    Gerencie seus produtos de forma simples
                </h1>

                <p class="mt-4 text-gray-600 text-lg">
                    Cadastre, visualize e organize seus produtos em um sistema rápido e intuitivo.
                </p>

                <div class="mt-8 flex gap-4">
                    <router-link to="/produtos/novo"
                        class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Cadastrar Produto
                    </router-link>

                    <router-link to="/produtos"
                        class="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
                        Ver Produtos
                    </router-link>
                </div>
            </div>

            <!-- Card destaque -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
                <h2 class="text-xl font-semibold text-blue-700 mb-4">
                    Controle total
                </h2>

                <ul class="space-y-3 text-gray-600">
                    <li>✔ Cadastro rápido de produtos</li>
                    <li>✔ Visualização organizada</li>
                    <li>✔ Estrutura simples e eficiente</li>
                    <li>✔ Interface limpa e moderna</li>
                </ul>
            </div>

        </div>
    </section>
</template>