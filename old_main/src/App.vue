<template>
  <the-header></the-header>
  <div class="view">
    <router-view />
  </div>
  <!--  v-slot="slotProps">
     <transition name="route" mode="out-in">
      <component :is="slotProps.Component" />
    </transition> -->
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'


export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    if (localStorage.getItem("token")) {
      this.$store.commit('setAuth', true);
      this.$store.dispatch('autoLogin');
    }
  },


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&amp;display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cookie&family=Montserrat&display=swap');

:root {
  --left-login: #ce3cba;
  --white: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

/*.view {
  padding-top: 11vh; 
}
*/
button,
i,
a {
  cursor: pointer;
}



.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 7vh;
}

.flex-box {
  display: flex;
  justify-content: space-between;
}


.sel {
  color: red;
}

.hidden {
  display: none;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-in-out;
}

.route-leave-active {
  transition: all 0.3s ease-in-out;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
