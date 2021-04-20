<template>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <title>Jon.Li Design</title>
    <link rel="stylesheet" href="css\home.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>

  <body>
    <div id="building">
      <div class="font">
        <!-- <button onclick="routerWay"> -->
        <a href="../Login">
          <p>TO SURPASS</p>
        </a>
        <!-- </button> -->
      </div>
      <div class="left">
      </div>
    </div>
  </body>

  </html>
</template>
<script>
export default {
  name: 'idnex',
  data() {

  },
  methods: {
  }
};
</script>
<style  scoped>
body {
  /* background-image: url(images\img_index.jpg);
  background-repeat: no-repeat;
  background-size: cover; */
  /* 文字不可选中 start */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* end */
}
#building {
  background: url("images\img_index.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.font > a {
  font-size: 100px;
  text-shadow: 5px 5px 5px black, 0px 0px 2px black;
  color: white;
}
</style>