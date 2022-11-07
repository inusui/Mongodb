# InsertMany

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
