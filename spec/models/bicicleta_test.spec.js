var Bicicleta = require('../../models/bicicleta');

beforeEach(()=>{ Bicicleta.allBicis=[]; });
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
