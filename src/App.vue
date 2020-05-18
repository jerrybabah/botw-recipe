<template>
  <div id="app">
    <h1>botw recipe</h1>
    <div id="nav">
      <router-link to="/foods">Food</router-link> |
      <router-link to="/materials">Material</router-link> |
      <router-link to="/cook">Cook</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  padding: 0 0.5em;
}

#nav a.router-link-exact-active {
  color: #42b983;
  font-size: 1.3em;
}
</style>
