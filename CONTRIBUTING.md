# 🤝 Guía de Colaboración del Proyecto

Este archivo describe las normas y buenas prácticas para colaborar en este proyecto de reseñas de locales cercanos a la universidad.

---

## 🗂️ Modelo de Ramas: GitFlow

Trabajamos bajo la metodología **GitFlow**, que define un flujo estructurado para el uso de ramas:

- `main`: Rama principal del proyecto. Contiene solo versiones **estables** y **en producción**.
- `develop`: Rama de desarrollo. Aquí se integran las funcionalidades nuevas antes de liberarlas.
- `feature/nombre-funcionalidad`: Para nuevas características. Se crean desde `develop`.
- `release/nombre-version`: Para preparar una nueva versión estable. Se crean desde `develop` y se fusionan a `main` y `develop`.
- `hotfix/nombre-fix`: Para solucionar errores urgentes detectados en producción (`main`).


## ✅ Reglas de Colaboración

1. **Clonar el repositorio y crear rama desde `develop`.**
2. **Nombrar la rama siguiendo GitFlow (`feature/`, `release/`, `hotfix/`).**
3. **Hacer commits claros y descriptivos.**
4. **Subir la rama al repositorio remoto.**
5. **Abrir un Pull Request hacia `develop` (o `main` solo si es hotfix).**
6. **Esperar revisión y aprobación antes de fusionar.**

---

## 🧪 Revisión de Código

Antes de enviar un Pull Request:
- Verifica que tu código no tenga errores (valida en navegador).
- Revisa ortografía y presentación (HTML/CSS/JS legible).
- No subas imágenes innecesarias ni archivos temporales.

---


## 🗣️ Comunicación

- Usa **Issues** de GitHub para reportar problemas, sugerencias o dividir tareas.
- Participa en las revisiones de código y brinda feedback a tus compañeros.
- Avisa al equipo antes de fusionar ramas importantes (como `release` o `hotfix`).

---

## 🙋 Dudas o Problemas

Si tienes dudas técnicas o sobre el flujo de trabajo, escríbelo en los Issues del repositorio para recibir ayuda del equipo.

---

