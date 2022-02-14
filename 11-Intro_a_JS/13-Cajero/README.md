## LocalStorage

```js
// Crear 'key' en localStorage
localStorage.setItem('key', 'value');

// Obtener 'key' del localStorage
localStorage.getItem('key');

// Quitar 'key' del localStorage
localStorage.removeItem('key');

// Quita todo del localStorage
localStorage.clear();
```

## Variable global

```js
let variable = 'valor';

function hola() {
  console.log(variable); // 'variable' es accesible desde cualquier lugar o funcion
}

// executar hola()
```

## Pasar variable en funcion

```js
function loggerVariable(variable) {
  console.log(variable);
}

function hola() {
  let numero = 5; // la variable 'numero' es accesible solo desde la funcion 'hola'
  loggerVariable(numero);
}

// executar hola()
```

## Array push

```js
cuentas = [];

cuentas.push('luis');

cuentas.push('juan');

// cuentas = ['luis', 'juan']
```
