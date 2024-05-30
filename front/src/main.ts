import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import PrimeVue from 'primevue/config';

const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true
});
app.use(router)

app.mount('#app')
