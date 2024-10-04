//FUNCIONES PARA VALIDAR NOMBRE DEL PRODUCTO, CANTIDAD Y PRECIO.
function validarNombreProducto(nombre) {
    while (nombre === ""){
    alert("Error!! Por favor, ingrese un producto")
    nombre = prompt("Ingrese el nombre del producto")
}
   return nombre;
}

function validarCantidad(cantidad) {
    while (cantidad === "" || isNaN(cantidad)) {
        alert("Error!! Por favor, solo se puede ingresar valores numéricos.");
        cantidad = parseFloat(prompt("Ingrese la cantidad nuevamente:"));
    }
    return cantidad;
}

function validarPrecio(precio) {
    while (precio === "" || isNaN(precio)) {
        alert("Error!!. Por favor, solo se puede ingresar valores numéricos.");
        precio = parseFloat(prompt("Ingrese el precio del producto nuevamente:"));
    }
    return precio;
}

//FUNCION PARA AGREGAR PRODUCTOS, CALCULA EL PRECIO CON IVA Y CREA EL OBJETO "PRODUCTO" DONDE GUARDA LA INFORMACION Y LO VA PUSHEANDO AL ARRAY "COMPRAS". 
function agregarProducto() {
    let nombre = validarNombreProducto(prompt("Ingrese el nombre del producto:"));
    let cantidad = validarCantidad(parseInt(prompt("Ingrese la cantidad del producto:")));
    let precio = validarPrecio(parseFloat(prompt("Ingrese el precio del producto sin IVA:")));

    let precioConIva = precio + (precio * IVA);

    let producto = {
        nombre: nombre,
        cantidad: cantidad,
        precio: precio.toFixed(2),
        precioConIva: precioConIva.toFixed(2)
    };
    compras.push(producto);
    alert("Producto agregado correctamente a la Lista de compras!");
}

//FUNCION QUE MUESTRA EL NOMBRE DEL PRODUCTO, LA CANTIDAD, PRECIO POR UNIDAD Y TOTAL, Y CREA UN DIV DONDE LO RENDERIZA.
function mostrarCompras() {
    let textoCompras = " ";
    compras.forEach(producto => {
        textoCompras += `<b>NOMBRE PRODUCTO:</b> ${producto.nombre}<br><b>CANTIDAD COMPRADA:</b> ${producto.cantidad}<br><b>PRECIO POR UNIDAD C/IVA:</b> $ ${producto.precioConIva}<br><b>TOTAL IVA INCLUIDO:</b> $ ${(producto.cantidad * producto.precioConIva).toFixed(2)}<br><br>`;
    });
    document.getElementById("resultado").innerHTML = `<div class="card">
    <div class="card-body text-success border border-success bg-success-subtle">
    <h2 class="card-title text-success">Lista de Compras</h2>
    ${textoCompras}
    </div>
  </div>`
}

//FUNCION QUE MUESTRA EL TOTAL DE PRODUCTOS COMPRADOS Y EL TOTAL GASTADO, Y CREA UN DIV DONDE LO RENDERIZA.
function mostrarTotal() {
    let totalProductos = 0;
    let totalGastado = 0;
    
    for (let i = 0; i < compras.length; i++) {
        totalProductos += compras[i].cantidad;
        totalGastado += compras[i].cantidad * compras[i].precioConIva;
    }
    document.getElementById("resultado2").innerHTML = `<div class="card">
    <div class="card-body text-danger border border-danger bg-danger-subtle">
    <h2 class="card-title text-danger">Total Gastos</h2>
    <b>TOTAL DE PRODUCTOS COMPRADOS:</b> ${totalProductos}<br><br><b>TOTAL GASTADO C/IVA:</b> $ ${Math.round(totalGastado).toFixed(2)}
    </div>
  </div>`
}