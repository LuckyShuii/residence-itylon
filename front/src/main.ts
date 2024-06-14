import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import ToastService from 'primevue/toastservice';
import { createPinia } from 'pinia';
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'

const pinia = createPinia()
const app = createApp(App);

app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Menu', Menu);

app.use(pinia)
app.use(PrimeVue);
app.use(ToastService);
app.use(router)

app.mount('#app')
