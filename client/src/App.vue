<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<style>
.fade-enter {
  transition: all 0.5s ease-out;
  opacity: 0;
}
​ .fade-enter-to {
  transition-delay: 0.5s;
}
​ .fade-leave-to {
  transition: all 0.5s ease-in;
  transform: rotate(200deg) scale(2);
  opacity: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
