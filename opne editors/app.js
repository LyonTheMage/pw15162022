/*


//base de datos
//parametros de conexion 
let conexion=mysql.createConnection({
    host:'localhost',
    user: 'pw'
    password: '12345678'
    databse: 'pw'
})
conecion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('Conectado a la bd')
    }
})

app.get('/',function(req,res){
    res.send('Ruta de inicio');
})

//Ruta a todos los articulos
app.get('/api/articulos',function(req,res){
    conexion.query("select * from articulos",function(error,filas){
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})
//ruta articulo
app.get('/api/articulos/:id',function(req,res){
    conexion.query("select * from articulos where id=?",[req.params.id],function(error,fila){
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})


//Ruta para agregar un articulo
app.post('/api/articulos',function(req,res){
    let data = {descripcion:req.body.description,
        precio:req.body.precio,
        cantidad:req.body.cantidad}
    let sql = "insert into articulos set ?"
    conexion.query(sql,data,function(error,results){
        if(error){
            throw error
        }else{
            res.sendd(results)
        }
    })
})
//que el cliente frontedn pueda usar API
let cors = require('cors')
let app = express()

//para recibir datos json
app.use(express.json())

//ruta para actualizar un articulo
app.put('/api/articulos/:id'function(req,res){
    let id = req.params.id
    let description = req.body.descripcion
    let precio = req.body.precio
    let cantidad = req.body.cantidad
    let sql = "update articulos set descripcion = ?,precio =?,cantidad =? where id = ?";
    conexion.query(sql,[descripcion,precio,cantidad,id],
        function(error,results){
            if(error){
                throw error
            }else{
                res.send(results)
            }
        })
})

//Ruta para eliminar un articulo
app.delete('/api/articulos/:id',function(req,res){
    let id = req.params.id
    conexion.query('delete from articulos where id =?',[id],function(error,results){
        if(error){
            throw error
        }else{
            res.send(results)
        }
    });
})




*/




















