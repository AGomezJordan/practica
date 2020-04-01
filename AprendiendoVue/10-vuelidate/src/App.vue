<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bggreen">
      <router-link class="navbar-brand text-light" :to="{name: 'Inicio'}">VALIDATE</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link text-" :to="{name: 'Inicio'}">INICIO<span class="sr-only">(current)</span></router-link>
          </li>
        </ul>
    </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
.bggreen{
  background: #127f3d;
}
  .txtgreen{
    color: #127f3d;
  }
  p, input{
    color: white;
  }
</style>
