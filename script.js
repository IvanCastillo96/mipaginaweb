document.addEventListener("DOMContentLoaded", function () {
    // Navegación con scroll suave para enlaces internos (#id)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Si es un enlace interno con "#", hacer scroll suave
            if (href.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(href);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error("Elemento no encontrado:", href);
                }
            }
        });
    });

    // Si la página se carga con un #id en la URL, hacer scroll automático
    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300); // Espera un poco para que la página termine de cargar
        }
    }
});
