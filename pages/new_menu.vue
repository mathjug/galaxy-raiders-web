  <template>
    <div>
      <h1>Galaxy Raiders</h1>
      <div class="button-container">
        <button @click="startGame">Start Game</button>
        <button @click="showLeaderboard">Leaderboard</button>
        <button @click="exit">Exit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startGame() {
        alert('Start Game!');
      },
      showLeaderboard() {
        alert('Show Leaderboard!');
      },
      exit() {
        alert('Exit!');
      }
    }
  };
  </script>
  
  <style>
  html, body {
    background-image: url('./assets/universe.gif');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: "Copperplate", sans-serif;
  }  
  
  h1 {
    font-size: 60px;
    font-weight: bold;
    /* text-decoration: dashed underline overline; */
    color: yellow;
    text-shadow: 2px 2px 4px rgba(50, 42, 42, 0.5);
    text-align: center;
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