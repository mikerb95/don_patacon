# Don Patacón — Sitio web

Sitio estático multi‑página con transiciones animadas (GSAP + Barba.js), sliders (Swiper) y galería (GLightbox). Optimizado para la marca (verde/amarillo) y experiencia moderna.

## Estructura
- index.html — Inicio con hero slider
- menu.html — Menú resumido
- galeria.html — Galería con lightbox
- nosotros.html — Historia
- contacto.html — Ubicación y formulario demo
- /css/styles.css — Estilos
- /js/main.js — Navegación y transiciones
- /js/pages/* — Lógica por página
- /img — Coloca imágenes aquí

## Cómo ejecutar localmente
Abre `index.html` en un servidor estático para que Barba.js maneje rutas relativas correctamente. En Windows PowerShell:

```powershell
# Opción 1: Python (si lo tienes)
python -m http.server 5500 ; Start-Process http://localhost:5500/index.html

# Opción 2: Node (npx serve)
npx serve -l 5500 . ; Start-Process http://localhost:5500/index.html
```

## Personalización rápida
- Reemplaza imágenes en `/img` siguiendo `img/README.txt`.
- Actualiza textos del menú en `menu.html`.
- Cambia enlaces a redes en los footers.
- Si tienes Rappi URL específica, edítala en los headers.

## Notas
- No incluye tienda en línea; CTA dirige a Rappi.
- Accesible (contraste, focus-visible, aria-*), responsive y ligero.
