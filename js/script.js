// DATOS PARA FILTRAR //

// Primer filtro: programas //

const dwSantiago = [

//programas //

{id: 1, name: "Jose y su Zactate-amigos limpiando el Zacate-bosque.", image: "img/imagen01-ProyectoZY.jpg", genero: "programas", description: "En un municipio lleno de basura como Tepentongo en el estado de Zacatecas, unos estudiantes de la preparatoria local  Escuela Preparatoria Estatal Profr. Salvador Vidal García se han propuesto a limpiar su bosque local liderados por Jose."},
{id: 2, name: "Maria Jose y una plantita que no ha plantado, porque ella ya planto mucho, te toca a ti.", image: "img/imagen02-ProyectoZY.jpg", genero: "programas", description: "En el pueblo de San Antonio Tecómitl, dentro de la alcaldía Milpa Alta en la Ciudad de México, las personas se han vuelto descuidadas con sus entornos naturales. Es por esta razon que Maria Jose, una vendedora esquites local, a comenzado un pequeño programa de reforestación."},
{id: 3, name: "Joseph y la gente recogiendo los cartones de Bachoco, por lo menos su publicidad no es lo unico que da risa...", image: "img/imagen03-ProyectoZY.jpg", genero: "programas", description: "En el municipio de Heroica Ciudad de Huajuapan de León, principal núcleo de la región Mixteca de Oaxaca, hay un porblema con los cartones de huevo, Joseph esta para solucionarlo."},
{id: 4, name: "Max lo vio y la rego jajaja", image: "img/imagen04-ProyectoZY.jpg", genero: "programas", description: "Coatepec, conocido como la capital del café y Pueblo Mágico en el estado de Veracruz podra tener muchi turimo, pero sufre de algunas sequias recientes, por eso Max a comenzado un programa de regado y cuidado de planta junto a su madre."},


//únete

{id: 1, name: "Anabelle", image: "img/imagen05-ProyectoZY.jpg", genero: "unete", description: "Recuerdas a la muñeca poseida que tenia que ser resguardada por el gran peligro que representaba? Pues tu puedes hacer lo mismo, uniéndote a nuestro curso, con algo todavia más peligroso, los residuos resiclabes y reutilizables que usas todos los dias."},
{id: 2, name: "Volver al futuro", image: "img/imagen06-ProyectoZY.jpg", genero: "unete", description: "En volver al futuro usaban el delorian para cambiar el pasado y así, tener un mejor futuro, nuestro curso hace lo mismo cambiando nuestor presente. Únete a nuestro curso de reciclaje y aprende a mejorar tus habitos."},
{id: 3, name: "Los juegos del Hambre", image: "img/imagen07-ProyectoZY.jpg", genero: "unete", description: "En los juegos del hambre cada distrito se clasifica de distintas y especificas maneras, para separarlos uno del otro. En nuestro curso, aprenderas a clasificar algo que es casi tan complejo, tu basura andes de desacharla."},
{id: 4, name: "Wall-e", image: "img/imagen08-ProyectoZY.jpg", genero: "unete", description: "Es decir, vamos...todos sabemos lo que paso en Wall-e. Únete a nuestro curso para aprender como crear y mantenr pequeños huertos sustentables en tu hogar."},

];

// Obtener los contenedores y botones del DOM
const dwSantiagoContainer = document.getElementById("proyecto-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwSantiagoToRender = [];
    if (genero === "all") {
        dwSantiagoToRender = dwSantiago;
    } else {
        dwSantiagoToRender = dwSantiago.filter(dw => dw.genero === genero);
    }

    // Limpia el contenedor antes de renderizar
    dwSantiagoContainer.innerHTML = '';


    if (dwSantiagoToRender.length === 0) {
        dwSantiagoContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

      // Crea y agrega las tarjetas 
   dwSantiagoToRender.forEach(dw => {
        const cardHtml = `
            <figure class="proyecto-card" data-gender="${dw.genero}">
                <img src="${dw.image}" alt="la espresa tiene los productos y proyectos, nombre: ${dw.name}">
                <figcaption>
                ${dw.name}
            </figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `;
        dwSantiagoContainer.innerHTML += cardHtml;
    });
}

// Agrega event listeners a los botones de filtro
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const genero = button.dataset.category;


        // Remueve la clase 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Agrega la clase 'active' al botón clickeado
        button.classList.add("active");
        
        // Renderiza las tarjetas con el filtro seleccionado
        renderDw(genero);
    });
});

// Renderizar todos para cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderDw('all');
});


// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
