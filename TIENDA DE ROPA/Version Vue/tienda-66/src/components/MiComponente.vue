<template>
    <div class="container">
        <h1>Bienvenido {{ cliente.nombre }} </h1>
    </div>
</template>
<script>
export default {
    data () {
       return {
           cliente: { nombre: 'Juan', apellido: 'Castañeda' },
           cantidad: 0
       }
    }
}
</script>