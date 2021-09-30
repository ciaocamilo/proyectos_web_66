<template>
    <div id="principal">
        <div class="container">
            <h1 class="titulos">Tienda 66</h1>
            <h3>Mi tienda de Ropa</h3>
        </div>
        <img src="@/assets/banner.jpg" style="width: 100%;height: auto;padding-top: 0px;padding-bottom: 2px;">
        <table id="navBar">
            <tr>
                <th><a href="index.html">Inicio</a></th>
                <th><a href="productos.html">Productos</a></th>
                <th><a href="clientes.html">Clientes</a></th>
                <th><a href="carrito.html">Carrito de Compras</a></th>
            </tr>
        </table>
        <br>
        <div class="container" id="parrafo">
            <p>
                Bienvenidos a la <b>tienda 66</b>, su mejor tienda en linea
            </p>
        </div>
        <div id="video" class="container">
            <iframe class="tamano-video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/ahO47mXCzuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
    .titulos {
        font-family: verdana;
        font-size: 60px;
    }
</style>