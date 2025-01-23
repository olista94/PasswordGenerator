# Password Generator App

## Descripción

Una aplicación minimalista creada con React y Electron que permite generar contraseñas seguras de manera sencilla. Los usuarios pueden personalizar la longitud y los tipos de caracteres incluidos (números, símbolos, mayúsculas y minúsculas). Además, la fortaleza de la contraseña se muestra en un indicador visual, y la contraseña generada puede ser copiada al portapapeles con un solo clic.

## Características

- Generación de contraseñas seguras.
- Personalización de longitud (de 8 a 32 caracteres).
- Inclusión opcional de números, símbolos, mayúsculas y minúsculas.
- Indicador visual de la fortaleza de la contraseña:
  - Fuerte: Verde
  - Media: Amarillo
  - Débil: Rojo
- Diseño minimalista con Material UI.
- Integración con Electron para crear un ejecutable de escritorio.

##  Requisitos del sistema

- Node.js (versión 14 o superior).
- npm o yarn.
- Sistema operativo: Windows, macOS o Linux.

##  Instalación

1. Clona este repositorio:
```
git clone https://github.com/olista94/PasswordGenerator
cd password-generator-app
```
2. Instala las dependencias:
```
npm install
```
3. Construye la aplicación React:
```
npm run build
```
4. Ejecuta la aplicación en modo desarrollo:
```
npm start
```
5. Para empaquetar la aplicación como ejecutable, usa Electron Packager:
```
npx electron-packager . PasswordGenerator --platform=win32 --arch=x64 --out=dist --overwrite
```
##  Uso

1. Abre la aplicación.
2. Ajusta la longitud de la contraseña utilizando la barra deslizante.
3. Selecciona las opciones de inclusión (números, símbolos, mayúsculas, minúsculas).

4. Haz clic en el botón Generar Contraseña.

5. Observa la fortaleza de la contraseña generada.

6. Haz clic en el ícono de copiar para copiar la contraseña al portapapeles.
