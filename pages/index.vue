<template>
  <div class="menu-background">
      <div class="content">
          <h1>Galaxy Raiders</h1>
          <div class="button-container">
              <button><router-link class="custom-link-button" to="/start_game">Iniciar partida</router-link></button>
              <button><router-link class="custom-link-button" to="/show_leaderboard">Visualizar placar</router-link></button>
              <button @click="exit">Exit</button>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      methods: {
          exit() {
              window.location.href =
              'https://jornal.usp.br/institucional/pela-primeira-vez-uma-universidade-brasileira-esta-entre-as-100-melhores-em-ranking/';
          },
      },
  };
</script>

<style>
  .menu-background {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url('../assets/universe.gif');
      background-repeat: no-repeat;
      background-size: cover;
  }

  .custom-link-button {
    outline: none;
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  .custom-link-button:focus {
    border: 2px solid blue;
  }

  
  .custom-link-button:focus:not(:focus-visible) {
    border: none;
  }

  .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: yellow;
      font-size: 20px;
      font-family: "Copperplate", sans-serif;
  }

  h1 {
      font-size: 60px;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(50, 42, 42, 0.5);
      animation: fade-in 1s ease-in-out;
  }

  @keyframes fade-in {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }

  .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      animation: fade-in 1s ease-in-out;
  }

  .button-container button {
      min-width: 250px;
      min-height: 50px;
      border-radius: 10%;
      font-weight: bold;
      color: whitesmoke;
      background: none;
      border: solid 3px;
      font: inherit;
      padding: 0.75em 2em;
      margin-bottom: 20px;
  }

  .button-container button:hover {
      background-color: rgb(137, 137, 25);
  }

</style>