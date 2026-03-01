<template>
    <footer class="bg-blue-700 text-white mt-12">
        <div class="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

            <!-- Marca -->
            <div>
                <h2 class="text-xl font-bold mb-3">MinhaApp</h2>
                <p class="text-blue-100 text-sm leading-relaxed">
                    Sistema simples para gerenciamento de produtos.
                    Rápido, organizado e eficiente.
                </p>
            </div>

            <!-- Navegação -->
            <div>
                <h3 class="font-semibold mb-3">Navegação</h3>
                <ul class="space-y-2 text-sm">
                    <li>
                        <router-link to="/" class="hover:text-blue-200 transition">Início</router-link>
                    </li>
                    <li>
                        <router-link to="/produtos/novo" class="hover:text-blue-200 transition">
                            Cadastrar Produto
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/produtos" class="hover:text-blue-200 transition">
                            Mostrar Produtos
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Contato -->
            <div>
                <h3 class="font-semibold mb-3">Contato</h3>
                <p class="text-sm text-blue-100">suporte@minhaapp.com</p>
                <p class="text-sm text-blue-100">Brasil</p>
            </div>

        </div>

        <!-- Barra inferior -->
        <div class="border-t border-blue-500 text-center text-sm text-blue-100 py-4">
            © {{ new Date().getFullYear() }} Gestão de Produtos — Todos os direitos reservados
        </div>
    </footer>
</template>