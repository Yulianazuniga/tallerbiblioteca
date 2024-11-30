let usuario = require('../models/usuario')
let Libro = require('../models/libro')
let Prestamo = require('../models/prestamo')

class UsuarioService{
    static async traerLibros(){
        try{
            //findAll
            let traerl=await tarea.findAll();//todo
            return traerl;
        }catch(e){
            console.log("Error ", e);
        }
    }


    static async registrarLibro(datos){o
        try{
            let registrarL =Libro.create(datos);
            return registrarL;
        }catch(e){
            return({error:"registro no creado "})
        }
    }
}
module.exports =UsuarioService;