let compras = [];
const IVA = 0.22;

//FOR QUE EN CADA ITERACION LLAMA A LA FUNCION AGREGARPRODUCTO, EN ESTE CASO HACE 6 ITERACIONES
for (let i = 0; i < 6; i++) { 
    agregarProducto();
}

mostrarCompras();
mostrarTotal();
