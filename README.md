Demostración de consumo de API TheMoviesDataBase

Directiva @defer de Angular: Empleé @defer para controlar la carga diferida del contenido, mostrando una lista de películas populares cuando los datos están listos. 
Configuré la carga para evitar mostrar elementos vacíos y mejorar el rendimiento.

Ionic Skeleton: Agregué elementos de Ionic Skeleton como placeholders mientras los datos se cargan, mejorando la percepción de velocidad en la interfaz.

Infinite Scroll y Skeleton Text: En la lista de películas, utilicé Infinite Scroll para cargar más elementos a medida que el usuario se desplaza 
y Skeleton Text para dar una apariencia de contenido cargándose mientras se completan las solicitudes de datos.

Configuración de Mobile: Ajusté el package para que el proyecto sea compatible como aplicación móvil, optimizando la configuración para este tipo de despliegue.

API TMDb: Configuré la obtención de datos desde una API de películas (TMDb), usando servicios y control de errores para gestionar respuestas y posibles fallos en las solicitudes.

Página de detalles de películas: Incluí una página de detalles que muestra información detallada sobre la película seleccionada.
