<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/drop.png">
      </div>
    </router-link>
    <div class="title">
      <h1>Gas Tracker</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/manage">Manage</router-link>
    <a style="padding-left: 5px;" href = "#"><i>github</i></a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

.page-content{
  display: flex;
  justify-content: center;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 10px 100px;
  background-color: #b1ff08;
  color: #ff4400;
  align-items: center;
}

.title h1 {
  font-size: 40px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}

.logo img{
  width: 70px;
  margin-right: 20px;
}

table{
  width: 100%;
  border-collapse: collapse;
}

td{
    border: 1px solid black;
    padding: 6px;
}

td,th{
  height: 15px;
}

.button-cell{
  border: none;
}


</style>
