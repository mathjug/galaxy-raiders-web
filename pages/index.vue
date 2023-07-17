<template>
  <div>
    <!-- Condicionalmente renderizar o botão de início -->
    <div v-if="!gameStarted">
      <button @click="startGame">INICIAR</button>
    </div>

    <!-- O componente de jogo (start_game.vue) será carregado aqui -->
    <div v-if="gameStarted">
      <StartGame />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StartGame from './start_game.vue'; // Importe o componente start_game.vue

const gameStarted = ref(false);

// Função para iniciar o jogo
async function startGame() {
  if (!gameStarted.value) {
    gameStarted.value = true;
    await loadStartGame();
  }
}

// Função para carregar o componente StartGame (start_game.vue)
async function loadStartGame() {
  // Importa o módulo dinamicamente e espera seu carregamento
  const module = await import('./start_game.vue');
  // Define o componente StartGame no objeto de configuração
  // do Vue para renderizá-lo na tela
  const { default: StartGameComponent } = module;
  app.component('StartGame', StartGameComponent);
}
</script>

<style>
/* Estilos opcionais para o menu */
button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
