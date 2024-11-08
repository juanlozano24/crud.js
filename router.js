const express = require('express');
const router = express.Router();
const conexion = require('./databases/db');


router.get('/', (req ,res)=>{
   
    conexion.query('SELECT * FROM users', (error, results)=>{
        if (error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    })
})

/**RUTA PARA CREAR DATOS*/

router.get('/create', (req, res)=>{
    res.render('create');
})

const crud = require('./controllers/crud');
router.post('/save', crud.save)

/**RUTA PARA EDITAR DATOS*/

router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT *')
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;
