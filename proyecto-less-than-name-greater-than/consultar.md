---
description: es como el select where en SQL
---

# Consultar

### db.coleccion.find()

recolecta todos los registros dentro de la coleccion

![](../.gitbook/assets/imagen.png)

### db.coleccion.find().pretty()

lo mismo, pero mejor estructurado.&#x20;

recomendado para altos volumenes de registros

![](<../.gitbook/assets/imagen (9).png>)



### db.coleccion.find({argumento})

dentro del argumento busco que quiero que me traiga de la coleccion, este seria el where

![](<../.gitbook/assets/imagen (2).png>)

## Consulta multiple

se usan operadores logicos and u or

### Estructura

ojo con las sintaxis de cochetes y llaves

```
db.coleccion.find(
{$operador: [{argumentoA},{argumentoB}] 
});
```

### Ejemplo

![use el pretty para que se vea mejor el resultado](<../.gitbook/assets/imagen (5).png>)



## Consulta la primera sentencia que encuentre

db.coleccion.findOne(argumento)

![](<../.gitbook/assets/imagen (3).png>)

