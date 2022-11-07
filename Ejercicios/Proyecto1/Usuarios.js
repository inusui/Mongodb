//use redes;
insert = [
{"Name":"Juan", "Apellido": "Martinez" , "Email":"juan@mail.com", "Estado":"A", "Fecha_nacimiento":"22-4-2019", "Registro": new Date() },
{"Name":"Carlos", "Apellido":"Perez", "Email":"carlos@mail.com", "Estado":"A", "Fecha_nacimiento":"01-12-2016","Registro": new Date() },
{"Name":"Jeniffer", "Apellido":"Saavedra", "Email":"jeniffer@mail.com", "Estado":"A", "Fecha_nacimiento":"25-09-2005", "Registro": new Date() },
{"Name":"Venus", "Apellido":"Slytherin", "Email":"venus@mail.com", "Estado":"A", "Fecha_nacimiento":"14-02-1998", "Registro": new Date() },
{"Name":"Mario", "Apellido":"Almanza", "Email":"mario@mail.com", "Estado":"A", "Fecha_nacimiento":"31-10-2001", "Registro": new Date() }
];
db.usuarios.insertMany(insert);
db.usuarios.find().pretty();

db.usuarios.createIndex({"Estado":1})
db.usuarios.getIndexes()