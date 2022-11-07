/*use comida_rapida

show collections

db.clientes.find().pretty()


db.combos.insertMany([
    {"Combo":1, "Contenido":"Hamburguesa con queso y Bebida", "precio": 2.30},
    {"Combo":2, "Contenido":"Hamburguesa, papas y Bebida", "precio": 5.99},
    {"Combo":3, "Contenido":"Hamburguesa con queso y doble carne y Bebida", "precio":7.30}
  ]);
*/

db.clientes.getIndexes();
db.empleado.find().pretty();
//db.clientes.createIndex({"Apellido":1})

db.clientes.createIndex({"Pedido":1});

db.clientes.find({"Apellido":"Saavedra"}).pretty();

db.combos.find().pretty();

db.combos.createIndex({"Combo":1});

db.empleado.find().pretty()

db.empleado.createIndex({"Apellido":1});