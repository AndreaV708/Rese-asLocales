# 🏫 Proyecto de Reseñas de Locales Cercanos a la Universidad

Este proyecto consiste en una página web colaborativa donde se muestran reseñas de distintos locales cercanos a nuestra universidad (comida, copias, papelerías, etc.). El objetivo es ayudar a otros estudiantes a encontrar los mejores sitios recomendados por nuestra comunidad universitaria.Además de 

## 🚀 Objetivos

- Crear una plataforma simple y funcional para consultar y dejar reseñas de locales cercanos.
- Desarrollar habilidades de trabajo en equipo usando GitHub, ramas, Issues y Pull Requests.
- Aplicar principios de diseño web responsivo, estructura ordenada de carpetas y validación de formularios.

---

## 🧑‍💻 Asignación de Tareas por Integrante

| Rol / Integrante | Tarea 1 | Rama Sugerida | Tarea 2 | Rama Sugerida |
|------------------|---------|----------------|----------|----------------|
| **Frontend Líder** | Crear navbar y footer globales | feature/navbar-footer | Hacer menú responsive para móviles | feature/mobile-nav |
| **UI Locales Recomendados** | Cambiar textos e imágenes del home para reflejar locales cercanos | feature/home-update | Crear sección “Locales Recomendados” con tarjetas | feature/recommended-cards |
| **UI Formulario Reseñas** | Diseñar y codificar el formulario para agregar una reseña | feature/review-form | Validar datos del formulario (nombre del local, texto, rating) | feature/form-validation |
| **UI Estructura & Filtros** | Implementar búsqueda/filtros por tipo de local (comida, copias, etc.) | feature/local-filters | Organizar archivos: index.html, css/, img/, js/ | chore/file-structure |
| **UI About ** | Adaptar sección "About" con propósito y equipo | feature/about-us | Implementar sección con Google Maps mostrando locales | feature/map-section
| **Backend & QA Líder** | Subir archivos al repositorio y agregar colaboradores | chore/init-github |Crear página de “Contacto” con formulario y redes sociales | feature/contact-page |
---

## 🛠️ Tecnologías Usadas

- HTML5
- CSS3
- JavaScript
- Git y GitHub

---

## 📁 Estructura del Proyecto

/proyecto-locales
│
├── index.html
├── about.html
├── contact.html
├── package.html
│
├── lib/
│ └── vendor
  └── owlcarousel
├── css/
│ └── style.css
│
├── js/
│ └── main.js
│
├── img/
│ └── (imágenes del sitio)
│
└── README.md
└── CONTRIBUTING.md

---

## 📦 Pasos para Clonar y Usar el Proyecto

### 1. Clonar el repositorio
git clone https://github.com/AndreaV708/Rese-asLocales.git
cd Rese-asLocales

### 2. Inicializar Git Flow
git flow init

Elegir ramas por defecto:
 master: main
develop: develop

### 3. Crear una nueva rama de funcionalidad (feature)
git flow feature start nombre-de-la-funcionalidad
Realizar los cambios, luego:
git add .
git commit -m "Descripción del cambio"
git flow feature finish nombre-de-la-funcionalidad
git push origin develop

🧾 Etapas Finales del Proyecto (Release)
Una vez que todas las funcionalidades fueron integradas a la rama develop, se siguir estos pasos:

### 1. Crear una rama de versión (release)
git flow release start v1.0.0

### 2. subir las ramas actulizadas.
git push origin main
git push origin develop

### 3. Realizar ajustes finales y terminar la versión

git add .
git commit -m "Preparación para versión 1.0.0"
git flow release finish 'v1.0.0'
Esto generó automáticamente:
El merge de la rama release/v1.0.0 hacia main y develop.

El tag v1.0.0.

### 4. Subir los cambios y el tag

git push origin main
git push origin develop
git push origin --tags
Con eso, la versión v1.0.0 quedó oficialmente publicada en GitHub en la rama main.



