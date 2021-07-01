import {Matrix} from './matrix'



let matriz1 = new Matrix(2,3,[[2,3,4],[5,6,7]]);

matriz1.printMatrix();
matriz1.writeMatrix("matriz1");

let matriz2 = matriz1.readMatrix("matriz2");
console.log(matriz2.getM())
console.log(matriz2.getN());
//matriz2.printMatrix();





