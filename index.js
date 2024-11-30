let express = require('express');
let dotenv = require('dotenv');
let sequelize = require('./config/bd');
let libroRoutes = require('./routes/libroRoutes');
//let usuarioRoutes = require('./routes/usuarioRoutes');



dotenv.config();
const app = express();
const port = process.env.PORT   // Asegúrate de que el puerto sea 2000

app.use(express.json());

app.use('/api', libroRoutes);
//app.use("/api",usuarioRoutes);


let startDB = async () => {
    try {
        await sequelize.sync();
        console.log('Base de datos sincronizada');
        app.listen(port, () => {
            console.log(`El servidor está corriendo en http://localhost:${port}`);
        });
    } catch (e) {
        console.log('Error al conectar con la base de datos');
    }
};

startDB();
