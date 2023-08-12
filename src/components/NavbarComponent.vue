<template>
    <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between item-center">
        <div class="flex item-center">
            <span class="text-green-500 text-xl mr-1">
                <!-- <i class="bi bi-messenger"></i>
                 -->
                 <img src="../assets/logo.png" class="vue-logo-icon" alt="">
            </span>
            <h1 class="text-xl mt-2">Vue js Developer</h1>
        </div>
        <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl"> 
            <li :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></li>
        </span>
        <ul class="md:flex md:items-center md:px-0 px-6 md:pb-0  pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']">
            <li v-for="(item, index) in navBarItems" :key="index" class="md:mx-4 md:my-0 my-6">
                <a :href="item.link" class="text-xl hover:text-green-500">{{ item.name }}</a>
            </li>
            <Button>Get Started</Button>
        </ul>
    </div>
</template>
  
  <script>
  import Button from './Button.vue'
  export default {
    name: 'NavbarComponent',
    components: {
        Button
    },
    data() {
        return {
            open: false,
            navBarItems: [
                { name: 'Home', link: '#'},
                { name: 'Services', link: '#'},
                { name: 'About', link: '#'},
                { name: 'Blog', link: '#'},
                { name: 'Contact', link: '#'}
            ]
        }
    },
    methods: {
        menuOpen() {
            this.open = !this.open
        }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #35495e;
    color: #fff;
  }
  .navbar-brand {
    margin-left: 20px;
  }
  .navbar-item {
    padding: 10px 15px;
    color: inherit;
    text-decoration: none;
  }
  .vue-logo-icon {
    width: 48px;
    height: 48px;
  }
  </style>
  