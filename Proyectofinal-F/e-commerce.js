const productos = [
    // Sección Belleza
    {   
        nombre: 'Agua de Rosas', 
        categoria: 'belleza',  
        Cdisponibilidad: "20", 
        imagen: './img/belleza/AguaRosa.jpg',
        precio: "23000",
        marca: "Sammy",
        codigo: "345566"
    },
    { 
        nombre: 'Base Líquida', 
        categoria: 'belleza', 
        imagen: './img/belleza/baseLiquida.jpg',
        precio: "25000",
        marca: "Maybelline",
        codigo: "123456",
        Cdisponibilidad: "15"
    },
    { 
        nombre: 'Brillo Maybelline', 
        categoria: 'belleza', 
        imagen: './img/belleza/brilloMaybelline.jpg',
        precio: "12000",
        marca: "Maybelline",
        codigo: "654321",
        Cdisponibilidad: "10"
    },
    { 
        nombre: 'Crema Facial Día', 
        categoria: 'belleza', 
        imagen: './img/belleza/cremafacialDia.jpg',
        precio: "34000",
        marca: "Nivea",
        codigo: "789101",
        Cdisponibilidad: "12"
    },
    { 
        nombre: 'Crema Facial Noche', 
        categoria: 'belleza', 
        imagen: './img/belleza/cremaFacialnoche.jpg',
        precio: "40000",
        marca: "Nivea",
        codigo: "112233",
        Cdisponibilidad: "8"
    },
    { 
        nombre: 'Labial Maybelline', 
        categoria: 'belleza', 
        imagen: './img/belleza/labialMaybelline.jpg',
        precio: "20000",
        marca: "Maybelline",
        codigo: "445566",
        Cdisponibilidad: "25"
    },
    { 
        nombre: 'Limpiador Facial', 
        categoria: 'belleza', 
        imagen: './img/belleza/limpiadorFacial.jpg',
        precio: "22000",
        marca: "L'Oréal",
        codigo: "778899",
        Cdisponibilidad: "18"
    },
    { 
        nombre: 'Pestañina Loreal', 
        categoria: 'belleza', 
        imagen: './img/belleza/pestañinaLoreal.jpg',
        precio: "33000",
        marca: "L'Oréal",
        codigo: "998877",
        Cdisponibilidad: "20"
    },
    { 
        nombre: 'Serum Antimanchas Garnier', 
        categoria: 'belleza', 
        imagen: './img/belleza/serumAntimanchasGarnier.jpg',
        precio: "45000",
        marca: "Garnier",
        codigo: "334455",
        Cdisponibilidad: "10"
    },
    { 
        nombre: 'Suero para Pestañas', 
        categoria: 'belleza', 
        imagen: './img/belleza/SueroPestañas.jpg',
        precio: "28000",
        marca: "Sammy",
        codigo: "667788",
        Cdisponibilidad: "15"
    },
//seccion cuidado personal
    { 
        nombre: 'Bloqueador Solar', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado personal/BloqueadorSolar.jpg',
        precio: "35000",
        marca: "Neutrogena",
        codigo: "101010",
        Cdisponibilidad: "30"
    },
    { 
        nombre: 'Cepillo dental', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/cepilloDental.jpg',
        precio: "5000",
        marca: "Colgate",
        codigo: "202020",
        Cdisponibilidad: "50"
    },
    { 
        nombre: 'Crema Dental', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/cremaDental.png',
        precio: "12000",
        marca: "Colgate",
        codigo: "303030",
        Cdisponibilidad: "45"
    },
    { 
        nombre: 'Crema Facial', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/cremaFacial.jpg',
        precio: "18000",
        marca: "Nivea",
        codigo: "404040",
        Cdisponibilidad: "20"
    },
    { 
        nombre: 'Enjuague Bucal', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/EnjuagueBucal.jpg',
        precio: "15000",
        marca: "Listerine",
        codigo: "505050",
        Cdisponibilidad: "35"
    },
    { 
        nombre: 'Hidratante', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/hidratanteNeutrogena.jpg',
        precio: "25000",
        marca: "Neutrogena",
        codigo: "606060",
        Cdisponibilidad: "25"
    },
    { 
        nombre: 'Protector Labial', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/protectorLabial.jpg',
        precio: "9000",
        marca: "Nivea",
        codigo: "707070",
        Cdisponibilidad: "40"
    },
    { 
        nombre: 'Seda Dental', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/SedaDental.jpg',
        precio: "6000",
        marca: "Oral-B",
        codigo: "808080",
        Cdisponibilidad: "50"
    },
    { 
        nombre: 'Shampoo Dove', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/Shampoodove.jpg',
        precio: "20000",
        marca: "Dove",
        codigo: "909090",
        Cdisponibilidad: "25"
    },
    { 
        nombre: 'Tratamiento Capilar', 
        categoria: 'cuidado personal', 
        imagen: './img/cuidado Personal/tratamientoCapilar.jpg',
        precio: "30000",
        marca: "Pantene",
        codigo: "101112",
        Cdisponibilidad: "15"
    },


    // Sección de Medicamentos
    { 
        nombre: 'Algodon', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/Algodon.jpg',
        precio: "8000",
        marca: "Genérico",
        codigo: "111111",
        Cdisponibilidad: "100"
    },
    { 
        nombre: 'Cura Cure', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/CuraCure.png',
        precio: "5000",
        marca: "Cura",
        codigo: "222222",
        Cdisponibilidad: "50"
    },
    { 
        nombre: 'Dolex Gripa', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/DolexGripa.jpg',
        precio: "12000",
        marca: "Dolex",
        codigo: "333333",
        Cdisponibilidad: "30"
    },
    { 
        nombre: 'Electrolit', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/Electrolit.jpg',
        precio: "9000",
        marca: "Electrolit",
        codigo: "444444",
        Cdisponibilidad: "40"
    },
    { 
        nombre: 'Mieltertos', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/Mieltertos.jpg',
        precio: "15000",
        marca: "Mieltertos",
        codigo: "555555",
        Cdisponibilidad: "20"
    },
    { 
        nombre: 'Noxpirin', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/Noxpirin.jpg',
        precio: "13000",
        marca: "Noxpirin",
        codigo: "666666",
        Cdisponibilidad: "35"
    },
    { 
        nombre: 'Pax Dia', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/PacDia.jpg',
        precio: "14000",
        marca: "Pax",
        codigo: "777777",
        Cdisponibilidad: "25"
    },
    { 
        nombre: 'Pax Noche', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/PaxNoche.jpg',
        precio: "14000",
        marca: "Pax",
        codigo: "888888",
        Cdisponibilidad: "25"
    },
    { 
        nombre: 'Vaporub', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/Vaporub.jpg',
        precio: "18000",
        marca: "Vicks",
        codigo: "999999",
        Cdisponibilidad: "40"
    },
    { 
        nombre: 'Vitamina C', 
        categoria: 'medicamentos', 
        imagen: './img/medicamentos/VitaminaC.jpg',
        precio: "10000",
        marca: "Genérico",
        codigo: "101112",
        Cdisponibilidad: "60"
    },


    // Sección Cuidado del Bebé
    { 
        nombre: 'Aceite Bebé', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/aceiteBaby.jpg',
        precio: "20000",
        marca: "Johnson's",
        codigo: "112233",
        Cdisponibilidad: "30"
    },
    { 
        nombre: 'Cereal Infantil', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/cerealInfantil.jpg',
        precio: "18000",
        marca: "Nestlé",
        codigo: "223344",
        Cdisponibilidad: "25"
    },
    { 
        nombre: 'Compota', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/compota.jpg',
        precio: "5000",
        marca: "Gerber",
        codigo: "334455",
        Cdisponibilidad: "40"
    },
    { 
        nombre: 'Crema Antipañalitis', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/cremaAntipañalitis.jpg',
        precio: "12000",
        marca: "Desitin",
        codigo: "445566",
        Cdisponibilidad: "15"
    },
    { 
        nombre: 'Crema para peinar', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/cremaPeinar.png',
        precio: "15000",
        marca: "Johnson's",
        codigo: "556677",
        Cdisponibilidad: "20"
    },
    { 
        nombre: 'Fórmula Infantil Similac', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/FormulaInfantil.jpg',
        precio: "45000",
        marca: "Similac",
        codigo: "667788",
        Cdisponibilidad: "10"
    },
    { 
        nombre: 'Jabón Líquido', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/jabonLiquido.png',
        precio: "15000",
        marca: "Johnson's",
        codigo: "778899",
        Cdisponibilidad: "25"
    },
    { 
        nombre: 'Shampoo Baby', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/shampooBaby.jpg',
        precio: "18000",
        marca: "Johnson's",
        codigo: "889900",
        Cdisponibilidad: "20"
    },
    { 
        nombre: 'Vaselina Baby', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/vaselinaBaby.jpg',
        precio: "10000",
        marca: "Johnson's",
        codigo: "990011",
        Cdisponibilidad: "30"
    },
    { 
        nombre: 'Yogurt Baby', 
        categoria: 'cuidado del bebe', 
        imagen: './img/cuidado del bebe/yogurthBaby.png',
        precio: "8000",
        marca: "Alpina",
        codigo: "101122",
        Cdisponibilidad: "50"
    }
];

document.addEventListener("DOMContentLoaded", function () {
  const filtro1 = document.getElementById("filtro1"); 
  const filtro2 = document.getElementById("filtro2"); 
  const botonFiltrar = document.getElementById("filtrar");
  const botonEliminarFiltros = document.getElementById("limpiarFiltros");
  const productosList = document.getElementById("productosList"); 

  if (!botonFiltrar || !botonEliminarFiltros) {
    console.error("No se encontraron los botones 'filtrar' o 'eliminarFiltros' en el DOM.");
    return;
  }
  botonFiltrar.addEventListener("click", function () {
    console.log("Botón 'Filtrar' fue clicado");
    const categoriaSeleccionada = filtro1.value.toLowerCase();
    const nombreFiltro = filtro2.value.trim().toLowerCase();

    const productosFiltrados = productos.filter(producto => {
      const coincideCategoria = categoriaSeleccionada === "" || producto.categoria.toLowerCase() === categoriaSeleccionada;
      const coincideNombre = producto.nombre.toLowerCase().includes(nombreFiltro);
      return coincideCategoria && coincideNombre;
    });

    productosList.innerHTML = "";
    productosMostrados = 0;
    mostrarProductos(productosFiltrados);
  });

  botonEliminarFiltros.addEventListener("click", function () {
    console.log("Botón 'Eliminar Filtros' fue clicado");
    filtro1.value = "";
    filtro2.value = ""; 

    productosList.innerHTML = ""; 
    productosMostrados = 0; 
    mostrarProductos(productos); 
  });
});


const formularioCompra = document.getElementById("formularioCompra");
if (formularioCompra) {
  formularioCompra.addEventListener("submit", function (event) {
    const nombre = document.getElementById("name").value.trim();
    const presupuesto = document.getElementById("presupuesto").value.trim();
    const cantidad = document.getElementById("cantidad").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const entrega = document.getElementById("entrega").value.trim();

    if (!nombre || nombre.length > 20) {
      alert("El nombre debe ser una cadena y no puede superar los 20 caracteres.");
      return;
    }

    if (!presupuesto || isNaN(presupuesto) || presupuesto <= 0) {
     alert("El presupuesto debe ser un número positivo y mayor que cero.");
           return;
       } else {
  const presupuestoFormateado = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(presupuesto);

  console.log(`Presupuesto formateado: ${presupuestoFormateado}`);
}
    if (!cantidad || isNaN(cantidad) || cantidad <= 0 || cantidad > 20) {
      alert("La cantidad de artículos debe ser un número positivo y no mayor a 20.");
      return;
    }

    if (!direccion || !entrega) {
      alert("Por favor, complete todos los campos antes de iniciar la compra.");
      return;
    }
    alert("Formulario enviado con éxito. Procediendo a la compra.");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const botonCancelar = document.getElementById("cancelarCompra");
  if (botonCancelar) {
    botonCancelar.addEventListener("click", function () {
      window.location.href = "e-commerce.html"; 
    });
  }

  const botonCompletar = document.getElementById("completarCompra");
  if (botonCompletar) {
    botonCompletar.addEventListener("click", function () {
      window.location.href = "vistaCarrito.html"; 
    });
  }
  const productosList = document.getElementById("productosList");
  const mensajeFinal = document.getElementById("mensajeFinal");
  const detalleSection = document.getElementById("detalleProducto");
  const productoDetalles = document.getElementById("productoDetalles");
  let productosMostrados = 0;
  
  function cargarProductos() {
    const cantidadPorCarga = 15;
    const totalProductos = productos.length;

    for (let i = productosMostrados; i < productosMostrados + cantidadPorCarga; i++) {
      if (i >= totalProductos) {
        mensajeFinal.style.display = "block";
        window.removeEventListener("scroll", manejarScroll);
        return;
      }
      const producto = productos[i];
      const item = document.createElement("li");
      item.classList.add("tarjeta");

      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.classList.add("tarjeta-imagen");

      const nombre = document.createElement("h3");
      nombre.textContent = producto.nombre;
      nombre.classList.add("tarjeta-nombre");

      const precio = document.createElement("p");
      precio.textContent = `Precio: $${producto.precio}`;
      precio.classList.add("tarjeta-precio");

      const disponibilidad = document.createElement("p");
      disponibilidad.textContent = `Disponibilidad: ${producto.Cdisponibilidad} unidades`;
      disponibilidad.classList.add("tarjeta-disponibilidad");

      // Crear el botón "Ver Detalle"
      const botonDetalle = document.createElement("button");
      botonDetalle.textContent = "Ver Detalle";
      botonDetalle.classList.add("tarjeta-boton");
      botonDetalle.addEventListener("click", function () {
        mostrarDetallesProducto(producto);
      });
      item.appendChild(img);
      item.appendChild(nombre);
      item.appendChild(precio);
      item.appendChild(disponibilidad);
      item.appendChild(botonDetalle);

     
        productosList.appendChild(item);
    }

    productosMostrados += cantidadPorCarga;
  }
  function manejarScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      cargarProductos();
    }
  }
  cargarProductos();
  window.addEventListener("scroll", manejarScroll);
});


    const cantidadInput = document.getElementById("cantidadProducto");

    if (cantidadInput) {
      cantidadInput.addEventListener("input", function () {
        const cantidad = parseInt(cantidadInput.value, 10);
        if (cantidad <= 0 || isNaN(cantidad)) {
          console.log("La cantidad debe ser un número positivo.");
        }
      });
    } 
let productoSeleccionado = null;

function mostrarDetallesProducto(producto) {
  productoSeleccionado = producto;
  console.log(productoSeleccionado);
  const detalleSection = document.getElementById("detalleProducto");
  detalleSection.style.display = "block";
  const productoDetalles = document.getElementById("productoDetalles");
  productoDetalles.innerHTML = `
    <h2>${producto.nombre}</h2>
    <img src="${producto.imagen}" alt="${producto.nombre}" style="width: 150px;">
    <p>Precio: $${producto.precio}</p>
    <p>Disponibilidad: ${producto.Cdisponibilidad} unidades</p>
    <p>Categoría: ${producto.categoria}</p>
    <p>Marca: ${producto.marca}</p>
    <p>Código: ${producto.codigo}</p>
  `;
}
const botonAgregarCarrito = document.getElementById("agregarCarrito");
  if (botonAgregarCarrito) {
    botonAgregarCarrito.addEventListener("click", agregarAlCarrito);
  } else {
    console.error("El botón 'agregarCarrito' no se encontró en el DOM.");
  }

  
let productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
actualizarVistaCarrito(); 
actualizarResumenCompra();

function agregarAlCarrito() {
  if (productoSeleccionado) {
    const cantidad = parseInt(document.getElementById("cantidadProducto").value, 10);

    if (cantidad > 0) {
      productosCarrito.push({
        nombre: productoSeleccionado.nombre,
        imagen: productoSeleccionado.imagen,
        precio: productoSeleccionado.precio,
        disponibilidad: productoSeleccionado.Cdisponibilidad,
        cantidad: cantidad,
      });
      localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
      alert("Producto agregado al carrito correctamente.");
      actualizarVistaCarrito();
      actualizarResumenCompra();
    } else {
      alert("Por favor, ingrese una cantidad válida.");
    }
  } else {
    alert("No se ha seleccionado ningún producto.");
  }
}
function actualizarVistaCarrito() {
  const tbody = document.querySelector("#tablaCarrito tbody");
  if (!tbody) {
    console.error("La tabla del carrito no se encontró en el DOM.");
    return;
  }

  tbody.innerHTML = "";
  if (productosCarrito.length === 0) {
    tbody.innerHTML = "<tr><td colspan='7'>No hay productos en el carrito.</td></tr>";
    return;
  }
  productosCarrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;"></td>
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toLocaleString()}</td>
      <td>${producto.disponibilidad} unidades</td>
      <td>${producto.cantidad}</td>
      <td>$${subtotal.toLocaleString()}</td>
      <td><button class="eliminar-btn">Eliminar</button></td>
    `;
    fila.querySelector(".eliminar-btn").addEventListener("click", function () {
      eliminarProductoDelCarrito(index);
    });

    tbody.appendChild(fila);
  });
}
function eliminarProductoDelCarrito(index) {
  productosCarrito = productosCarrito.filter((producto, i) => i !== index);
  localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

  actualizarVistaCarrito();
}
document.addEventListener("DOMContentLoaded", function () {
  productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
  actualizarVistaCarrito();
});


let compraEnProgreso = false; 
document.getElementById("confirmarCompra").addEventListener("click", function (event) {
  if (compraEnProgreso) {
    alert("Hay una compra en progreso. Por favor, espere.");
    return;
  }
  compraEnProgreso = true;
  document.getElementById("confirmarCompra").disabled = true;
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;
  const fechaExpiracion = document.getElementById("fechaExpiracion").value;
  const codigoSeguridad = document.getElementById("codigoSeguridad").value;
  const nombreTitular = document.getElementById("nombreTitular").value;
  const paisEmision = document.getElementById("paisEmision").value;
  const tipoTarjeta = document.getElementById("tipoTarjeta").value;
  if (!numeroTarjeta || !fechaExpiracion || !codigoSeguridad || !nombreTitular || !paisEmision || !tipoTarjeta) {
    alert("Por favor, complete todos los campos.");
    document.getElementById("confirmarCompra").disabled = false; 
    compraEnProgreso = false; 
    return;
  }

  if (numeroTarjeta.length !== 16 || isNaN(numeroTarjeta)) {
    alert("El número de tarjeta debe tener 16 dígitos.");
    document.getElementById("confirmarCompra").disabled = false;
    compraEnProgreso = false;
    return;
  }

  if (codigoSeguridad.length !== 3 || isNaN(codigoSeguridad)) {
    alert("El código de seguridad debe tener 3 dígitos y ser solo números.");
    document.getElementById("confirmarCompra").disabled = false;
    compraEnProgreso = false;
    return;
  }

  const presupuestoMaximo = 500000;
  let totalPagar = 0;
  const totalProductos = productosCarrito.length;

  productosCarrito.forEach(producto => {
    totalPagar += producto.precio * producto.cantidad;
  });
  if (totalProductos > 20) {
    alert("Error: La cantidad de productos no puede superar los 20.");
    document.getElementById("confirmarCompra").disabled = false;
    compraEnProgreso = false;
    return;
  }

  if (totalPagar > presupuestoMaximo) {
    alert("Error: El total de la compra supera el presupuesto permitido.");
    document.getElementById("confirmarCompra").disabled = false;
    compraEnProgreso = false;
    return;
  }
  new Promise((resolve, reject) => {
    const tiempoEspera = Math.random() * (3000 - 2000) + 2000;

    setTimeout(() => {
      resolve("Compra validada correctamente. ¡Gracias por su compra!");
    }, tiempoEspera);
  })
    .then((mensaje) => {
      alert(mensaje);
      alert("Pago realizado con éxito. Será redirigido para realizar otra compra.");
      setTimeout(() => {
        window.location.href = "e-commerce.html";
      }, 2000);
    })
    .catch((error) => {
      alert(error); 
      document.getElementById("confirmarCompra").disabled = false;
      compraEnProgreso = false; 
    });
});
function mostrarProductos(listaProductos) {
  const cantidadPorCarga = 15;
  const totalProductos = listaProductos.length;

  for (let i = productosMostrados; i < productosMostrados + cantidadPorCarga; i++) {
    if (i >= totalProductos) {
      mensajeFinal.style.display = "block";
      window.removeEventListener("scroll", manejarScroll);
      return;
    }

    const producto = listaProductos[i];

    const item = document.createElement("li");
    item.classList.add("tarjeta");

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;
    img.classList.add("tarjeta-imagen");

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;
    nombre.classList.add("tarjeta-nombre");

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${producto.precio}`;
    precio.classList.add("tarjeta-precio");

    const disponibilidad = document.createElement("p");
    disponibilidad.textContent = `Disponibilidad: ${producto.Cdisponibilidad} unidades`;
    disponibilidad.classList.add("tarjeta-disponibilidad");

    const botonDetalle = document.createElement("button");
    botonDetalle.textContent = "Ver Detalle";
    botonDetalle.classList.add("tarjeta-boton");
    botonDetalle.addEventListener("click", function () {
      mostrarDetallesProducto(producto);
    });
    item.appendChild(img);
    item.appendChild(nombre);
    item.appendChild(precio);
    item.appendChild(disponibilidad);
    item.appendChild(botonDetalle);

    productosList.appendChild(item);
  }

  productosMostrados += cantidadPorCarga;
}

function actualizarResumenCompra() {
  let productosCarrito = JSON.parse(localStorage.getItem("productosCarrito")) || [];
  let totalProductos = 0;
  let totalPrecio = 0;

  productosCarrito.forEach(producto => {
    totalProductos += producto.cantidad; 
    totalPrecio += producto.precio * producto.cantidad; 
  });
  const costoEnvio = totalPrecio > 100000 ? 0 : 15000;
  const totalPagar = totalPrecio + costoEnvio;
  document.getElementById("totalProductos").textContent = totalProductos;
  document.getElementById("costoEnvio").textContent = costoEnvio;
  document.getElementById("totalPagar").textContent = totalPagar;
}

actualizarResumenCompra();
