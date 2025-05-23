// ... (código JavaScript para la barra lateral responsiva) ...

// Datos de ejemplo de productos (reemplaza con tus propios datos)
const productos = [
    { nombre: "Lechuga", precio: 1.50, imagen: "https://alberdisa.vteximg.com.br/arquivos/ids/177093-300-300/8613.png?v=638421349723600000" },
    { nombre: "Tomate", precio: 2.00, imagen: " https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Tomate-Cereja-6[1]-300x300.jpg" },
    { nombre: "Cebolla", precio: 1.00, imagen: "https://tiendasecologicastenerife.es/wp-content/uploads/2023/06/Cebolla-Eco-300x300.jpg" },
    { nombre: "Zanaoria ", precio: 1.50, imagen: " https://plazavea.vteximg.com.br/arquivos/ids/226526-300-300/120930.jpg?v=636977898066530000" },
    { nombre: "Brocoli", precio: 2.00, imagen: "https://www.hoyverdurascongeladas.com/wp-content/uploads/2018/06/brocoli-ampl.jpg" },
    { nombre: "Espinaca", precio: 1.00, imagen: "https://cardamom-bazarorganico.com.ar/wp-content/uploads/2023/03/acelga-300x300.jpg" },
    { nombre: "Camote", precio: 2.00, imagen: " https://plazavea.vteximg.com.br/arquivos/ids/226523-300-300/65107.jpg?v=636977898045430000" },
    { nombre: "Pimenton", precio: 1.00, imagen: "https://www.ventadefrutasyverduras.com.mx/wp-content/uploads/2019/11/Chile-Pimiento-MorrC3B3n-Naranja-distribuidores-de-chiles-en-el-Estado-de-MC3A9xico-300x300.jpeg" },
     { nombre: "Pimenton", precio: 1.00, imagen: "https://daghidelivery.com/cdn/shop/products/REPOLLO_300x300.jpg?v=1642029393" },
    // Agrega más productos aquí...

];

let carrito = {};

function mostrarProductos() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; // Limpiar el grid antes de mostrar los productos

    productos.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('product-item');
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="price">$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Añadir</button>
        `;
        grid.appendChild(item);
    });
}

function agregarAlCarrito(nombre, precio) {
    if (!carrito[nombre]) {
        carrito[nombre] = 0;
    }
    carrito[nombre]++;
    actualizarCarrito();
}


function actualizarCarrito() {
    let total = 0;
    let cantidad = 0;
    for (const producto in carrito) {
        total += carrito[producto] * productos.find(p => p.nombre === producto).precio;
        cantidad += carrito[producto];
    }
    document.getElementById('cart-count').textContent = cantidad;
    document.getElementById('cart-total').textContent = total.toFixed(2);

    function mostrarProductos(gridId, productosSection) { // Función modificada
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';

    productosSection.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('product-item');
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="price">$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Añadir</button>
        `;
        grid.appendChild(item);
    });
}

// Filtrar productos para verduras y frutas
const verduras = productos.filter(p => p.nombre !== "Manzana" && p.nombre !== "Plátano" && p.nombre !== "Naranja");
const frutas = productos.filter(p => p.nombre === "Manzana" || p.nombre === "Plátano" || p.nombre === "Naranja");

mostrarProductos('product-grid-verduras', verduras);
mostrarProductos('product-grid-frutas', frutas);
}

mostrarProductos();

// ... (código JavaScript para la navegación entre secciones) ...

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("product-grid-container").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("product-grid-container").style.marginLeft = "0";
}

//frutas