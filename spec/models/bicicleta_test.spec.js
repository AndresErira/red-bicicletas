var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');

describe('Testing Bicicletas', function(){
    beforeAll(function(done){
        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, {useNewUrlParser:true, useUnifiedTopology: true });

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection Error: '));
        db.once('open', function(){
            console.log('We are to connected to database!');
            done();
        });
    });
    
    afterEach(function(done){
        Bicicleta.deleteMany({}, function(err, success){
            if (err) console.log('Error en el afterEach: '+err);
            done();
        });
    });

    describe('Bicicleta.createInstance', ()=>{
        it('crea una instancia de Bicicleta', ()=>{
            var bici = Bicicleta.createInstance(1, "verde", "urbana", [-34.5, -54.1] );
          
            expect(bici.code).toBe(1);
            expect(bici.color).toBe("verde");
            expect(bici.modelo).toBe("urbana");
            expect(bici.ubicacion[0]).toEqual(-34.5);
            expect(bici.ubicacion[1]).toEqual(-54.1);
            
        })
    });

    describe('Bicicleta.allBicis',()=>{
        it('comienza vacia ', (done)=>{
            Bicicleta.allBicis(function(err, bicis){
                expect(bicis.length).toBe(0);
                done();
            });
        });
    });
    describe('Bicicleta.add',()=>{
        it('Agrega solo una bici', (done)=>{
            var aBici = new Bicicleta({code:1, color: "verde", modelo: "urbana"});
            Bicicleta.add(aBici, function(err, newBici){
                if(err)console.log(err);
                Bicicleta.allBicis(function(err, bicis){
                    expect(bicis.length).toEqual(1);
                    expect(bicis[0].code).toEqual(aBici.code);

                    done();
                });
            });
        });
    });
    describe('Bicicleta.findByCode',()=>{
        it('Debe devolver la bici con code 1',(done)=>{
            Bicicleta.allBicis(function(err, bicis){
                expect(bicis.length).toBe(0);

                var aBici= new Bicicleta({code:1, color: "verde", modelo:"urbana"});
                Bicicleta.add(aBici, function(err, newBici){
                    if(err) console.log(err);
                    var aBici2= new Bicicleta({code:2, color: "roja", modelo:"urbana"});
                Bicicleta.add(aBici2, function(err, newBici){
                    if(err) console.log(err);
                });
                Bicicleta.findByCode(1, function(error, targetBici){
                    expect(targetBici.code).toBe(aBici.code);
                    expect(targetBici.color).toBe(aBici.color);
                    expect(targetBici.modelo).toBe(aBici.modelo);

                    done();
                });
                });
                
            });

        });
    });

    describe('Bicicleta.removeByCode',()=>{
        it('Debe eliminar un registro',(done)=>{
            Bicicleta.allBicis(function(err, bicis){
                expect(bicis.length).toBe(0);

                var aBici= new Bicicleta({code:1, color: "verde", modelo:"urbana"});
                Bicicleta.add(aBici, function(err, newBici){
                    if(err) console.log(err);
                });
               
                Bicicleta.removeByCode(1, function(error, bici){
                    console.log(bici);
                    expect(bici.deletedCount).toBe(0);
                    done();
                });
            });

        });
    });




});

/*

describe("Descripcion", ()=>{
        it('descripcion', (done)=>{
            //sentencias
            expect("datos de entrada").toBe("datos de entrada");
            done();
        });
    }
    );

describe('Bicicleta.allBicis',()=>{
    it('comienza vacia',(done)=>{   
        Bicicleta.allBicis(function(err, bicis){
            console.log("Mostrando callBack"+bicis);
            expect(bicis.length).toBe(0);
            done();
        });
    });
});

/*beforeEach(()=>{ Bicicleta.allBicis=[]; });
describe('Bicicleta.allBicis', ()=>{
    it('Comienza vacia', ()=>{
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});
describe('Bicicleta.add',()=>{
     it('Agregamos una', ()=>{
         expect(Bicicleta.allBicis.length).toBe(0);

         var a = new Bicicleta(1, 'rojo', 'urbana', [3.4282738, -76.4700004,17]);
         Bicicleta.add(a);
         expect(Bicicleta.allBicis.length).toBe(1);
         expect(Bicicleta.allBicis[0]).toBe(a);
     });
});

describe('Bicicleta.findById',()=>{
    it('debe devolver la bici con id 1',()=>{
        expect(Bicicleta.allBicis.length).toBe(0);


        var aBici = new Bicicleta(1, "verde", "urbana");
        var aBici2 = new Bicicleta(2, "Rojo", "urbana");
        Bicicleta.add(aBici);
        Bicicleta.add(aBici2);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    });
});
describe('Bicicleta.Remove',()=>{
    it('debe devolver la bici con ID 0',()=>{
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici = new Bicicleta(1, "verde", "urbana");
        Bicicleta.add(aBici);

        expect(Bicicleta.removeById(aBici.id)).toBe(Bicicleta.allBicis[aBici.id]);
       ;
    });
});
*/