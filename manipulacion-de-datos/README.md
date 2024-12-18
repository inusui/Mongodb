---
description: Recuerda inciar el Servidor desde la Shell
---

# Manipulacion de Datos

## InsertMany()



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



