<template>
  <header class="bg-blue-600 text-white shadow-md">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo / Nome -->
      <h1 class="text-xl font-bold tracking-wide">
        Gestão de Produtos
      </h1>

      <!-- Links -->
      <ul class="flex gap-6 font-medium">
        <li>
          <router-link to="/" class="hover:text-blue-200 transition">
            Início
          </router-link>
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

    </nav>
  </header>
</template>