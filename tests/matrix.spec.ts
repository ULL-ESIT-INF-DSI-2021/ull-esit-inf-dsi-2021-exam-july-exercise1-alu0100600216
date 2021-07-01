import 'mocha';
import {expect} from 'chai';
import {Matrix} from '../src/Matrix';

describe('test clase matrix', () => {
  
  it('Se crea un objeto', () => {
    let matriz1 = new Matrix(2,3,[[2,3,4],[5,6,7]]);
    expect(matriz1.getN()).to.be.equal(2);
    expect(matriz1.getN()).to.be.equal(3);
  });

  it('Imprime', () => {
    let matriz1 = new Matrix(2,3,[[2,3,4],[5,6,7]]);
    expect(matriz1.printMatrix()).to.be.equal("2 3 4 5 6 7 ");

  });

  it('lee desde archivo', () => {
    let matriz2 = new Matrix();
    matriz2.readMatrix("matriz2");
    expect(matriz2.getN).to.be.equal(3);
    expect(matriz2.getM).to.be.equal(2);
  });

  it('guarda a archivo', () => {
    let matriz1 = new Matrix(2,3,[[2,3,4],[5,6,7]]);
    matriz1.writeMatrix("matriz1");
  });
});
