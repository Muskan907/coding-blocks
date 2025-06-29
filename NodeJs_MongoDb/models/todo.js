// it is the only thing that interact with the database and it is only connected to the database
const {getDB}=require("..database/database")

getDB().collection();