var A3S = null; var A2S = null; var A1S = null;
var B3S = null; var B2S = null; var B1S = null;
var C3S = null; var C2S = null; var C1S = null;
function guardarDatosSc(){
 
    A3S = document.getElementById("A3S").value; A2S = document.getElementById("A2S").value; A1S = document.getElementById("A1S").value;
    B3S = document.getElementById("B3S").value; B2S = document.getElementById("B2S").value; B1S = document.getElementById("B1S").value;
    C3S = document.getElementById("C3S").value; C2S = document.getElementById("C2S").value; C1S = document.getElementById("C1S").value;

}
function multiplexarSc(){
   
    document.getElementById("TR1S").value = A1S; document.getElementById("TR2S").value = B1S; document.getElementById("TR3S").value = C1S;
    document.getElementById("TR4S").value = A2S; document.getElementById("TR5S").value = B2S; document.getElementById("TR6S").value = C2S;
    document.getElementById("TR7S").value = A3S; document.getElementById("TR8S").value = B3S; document.getElementById("TR9S").value = C3S;
    
}
function demultiplexarSc(){

    document.getElementById("A3SC").value = document.getElementById("TR7S").value; 
    document.getElementById("A2SC").value = document.getElementById("TR4S").value; 
    document.getElementById("A1SC").value = document.getElementById("TR1S").value;
    document.getElementById("B3SC").value = document.getElementById("TR8S").value; 
    document.getElementById("B2SC").value = document.getElementById("TR5S").value; 
    document.getElementById("B1SC").value = document.getElementById("TR2S").value;
    document.getElementById("C3SC").value = document.getElementById("TR9S").value; 
    document.getElementById("C2SC").value = document.getElementById("TR6S").value; 
    document.getElementById("C1SC").value = document.getElementById("TR3S").value;
    
}

/*-----------------------------------------------------------------------------------------------------------------------------------------------------*/

var V7 = null; var V4 = null; var V1 = null;
var V8 = null; var V5 = null; var V2 = null;
var V9 = null; var V6 = null; var V3 = null;
var vector = new Array();
var aux = new Array();
function guardarDatosAsc(){

    V7 = document.getElementById("7").value; V4 = document.getElementById("4").value; V1 = document.getElementById("1").value;
    V8 = document.getElementById("8").value; V5 = document.getElementById("5").value; V2 = document.getElementById("2").value;
    V9 = document.getElementById("9").value; V6 = document.getElementById("6").value; V3 = document.getElementById("3").value;

    for(var i=1; i<=9; i++){
        vector[i] = document.getElementById(i).value;
    }

}
function comprobar(){
    //Condicional para ajustar posición si en la fila falta uno o dos valores.
    for(var i=1; i<=9; i++){

        //Primera fila
        if(vector[4] == "" && vector[7] == "" && vector[1] != ""){
            vector[7] = vector[1];
            vector[1] = "";
        }else{
            if(vector[4] == "" && vector[7] != ""){
                vector[4] = vector[1];
                vector[1] = "";
            }else{
                if(vector[7] == "" && vector[4] != ""){
                    vector[7] = vector[4];
                    vector[4] = vector[1];
                    vector[1] = "";
                }
            }
        }

        //Segunda fila
        if(vector[5] == "" && vector[8] == "" && vector[2] != ""){
            vector[8] = vector[2];
            vector[2] = "";
        }else{
            if(vector[5] == "" && vector[8] != ""){
                vector[5] = vector[2];
                vector[2] = "";
            }else{
                if(vector[8] == "" && vector[5] != ""){
                    vector[8] = vector[5];
                    vector[5] = vector[2];
                    vector[2] = "";
                }
            }
        }

        //Tercera fila
        if(vector[6] == "" && vector[9] == "" && vector[3] != ""){
            vector[9] = vector[3];
            vector[3] = "";
        }else{
            if(vector[6] == "" && vector[9] != ""){
                vector[6] = vector[3];
                vector[3] = "";
            }else{
                if(vector[9] == "" && vector[6] != ""){
                    vector[9] = vector[6];
                    vector[6] = vector[3];
                    vector[3] = "";
                }
            }
        }
    }

    for(var i=1; i<=vector.length; i++){
        document.getElementById(""+(i)).value = vector[i];
    }

}
function multiplexarAsc(){

    //Se eliminan las posiciones vacias del vector.
    for(var i=1; i<=vector.length; i++){
        if(vector[1] == ""){
            vector.splice(1, 1);
        }else{
            if(vector[2] == ""){
                vector.splice(2, 1);
            }else{
                if(vector[3] == ""){
                    vector.splice(3, 1);
                }else{
                    if(vector[4] == ""){
                        vector.splice(4, 1);
                    }else{
                        if(vector[5] == ""){
                            vector.splice(5, 1);
                        }else{
                            if(vector[6] == ""){
                                vector.splice(6, 1);
                            }else{
                                if(vector[7] == ""){
                                    vector.splice(7, 1);
                                }else{
                                    if(vector[8] == ""){
                                        vector.splice(8, 1);
                                    }else{
                                        if(vector[9] == ""){
                                            vector.splice(9, 1);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /*Se evalua que valor es el primero para asignrle el respectivo nombre.
    Posición 1*/
    if(vector[1] == V1){
        aux[1] = "A1";
    }else{
        if(vector[1] == V2){
            aux[1] = "B1";
        }else{
            if(vector[1] == V3){
                aux[1] = "C1";
            }
        } 
    }

    if(vector[1] == V4){
        aux[1] = "A2";
    }else{
        if(vector[1] == V5){
            aux[1] = "B2";
        }else{
            if(vector[1] == V6){
                aux[1] = "C2";
            }
        } 
    }

    if(vector[1] == V7){
        aux[1] = "A3";
    }else{
        if(vector[1] == V8){
            aux[1] = "B3";
        }else{
            if(vector[1] == V9){
                aux[1] = "C3";
            }
        } 
    }
    //Posición 2
    if(vector[2] == V1){
        aux[2] = "A1";
    }else{
        if(vector[2] == V2){
            aux[2] = "B1";
        }else{
            if(vector[2] == V3){
                aux[2] = "C1";
            }
        } 
    }

    if(vector[2] == V4){
        aux[2] = "A2";
    }else{
        if(vector[2] == V5){
            aux[2] = "B2";
        }else{
            if(vector[2] == V6){
                aux[2] = "C2";
            }
        } 
    }

    if(vector[2] == V7){
        aux[2] = "A3";
    }else{
        if(vector[2] == V8){
            aux[2] = "B3";
        }else{
            if(vector[2] == V9){
                aux[2] = "C3";
            }
        } 
    }
    //Posición 3
    if(vector[3] == V1){
        aux[3] = "A1";
    }else{
        if(vector[3] == V2){
            aux[3] = "B1";
        }else{
            if(vector[3] == V3){
                aux[3] = "C1";
            }
        } 
    }

    if(vector[3] == V4){
        aux[3] = "A2";
    }else{
        if(vector[3] == V5){
            aux[3] = "B2";
        }else{
            if(vector[3] == V6){
                aux[3] = "C2";
            }
        } 
    }

    if(vector[3] == V7){
        aux[3] = "A3";
    }else{
        if(vector[3] == V8){
            aux[3] = "B3";
        }else{
            if(vector[3] == V9){
                aux[3] = "C3";
            }
        } 
    }
    //Posición 4
    if(vector[4] == V1){
        aux[4] = "A1";
    }else{
        if(vector[4] == V2){
            aux[4] = "B1";
        }else{
            if(vector[4] == V3){
                aux[4] = "C1";
            }
        } 
    }

    if(vector[4] == V4){
        aux[4] = "A2";
    }else{
        if(vector[4] == V5){
            aux[4] = "B2";
        }else{
            if(vector[4] == V6){
                aux[4] = "C2";
            }
        } 
    }

    if(vector[4] == V7){
        aux[4] = "A3";
    }else{
        if(vector[4] == V8){
            aux[4] = "B3";
        }else{
            if(vector[4] == V9){
                aux[4] = "C3";
            }
        } 
    }
    //Posición 5
    if(vector[5] == V1){
        aux[5] = "A1";
    }else{
        if(vector[5] == V2){
            aux[5] = "B1";
        }else{
            if(vector[5] == V3){
                aux[5] = "C1";
            }
        } 
    }

    if(vector[5] == V4){
        aux[5] = "A2";
    }else{
        if(vector[5] == V5){
            aux[5] = "B2";
        }else{
            if(vector[5] == V6){
                aux[5] = "C2";
            }
        } 
    }

    if(vector[5] == V7){
        aux[5] = "A3";
    }else{
        if(vector[5] == V8){
            aux[5] = "B3";
        }else{
            if(vector[5] == V9){
                aux[5] = "C3";
            }
        } 
    }
    //Posición 6
    if(vector[6] == V1){
        aux[6] = "A1";
    }else{
        if(vector[6] == V2){
            aux[6] = "B1";
        }else{
            if(vector[6] == V3){
                aux[6] = "C1";
            }
        } 
    }

    if(vector[6] == V4){
        aux[6] = "A2";
    }else{
        if(vector[6] == V5){
            aux[6] = "B2";
        }else{
            if(vector[6] == V6){
                aux[6] = "C2";
            }
        } 
    }

    if(vector[6] == V7){
        aux[6] = "A3";
    }else{
        if(vector[6] == V8){
            aux[6] = "B3";
        }else{
            if(vector[6] == V9){
                aux[6] = "C3";
            }
        } 
    }
    //Posición 7
    if(vector[7] == V1){
        aux[7] = "A1";
    }else{
        if(vector[7] == V2){
            aux[7] = "B1";
        }else{
            if(vector[7] == V3){
                aux[7] = "C1";
            }
        } 
    }

    if(vector[7] == V4){
        aux[7] = "A2";
    }else{
        if(vector[7] == V5){
            aux[7] = "B2";
        }else{
            if(vector[7] == V6){
                aux[7] = "C2";
            }
        } 
    }

    if(vector[7] == V7){
        aux[7] = "A3";
    }else{
        if(vector[7] == V8){
            aux[7] = "B3";
        }else{
            if(vector[7] == V9){
                aux[7] = "C3";
            }
        } 
    }
    //Posición 8
    if(vector[8] == V1){
        aux[8] = "A1";
    }else{
        if(vector[8] == V2){
            aux[8] = "B1";
        }else{
            if(vector[8] == V3){
                aux[8] = "C1";
            }
        } 
    }

    if(vector[8] == V4){
        aux[8] = "A2";
    }else{
        if(vector[8] == V5){
            aux[8] = "B2";
        }else{
            if(vector[8] == V6){
                aux[8] = "C2";
            }
        } 
    }

    if(vector[8] == V7){
        aux[8] = "A3";
    }else{
        if(vector[8] == V8){
            aux[8] = "B3";
        }else{
            if(vector[8] == V9){
                aux[8] = "C3";
            }
        } 
    }
    //Posición 9
    if(vector[9] == V1){
        aux[9] = "A1";
    }else{
        if(vector[9] == V2){
            aux[9] = "B1";
        }else{
            if(vector[9] == V3){
                aux[9] = "C1";
            }
        } 
    }

    if(vector[9] == V4){
        aux[9] = "A2";
    }else{
        if(vector[9] == V5){
            aux[9] = "B2";
        }else{
            if(vector[9] == V6){
                aux[9] = "C2";
            }
        } 
    }

    if(vector[9] == V7){
        aux[9] = "A3";
    }else{
        if(vector[9] == V8){
            aux[9] = "B3";
        }else{
            if(vector[9] == V9){
                aux[9] = "C3";
            }
        } 
    }

    //Se muestran los datos en la trama.
    for(var i=1; i<=vector.length; i++){
        if( i != vector.length){
            document.getElementById("lb"+(i)).innerHTML = aux[i];
            document.getElementById("TR"+(i)).value = vector[i];
        }
    }

}
function demultiplexarAsc(){

    document.getElementById("A3AS").value = V7; 
    document.getElementById("A2AS").value = V4; 
    document.getElementById("A1AS").value = V1;
    document.getElementById("B3AS").value = V8; 
    document.getElementById("B2AS").value = V5; 
    document.getElementById("B1AS").value = V2;
    document.getElementById("C3AS").value = V9; 
    document.getElementById("C2AS").value = V6; 
    document.getElementById("C1AS").value = V3;
    
}

