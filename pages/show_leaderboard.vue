<template>
    <div id="leaderboard-page">
        <h1>Leaderboard</h1>
        <div v-for="(entry, index) in leaderboardData" :key="index">
            <h2> {{index + 1}}º Lugar </h2>
            <p><b>Pontuação Final:</b> {{ entry['Pontuação Final'] }}</p>
            <p><b>Quantidade de Asteroides:</b> {{ entry['Quantidade de Asteroides'] }}</p>
            <p><b>Data:</b> {{ entry.Data }}</p>
            <p><b>Hora:</b> {{ entry.Hora }}</p>
            <hr />
        </div>
        <p></p>
        <button @click="$router.push('/')">Back to Menu</button>
    </div>
</template>
  
<script>
    import leaderboardData from '../Leaderboard.json';

    export default {
        data() {
            return {
                leaderboardData: [],
            };
        },
        created() {
            this.loadLeaderboardData();
        },
        methods: {
            loadLeaderboardData() {
                this.leaderboardData = leaderboardData.Jogos;
            },
        },
    };
</script>

<style>
    button {
        min-width: 250px;
        min-height: 50px;
        border-radius: 10%;
        font-weight: bold;
        border: solid 3px;
        font: inherit;
        padding: 0.75em 2em;
        margin-top: 10px;
    }

    button:hover {
        background-color: rgb(137, 137, 25);
    }

    #leaderboard-page {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-image: url('../assets/space.png');
        animation: fade-in 1s ease-in-out;
        color: white;
    }
    
</style>