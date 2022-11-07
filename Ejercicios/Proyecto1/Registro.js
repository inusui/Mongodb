// use redes;
db.registro.insertMany([
{"Name":"Juan", "Apellido": "Martinez" , "Email":"juan@mail.com", "Password":"juan123", "Fecha_nacimiento":"22-4-2019", "Telefono":456123456, "Registro": new Date() },
{"Name":"Carlos", "Apellido":"Perez", "Email":"carlos@mail.com", "Password":"carlos123", "Fecha_nacimiento":"01-12-2016", "Telefono":789456132, "Registro": new Date() },
{"Name":"Jeniffer", "Apellido":"Saavedra", "Email":"jeniffer@mail.com", "Password":"123", "Fecha_nacimiento":"25-09-2005", "Telefono":951357465, "Registro": new Date() },
{"Name":"Venus", "Apellido":"Slytherin", "Email":"venus@mail.com", "Password":"123", "Fecha_nacimiento":"14-02-1998", "Telefono":159763245, "Registro": new Date() },
{"Name":"Mario", "Apellido":"Almanza", "Email":"mario@mail.com", "Password":"123", "Fecha_nacimiento":"31-10-2001", "Telefono":357895123, "Registro": new Date() }
])

db.registro.createIndex({"Email":1},{unique:true})
// db.registro.dropIndex({"Email":1})

db.registro.getIndexes();
db.registro.find().pretty();
