/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue'
import PostComponent from './components/PostComponent.vue'

const app = createApp({});

app.component('post-component', PostComponent);

app.mount('#app');
