# Bienvenidos a mi prueba técnica de React!

## Deadline

El plazo máximo para la entrega del producto es 2 semanas a partir de la presentación de la evaluación.

## Requerimientos:

En esta prueba desarrolle una aplicación con React que permite ver y buscar videos de Youtube así como también obtener
información detallada de un video seleccionado.


## Pantalla principal:
### Las secciones que se deben incluir en esta pantalla son las siguientes.

### Input de búsqueda
Este elemento deberá permitir escribir texto sobre el cual será realizada la búsqueda. Al presionar “enter” al
momento de escribir texto se deberá realizar la búsqueda de videos basados en lo escrito en el elemento en
ese momento.

### Botón para realizar la búsqueda
Al hacer click en este botón se deberá realizar la búsqueda de videos basados en lo escrito en el input de
búsqueda de forma similar a cuando se presiona “enter” mientras se escribe en el input.

### Video
Esta sección será un reproductor que mostrará un video seleccionado para reproducirse. Inicialmente al no
tener seleccionado ningún video ni haber realizado ninguna búsqueda, el implementador podrá decidir qué
mostrar en esta sección(un vídeo, un mensaje, una imagen, etc). Al realizar una búsqueda, se deberá cargar
uno de los videos resultantes de forma automática para ser reproducido en esta sección.

### Título
Debajo del video cargado se deberá mostrar el título del mismo.
Botón o link para ver detalles de video
A la derecha del título del vídeo existirá un botón o link que llevará a la pantalla de detalle del video.

### Videos relacionados
A la derecha del video se deberá mostrar como máximo 3 videos más(retornados en la búsqueda). Al hacer
click en uno de ellos hay que cargar ese video en el reproductor principal.

### Contador de videos visualizados
Se deberá llevar el conteo de todos los videos reproducidos por el usuario de la aplicación. El contador
puede ser persistente de modo que al recargar la aplicación se mantenga el valor o puede ser reiniciado en
cada recarga de la aplicación.

## Pantalla de detalle de video:
### A continuación se muestra el layout de la pantalla de detalle de video.

### Botón de back
Al presionar este botón se debe volver a la pantalla principal de la aplicación, manteniendo el video
reproducido anteriormente, la lista de videos relacionados y la cantidad de visualizaciones totales del
usuario.

### Título
Texto con el título del video seleccionado.

### Imagen principal
Se debe mostrar una imagen del video.

### Detalle de video
A la derecha de la imagen debe desplegarse la información de detalle

## Requerimientos no funcionales

- La aplicación deberá verse correctamente en la última versión de Chrome y Firefox.
- La aplicación deberá tener un diseño responsive pudiendo verse correctamente en un Iphone 6/7/8 (se
recomienda para esto usar las herramientas de desarrollo de Chrome y Firefox). El layout para este tamaño
de pantalla podrá ser adecuado y cambiado todo lo que sea necesario.
- Es posible utilizar cualquier framework de UI para el diseño responsive y de componentes. En caso de
utilizar alguno se recomienda Material UI o Bootstrap. Se aceptan soluciones sin ningún framework.
- El ruteo de las dos pantallas involucradas en la aplicación deberán ser manejadas mediante la librería
react-router.
- Se recomienda utilizar alguno de los siguientes manejadores de estado, la librería redux o la api Context de
React.

## Herramientas
- Utilizar a partir de la versión 16.3 de React.
- Se recomienda utilizar create-react-app (https://create-react-app.dev/) para inicializar el proyecto.
- Se deberá usar

# ¡Gracias por ver mi proyecto!
