# Portafolio Personal — GitHub Pages

## Estructura

```
portfolio/
├── index.html                    ← HOME: gradiente animado + botones de navegación
├── README.md
├── assets/
│   ├── css/
│   │   └── global.css            ← Tokens y estilos compartidos
│   └── js/
│       └── nav.js                ← Lógica de navegación compartida
├── pages/
│   ├── trabajos.html             ← Grilla de proyectos
│   └── sobre-mi.html             ← Perfil + experiencia
└── projects/
    └── proyecto-01/              ← Una carpeta por cada proyecto
        ├── index.html
        └── assets/               ← Imágenes propias del proyecto
```

---

## ➕ Agregar un nuevo proyecto

1. **Duplica** la carpeta `projects/proyecto-01/` y renómbrala:
   ```bash
   cp -r projects/proyecto-01 projects/mi-nuevo-proyecto
   ```
2. **Edita** `projects/mi-nuevo-proyecto/index.html` con el contenido real.
3. **Agrega una tarjeta** en `pages/trabajos.html`: duplica el bloque
   `<article class="project-card">` y actualiza `href`, título, descripción y tags.
4. **Agrega la imagen de portada** en `projects/mi-nuevo-proyecto/assets/cover.jpg`
   y reemplaza el `<div class="thumb-placeholder">` por `<img src="..."/>`.

---

## 🚀 Publicar en GitHub Pages

```bash
# 1. Crea el repositorio: tu-usuario.github.io
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
git push -u origin main
```

Luego en GitHub → **Settings → Pages → Source: main / (root)**.

Tu sitio estará en: `https://tu-usuario.github.io`

---

## ✏️ Personalización rápida

| Qué            | Dónde |
|----------------|-------|
| Tu nombre      | `index.html` → `.home-name` |
| Tu rol         | `index.html` → `.home-role` |
| Colores        | `assets/css/global.css` → `:root` |
| Email          | `pages/sobre-mi.html` → `.btn-contact` |
| Foto de perfil | `assets/img/profile.jpg` + actualiza `pages/sobre-mi.html` |
| Skills         | `pages/sobre-mi.html` → `.skills-list` |
| Experiencia    | `pages/sobre-mi.html` → `.timeline` |
