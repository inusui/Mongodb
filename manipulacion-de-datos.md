---
description: Recuerda inciar el Servidor desde la Shell
---

# Manipulacion de Datos

## InsertMany()

Lo mejor seria Asignarlo a una variable para luego agregarlo.

Entre registros va una ,&#x20;

variableAInsertar = \[{Registro1},{Registro2}]

_El registro que se va insertar es una lista por lo tanto va entre \[]_

_Los Registros Individuales irian entre {}_

```
insertar = [
    {
     "Nombre":"Roberto",
     "Edad":21 
    },
    {
    "Nombre":"Jeniffer",
    "Edad":23
    }
]
db.insertar.insertMany(insertar)
db.insertar.find()
```

#### Ejercicio#1

Inserta 5 Registros con Nombre, Genero, Edad, Fecha

```
datosAInsertar = [
{ "Nombre":"Antonio", "Genero":"M", "Edad":15, "Fecha":new Date()},
{ "Nombre":"Luna", "Genero":"F", "Edad":8, "Fecha":new Date()},
{ "Nombre":"Lucho", "Genero":"M", "Edad":2, "Fecha":new Date()},
{ "Nombre":"Lucas", "Genero":"M", "Edad":3, "Fecha":new Date()},
{ "Nombre":"Venus", "Genero":"F", "Edad":2, "Fecha":new Date()}
]

db.tarea1.insert(datosAInsertar)
```

### Eliminar una Coleccion

```
db.coleccion.drop()
```

Dropea una coleccion en su totalidad

* Es recomendable eliminar por un identificador unico del registro
* Si se tienen 2 registros con el mismo "nombre" se eliminan todos
* por ello no se elimina por "nombre" sinó por identificador unico del registro.

```
db.coleccion.remove(parametros)
```

ejemplo:

```
db.delete.remove({"_id":1})
```

#### Limpiar Colecciones

```
db.coleccion.remove({})
```

###

### Borrar Colecciones&#x20;

Elimina todos los registros de las coleccciones

#### bash

```
db.coleccion.drop()
```

Dropea la Coleecion, devuelve un **True**

****

****





### Elimina un Registro

```
db.coleccion.remove(registro)
```



### Actualizar datos

Es recomendable hacerlo antes en una variable

```
DatoACambiar = db.coleccion.findOne("IdentificadorUnico")
DatoACambiar.Nombre = "Juan"
```

Se le esta cambiando el Nombre a "Juan", pero aqui solo se cambia en la variable no en el registro, hay que guardarlo.

```
db.coleccion.save(DatoACambiar)
```

_con save se guarda el cambio_

__

### Actualizar Datos con Update

_db.COLLECTION\_NAME.update(SELECTION\_CRITERIA, UPDATED\_DATA)_

```
db.insertar.update(
{"Nombre":"Juan"},
{$set:
    {'Edad':22}
})
```

Es importante el `$set` ya que sin el, se pierde el primer dato el identificador, en este caso. perderiamos el registro de "Nombre":"Juan"



