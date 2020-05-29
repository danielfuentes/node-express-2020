const fs = require('fs');
const path = require('path');

const heroes = JSON.parse(fs.readFileSync(path.resolve(__dirname , '../models/heroes.json')));

const webController = {
    index: function(req,res){
        let contenido = '​Ni Superman, Iron  Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como  inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en  ti!.';
        res.send(contenido);
    },
    indexHeroes : function(req,res){
        let resultado = "";
        for (const heroe of heroes) {
            //resultado += ' * '+ heroe.nombre + ' '+ heroe.profesion+'<br>';
            resultado +=  ` <h2> ${heroe.nombre}  ------  ${heroe.profesion} </h2> `;
        }
        res.send(resultado);
    }

}
module.exports = webController;
