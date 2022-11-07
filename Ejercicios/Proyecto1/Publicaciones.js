use redes;
show collections;
db.publicaciones.insertMany([
{"Fecha_Publicacion": new Date(), "Reacciones": 200, "Compartidos": 185, "Comentarios":2, "Remitente":"Juan"},
{"Fecha_Publicacion": new Date(), "Reacciones": 1, "Compartidos": 0, "Comentarios":1, "Remitente":"Carlos"},
{"Fecha_Publicacion": new Date(), "Reacciones": 8450, "Compartidos": 3000, "Comentarios":100, "Remitente":"Venus"},
{"Fecha_Publicacion": new Date(), "Reacciones": 700, "Compartidos": 5, "Comentarios":650, "Remitente":"Jeniffer"},
{"Fecha_Publicacion": new Date(), "Reacciones": 50, "Compartidos": 30, "Comentarios":20, "Remitente":"Lucas"}
])

db.publicaciones.createIndex({"Comentarios":1})
db.publicaciones.find({"Compartidos":{"$gte":150}}).pretty();
// db.registro.dropIndex({"Email":1})

db.registro.getIndexes();
db.registro.find().pretty();
