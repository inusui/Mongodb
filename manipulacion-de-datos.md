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



### Eliminar una Coleccion

```
db.coleccion.drop()
```

Dropea una coleccion en su totalidad



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



