import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import './assets/css/app.css'

const firebaseConfig = {
  apiKey: "AIzaSyD3ynEqEOFH1snFyb0NHipPQcKXa4N4efo",
  authDomain: "project-3902b.firebaseapp.com",
  projectId: "project-3902b",
  storageBucket: "project-3902b.appspot.com",
  messagingSenderId: "270261097344",
  appId: "1:270261097344:web:4182f5f5ba73bbcce8e765",
  measurementId: "G-3813Y3CHEW"
};


firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
