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

var A3 = null; var A2 = null; var A1 = null;
var B3 = null; var B2 = null; var B1 = null;
var C3 = null; var C2 = null; var C1 = null;
var vector = new Array();
function guardarDatosAsc(){

    A3 = document.getElementById("7").value; A2 = document.getElementById("4").value; A1 = document.getElementById("1").value;
    B3 = document.getElementById("8").value; B2 = document.getElementById("5").value; B1 = document.getElementById("2").value;
    C3 = document.getElementById("9").value; C2 = document.getElementById("6").value; C1 = document.getElementById("3").value;

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

    //Se muestran los datos en la trama.
    for(var i=1; i<=vector.length; i++){
        if( i != vector.length){
            document.getElementById("TR"+(i)).value = vector[i];
        }
    }

}
function demultiplexarAsc(){

    document.getElementById("A3AS").value = document.getElementById("7").value; 
    document.getElementById("A2AS").value = document.getElementById("4").value; 
    document.getElementById("A1AS").value = document.getElementById("1").value;
    document.getElementById("B3AS").value = document.getElementById("8").value; 
    document.getElementById("B2AS").value = document.getElementById("5").value; 
    document.getElementById("B1AS").value = document.getElementById("2").value;
    document.getElementById("C3AS").value = document.getElementById("9").value; 
    document.getElementById("C2AS").value = document.getElementById("6").value; 
    document.getElementById("C1AS").value = document.getElementById("3").value;
    
}

