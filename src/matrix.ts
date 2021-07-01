import * as fs from 'fs';

/**
 * Clase Matrix
 * @param n_ Número de filas
 * @param m_ Número de columnas
 * 
 * Funciones:
 * 
 * @method getN() Devuelve @param n_
 * @method getM() Devuelve @param n_
 * 
 */
export class Matrix {


    private n_: Number;
    private m_: Number;
    private elements_: number[][];

    constructor(n: number, m: Number, elements: number[][]) {

        this.n_ = n;
        this.m_ = m;
        this.elements_ = elements;
    }


    /**
   * Getter de la clase Matrix
   * @returns @param n_ Número de filas
   */
    getN() {
        return this.n_;
    }
    /**
   * Getter de la clase Matrix
   * @returns @param m_ Número de columnas
   */
    getM() {
        return this.m_;
    }

    /**
   * Función readMatrix lee una matriz del usuario y la carga en memoria. Para ello 
   * comprueba que la matriz existe.
   * @param name nombre del fichero que contiene la matriz
   * La función @returns un objeto Matrix con la matriz leída
   * o un mensaje de error si no existe la matriz.
   */
    readMatrix(name: string): Matrix{
        
        let path: string = './matriz';
            
        if (fs.existsSync(path + "/" + name + '.json')) {
            let readMatrixJSON = fs.readFileSync(path + "/" + name + '.json', "utf-8");
            let readMatrix = JSON.parse(readMatrixJSON);

            let aux = new Matrix(readMatrix[0], readMatrix[1], readMatrix[2])
            
            console.log("Matriz leída con éxito");
            return aux;
        }
            else {
            throw Error ("ERROR - No existe una matriz con ese nombre");
        }
    }

    /**
   * Función writeMatrix escribe una matriz a un foichero JSON. Para ello 
   * comprueba que la matriz existe.
   * @param name nombre del fichero que va a contener la matriz
   * La función @returns un mensaje de éxito si ha conseguido guardar
   * o un mensaje de error si no existe la matriz.
   */
    writeMatrix(name: string){

        let path: string = './matriz';
        
        if (fs.existsSync(path)) {
            if (fs.existsSync(path + name + '.json'))
                console.log("ERROR - Ya existe una matriz con ese nombre");
            else {
                let newMatrix = {"n": this.n_, "m": this.m_, "elements": this.elements_};
                let newMatrixJSON = JSON.stringify(newMatrix);
                fs.writeFileSync(path + "/" + name + '.json', newMatrixJSON)
                console.log("Matriz guardada correctamente");
            }
        }
        else {
            fs.mkdirSync(path);
            let newMatrix = {"n": this.n_, "m": this.m_, "color": this.elements_};
            let newMatrixJSON = JSON.stringify(newMatrix);
            fs.writeFileSync(path + "/" + name + '.json', newMatrixJSON)
            console.log("Matriz guardada correctamente");
        }


    }

    /**
   * Función printMatrix. Imprime una matriz por pantalla
   * recorriendo filas y columnas.
   */
    printMatrix() {
        for (let i=0; i<this.n_; i++){
            let aux: string = "";
            for (let j=0; j<this.m_; j++){
                aux += this.elements_[i][j] + " ";
            }
            console.log(aux)
        }


    }

}

