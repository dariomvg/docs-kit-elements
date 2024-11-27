---
title: "Eff-anim" 
description: "Es un componente que recibe múltiples <b>animaciones</b> para la aparición en la página"
layout: "../../layouts/LayoutMarkdown.astro"
---

# eff-anim

[visitar en npm]

[visitar en npm]: <https://www.npmjs.com/package/eff-anim>

### eff-anim es un componente donde le puedes pasar distintas animaciones para la vista usando el viewport

## Instalacion

Instala con npm: 

```js
 npm install eff-anim 
```
<br />

## Nota

### contiene múltiples efectos(animaciones) que le puedes pasar al componente

| Nombre | animación |
| ------ | ------ |
| eff-left | Se traslada de izquierda a posición normal |
| eff-right | Se traslada de derecha a posición normal |
| eff-bottom |Se traslada de abajo a posición normal |
| eff-top | Se traslada de arriba a posición normal |
| eff-zoom | effecto zoom desde el fondo de la pantalla |
| eff-z-left | effecto zoom y traslado de izquierda a normal |
| eff-z-right | effecto zoom y traslado de derecha a normal |
| eff-z-top | effecto zoom y traslado de arriba a normal |
| eff-z-bottom |effecto zoom y traslado de abajo a normal |
| eff-flip| effecto flip desde posición normal |
| eff-f-left |effecto flip y traslado de izquierda a normal |
| eff-f-right | effecto flip y traslado de derecha a normal |
| eff-f-top | effecto flip y traslado de arriba a normal |
| eff-f-bottom | effecto flip y traslado de abajo a normal |

<br />

## Props y uso

### Props

- *children:* componente contenedor
- *effect:* nombre de la animación a usar
- *threshold:* altura de la vista del contenedor para la animación

<br />

### Uso

```js
import { ContainerViews } from "eff-anim";

  function App() {

  return (
    <ContainerViews threshold={0.9} effect="eff-zoom">
        <h1>Hello World</h1>
        <p>Programming with react + typescript</p>
    </ContainerViews> 
  );
};
```
<br />

### Probar

Ejecuta y visita localhost

```js
  npm run dev
```
<br />
