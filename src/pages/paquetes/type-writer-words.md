---
title: "Type-writer-words" 
description: "Componente que simula el efecto de maquina de escribir"
layout: "../../layouts/LayoutMarkdown.astro"
---

# type-writer-words 

[visitar en npm]

[visitar en npm]: <https://www.npmjs.com/package/type-writer-words>

### type-writer-words es un componente que simula el efecto de maquina de escribir 

### Instalacion

Instala con npm: 

```js
 npm install type-writer-words
```
<br />

## Uso

### Uso del componente TypeWriter 


```js
  import {TypeWriter} from "type-writer-words"
  
  function App () {
  const arrWords = ["Coding", "with", "react", "and", "typescript"]
  return (
    <TypeWriter words={arrWords} />
  )
}

```
<br />

### Uso con más props 

```js
  import {TypeWriter} from "type-writer-words"
  
  function App () {
  const arrWords = ["Coding", "with", "react", "and", "typescript"]
  return (
    <TypeWriter words={arrWords} cursor={"line"} color={"#000"} typingSpeed={200} deletingSpeed={200} wordPause={3000} deletePause={3000} />
  )
}

```
<br />
<br />

### Props

| Prop | Valor | Por defecto|
| ------ | ------ |------|
| words | array de strings |[] Array|
| cursor | "default" y "line" |"default" string|
| typingSpeed | tiempo de escritura|100 number|
| deletingSpeed |  tiempo de eliminación | 100 number|
| wordPause | tiempo de pausa para empezar a eliminar |2000 number|
| deletePause | tiempo de pausa para empezar a escribir |2000 number|
| color | color de texto |"#000" string|

<br />
<br />

### Probar

Ejecuta y visita localhost

```js
  npm run dev
```
<br />

