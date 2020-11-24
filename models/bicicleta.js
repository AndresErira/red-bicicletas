var Bicicleta = function(id, color, modelo, ubicacion){
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function(){
    return 'id: '+ this.id +'color: '+this.color;
}
Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
        Bicicleta.allBicis.push(aBici);
}

/*var a = new Bicicleta(1, 'rojo', 'urbana', [3.4282738, -76.4700004,17]);
var b = new Bicicleta(2, 'blanco', 'urbana', [3.4282738, -76.4700004]);

Bicicleta.add(a);
Bicicleta.add(b);*/

Bicicleta.findById = function(aBiciId){
    var aBici = Bicicleta.allBicis.find(x=>x.id==aBiciId);
    
    if(aBici)
        return aBici;
    else
        throw new Error(`no existe una bicicleta con el id ${aBiciId} o ${aBici}`);
}
Bicicleta.removeById = function(aBiciId){
   // Bicicleta.findById(aBiciId); Esta line no es necesaria ya que el for hace la busqueda y compara para eliminar
    for(var i=0; i<Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}

module.exports = Bicicleta; 