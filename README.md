[README.md](https://github.com/user-attachments/files/26986148/README.md)
# Mi Portafolio Personal

Portafolio web estático, desplegado con **GitHub Pages**.

---

## 🗂 Estructura del proyecto

```
portfolio/
├── index.html                  ← Página principal del portafolio
├── README.md                   ← Este archivo
├── assets/
│   ├── css/
│   │   └── main.css            ← Estilos globales (compartidos por todo)
│   ├── js/
│   │   └── main.js             ← JavaScript global
│   └── img/                    ← Imágenes globales (foto de perfil, etc.)
└── projects/
    └── proyecto-01/            ← Una carpeta por cada proyecto
        ├── index.html          ← Página detallada del proyecto
        ├── style.css           ← Estilos propios del proyecto
        ├── README.md           ← Documentación del proyecto
        ├── assets/             ← Imágenes y recursos del proyecto
        └── docs/               ← Documentación adicional
```

---

## ➕ Cómo agregar un nuevo proyecto

1. **Duplica la carpeta** `projects/proyecto-01/` y renómbrala:
   ```bash
   cp -r projects/proyecto-01 projects/mi-nuevo-proyecto
   ```

2. **Edita** `projects/mi-nuevo-proyecto/index.html` con el contenido real.

3. **Agrega una tarjeta** en `index.html` duplicando el bloque `<article class="project-card">` y actualizando el `href`, título, descripción y tags.

4. **Agrega la imagen de portada** en `projects/mi-nuevo-proyecto/assets/cover.png` y reemplaza el placeholder en la tarjeta.

---

## 🚀 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub llamado `tu-usuario.github.io`  
   (o cualquier nombre si usas una rama `gh-pages`)

2. Sube todos los archivos:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
   git push -u origin main
   ```

3. En GitHub → Settings → Pages → Source: `main` branch, carpeta `/ (root)`

4. Tu portafolio estará en: `https://tu-usuario.github.io`

---

## ✏️ Personalización rápida

| Qué cambiar | Dónde |
|---|---|
| Tu nombre y logo | `index.html` → `.logo` y `.hero-title` |
| Colores del tema | `assets/css/main.css` → sección `:root` |
| Email de contacto | `index.html` → `href="mailto:..."` |
| Links sociales | `index.html` → `.social-links` |
| Foto de perfil | `assets/img/profile.jpg` (agrégala a la sección Sobre mí) |
