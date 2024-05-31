import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/aura-light-green/theme.css'

const app = createApp(App);

app.component('Button', Button);
app.component('Dropdown', Dropdown);

app.use(PrimeVue);
app.use(ToastService);
app.use(router)

app.mount('#app')
