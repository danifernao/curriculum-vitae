# Curriculum Vitae

Una hoja de vida tradicional elaborada con React, con la posibilidad de ofrecer el contenido en varios idiomas.

![Captura de pantalla de la hoja de vida](/screenshot.png)

### Instalación

1. Asegúrate de tener instalado Node.js y NPM.
2. Descarga o clona este repositorio e ingresa a él.
3. Instala las dependencias:

```
npm install
```

4. Inicia el servidor de desarrollo:

```
npm run dev
```

### Configuración

#### Editar la hoja de vida

El contenido de la hoja de vida está organizado por [códigos de idiomas](https://es.wikipedia.org/wiki/ISO_639-1#Lista_idiomas) y se puede editar en el archivo JSON correspondiente, ubicado en la carpeta `src/assets/lang/`.

Para cambiar la fotografía, debes guardar la imagen en `public/images/`, copiar su nombre (junto con su extensión) y pegarlo como nuevo valor de la clave `filename` en el archivo JSON que estés editando.

Para cambiar el icono de algún sitio web del pie de página, debes [importarlo](https://docs.fontawesome.com/v5/web/use-with/react#using-icons-via-individual-use) en `src/App.jsx` y agregar su [nombre](https://fontawesome.com/search?o=r&ic=free&ip=brands) como nuevo valor de la clave `icon` correspondiente en el archivo JSON que estés editando.

Ten presente que debes recargar la página en el navegador para poder visualizar los cambios.

#### Agregar otro idioma

1. Haz una copia de cualquiera de los archivos existentes de `src/assets/lang/` en la misma ubicación.
2. Cambia el nombre del archivo copiado por el [código del nuevo idioma](https://es.wikipedia.org/wiki/ISO_639-1#Lista_idiomas).
3. Abre el archivo, traduce los valores de las propiedades deseadas y guarda los cambios.
4. Abre el archivo `src/components/CurriculumVitaeLanguage.jsx`.
5. Agrega una nueva propiedad al objeto `supportedLangs` con el [código del nuevo idioma](https://es.wikipedia.org/wiki/ISO_639-1#Lista_idiomas) como clave y el nombre del idioma como valor.
6. Guarda los cambios.
