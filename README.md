###### Mujeres por Mexico en Chihuahua

[Acceso a la página](https://mujeresxmx.netlify.app)

# Actualizar la pagina web

La pagina se actualiza automaticamente con los cambios a la branch main, por lo que cualquier actualizacion a main se vera reflejada en la pagina en unos minutos

El estatus e historial de los deploys se puede ver en https://app.netlify.com/sites/mujeresxmx/deploys

* Sugerencia: evitar trabajar directamente en main y asegurarse que el sitio funciona localmente antes de integrarlo

## Agregar entrada a blog

### Agregar en la lista 
1. Agregar imagen de miniatura en /public/Image
2. Abrir /app/blog/page.tsx
3. Dentro de Testimonials, agregar un nuevo elemento al final de blogCards
4. Siguiendo la estructura existente, escribir el nombre de la imagen recien agregada, el titulo que se mostrara y el nombre de la carpeta donde estara la pagina. De preferencia usar un nombre similar al titulo
![Entradas](/readme%20images/blogcards.png)

* IMPORTANTE solamente usar letras sin acentos ni espacios, numeros y guiones(-) en el nombre de la carpeta. No usar espacio( ), guion bajo(_), acentos ni caracteres especiales.

### Agregar pagina
1. Crear una carpeta con exactamente el mismo nombre utilizado en el paso previo
![Carpeta](/readme%20images/carpetas.png)
2. Copiar el archivo /app/blog/blog-pages/plantilla/page.tsx y pegarlo en la carpeta creada
3. Modificar el apartado de entry siguiendo la estructura existente

![Estructura](/readme%20images/plantilla.png)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
