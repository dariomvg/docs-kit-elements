---
title: "Format-all-dates" 
description: "Es un conjunto de funciones que devuelven la fecha y horario en múltiples formatos"
layout: "../../layouts/LayoutMarkdown.astro"
---

# Format all dates 

[visitar en npm]

[visitar en npm]: <https://www.npmjs.com/package/format-all-dates>

### format-dates es un conjuntos de funciones dónde devuelven distintos formatos de fechas y horarios

## Temas

- 1- Distintos formatos 
- 2- Hora 

<br />

### Instalacion

Instala con npm: 

```js
 npm install format-all-dates 
```
<br />

### Uso

## format-dates contiene 5 funciones: 

### getFirstDate

```js
  const date = getFirstDate();
  console.log(data); // 11/05/2023
```
<br />

### getSecondDate

```js
  const date = getSecondDate();
  console.log(data); // 4 may 2025
```
<br />

### getShortDate

```js
  const date = getShortDate();
  console.log(data); // 11/06
```
<br />

###  getCompleteDate

```js
  const date = getCompleteDate();
  console.log(data); // Monday, May 5, 2024
```
o se le puede pasar "short" para acortar ese formato

```js
  const date = getCompleteDate("short");
  console.log(data); // Mon 5 May 
```
<br />

### getLocalHour

```js
  const hour = getLocalHour();
  console.log(hour); // 5:05
```
<br />

## Probar

### Ejecuta y visita localhost

```js
  npm run dev
```
<br />
