//import createApp dari vue
import { createApp } from 'vue'

//import App component
import App from './App.vue'

//import vue3GoogleLogin
import vue3GoogleLogin from 'vue3-google-login'

//create app
const app = createApp(App)

//use vue3GoogleLogin
app.use(vue3GoogleLogin, {
  clientId: '986922587767-ql2n71gvuh90c78cd0pij5akjknfgi35.apps.googleusercontent.com',
  cookiePolicy: 'single_host_origin'

})

app.mount('#app')