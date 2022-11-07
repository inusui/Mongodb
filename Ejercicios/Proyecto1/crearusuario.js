db.createUser({
    user:"usuario2",
    pwd: " ",
    roles:[{role:"read", db:"redes"}]
})

db.getUsers();