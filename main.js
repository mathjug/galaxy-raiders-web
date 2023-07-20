import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import MenuPage from './pages/index.vue';
import GamePage from './pages/start_game.vue';
import LeaderboardPage from './pages/show_leaderboard.vue';


const routes = [
  { path: '/', component: MenuPage },
  { path: '/game', component: GamePage },
  { path: '/leaderboard', component: LeaderboardPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
