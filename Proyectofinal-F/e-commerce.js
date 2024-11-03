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
        marca: "Nestlé",
        codigo: "101122",
        Cdisponibilidad: "50"
    }
];
function cargarProductos() {
    const productosList = document.getElementById("productosList");
    productosList.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos
  
    // Revisa si el array de productos tiene contenido
    console.log("Productos a cargar:", productos);
  
    productos.forEach((producto, index) => {
      const item = document.createElement("li");
      item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Marca: ${producto.marca}</p>
        <p>Código: ${producto.codigo}</p>
        <button onclick="mostrarDetallesProducto(${index})">Ver Detalle</button>
      `;
      productosList.appendChild(item);
    });
  }