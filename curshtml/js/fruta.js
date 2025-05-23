const productos = [
  { nombre: "Mango", precio: 1.75, imagen: "https://exoticfruitbox.com/wp-content/uploads/2015/10/mango-300x300.jpg" },
  { nombre: "Pera", precio: 0.50, imagen: "https://plazavea.vteximg.com.br/arquivos/ids/175198-300-300/20083819.jpg?v=635808869866470000" },
  { nombre: "Guayaba", precio: 0.75, imagen: "https://exoticfruitbox.com/wp-content/uploads/2015/10/carambola-300x300.jpg" },
  { nombre: "Mandarina", precio: 1.75, imagen: "https://lashortalizasdelvalle.es/wp-content/uploads/2023/04/mandarina1-1-300x300.jpg" },
  { nombre: "Arandano", precio: 0.50, imagen: "https://frutasmaripili.com/wp-content/uploads/2019/02/arandanos-frutas-300x300.jpg" },
  { nombre: "Manzana", precio: 0.75, imagen: "https://delivemas.fac.pe/web/image/product.template/8115/image" },
   { nombre: "Papaya", precio: 0.50, imagen: "https://www.frutasmiguel.es/wp-content/uploads/2020/07/11_FRUTA-DE-LA-PASION-300x300.jpg" },
  { nombre: "Fresa", precio: 0.75, imagen: "https://exoticfruitbox.com/wp-content/uploads/2015/10/guayaba-300x300.jpg" },
   { nombre: "Higo", precio: 0.50, imagen: "https://cmrgroup.es/wp-content/uploads/2021/12/higo-300x300.jpg" },
  { nombre: "Mora", precio: 0.75, imagen: "https://cmrgroup.es/wp-content/uploads/2021/12/mora-300x300.jpg" },
];

// Objeto para almacenar los productos en el carrito
let carrito = {};

// Función para mostrar los productos en la grilla
function mostrarProductos() {
  const grid = document.querySelector('.product-grid'); // Selecciona la grilla de productos

  productos.forEach(producto => {
    const productDiv = document.createElement('div'); // Crea un div para cada producto
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div class="product-info">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio.toFixed(2)}</p>
        <div class="cantidad-container">
          <input type="number" value="1" min="1" class="cantidad">
          <button data-nombre="${producto.nombre}" data-precio="${producto.precio}">Añadir al carrito</button>
        </div>
      </div>
    `;
    grid.appendChild(productDiv); // Añade el div a la grilla
  });

  // Añade event listeners a los botones "Añadir al carrito" después de que se hayan creado los elementos
  grid.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      agregarAlCarrito(event);
    }
  });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
  const boton = event.target;
  const cantidadInput = boton.previousElementSibling;
  const nombre = boton.dataset.nombre;
  const precio = parseFloat(boton.dataset.precio);
  const cantidad = parseInt(cantidadInput.value);

  // Agrega o actualiza la cantidad del producto en el carrito
  if (!carrito[nombre]) {
    carrito[nombre] = { precio: precio, cantidad: 0 };
  }
  carrito[nombre].cantidad += cantidad;

  // Actualiza la interfaz de usuario del carrito
  actualizarCarritoUI();
  console.log("Carrito:", carrito);
}

// Función para actualizar la interfaz de usuario del carrito
function actualizarCarritoUI() {
  let cantidadTotal = 0;
  let totalPrecio = 0;
  for (const producto in carrito) {
    cantidadTotal += carrito[producto].cantidad;
    totalPrecio += carrito[producto].precio * carrito[producto].cantidad;
  }

  // Actualiza los elementos en el HTML
  document.getElementById("cart-count").textContent = cantidadTotal;
  document.getElementById("cart-total").textContent = totalPrecio.toFixed(2);
}

// Llama a la función mostrarProductos() después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', mostrarProductos);