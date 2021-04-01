var A3S = null; var A2S = null; var A1S = null;
var B3S = null; var B2S = null; var B1S = null;
var C3S = null; var C2S = null; var C1S = null;
function gurdarDatosSc(){
 
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

function multiplexarAsc(){

    for(var i=1; i<=vector.length; i++){
        if(vector[i] == "" && vector[i+1] != "" ){
            vector[i] = vector[i+1];
             vector.splice((i+1),1);
        }else{
            if(vector[i+1] == "" && vector[i+2] != "" ){
                vector[i] = vector[i+2];
                vector.splice((i+2),1);
            }else{
                if(vector[i+2] == "" && vector[i+3] != "" ){
                    vector[i] = vector[i+3];
                    vector.splice((i+3),1);
                }else{
                    if(vector[i+3] == "" && vector[i+4] != "" ){
                        vector[i] = vector[i+4];
                        vector.splice((i+4),1);
                    }else{
                        if(vector[i+4] == "" && vector[i+5] != "" ){
                            vector[i] = vector[i+5];
                            vector.splice((i+5),1);
                        }else{
                            if(vector[i+5] == "" && vector[i+6] != "" ){
                                vector[i] = vector[i+6];
                                vector.splice((i+6),1);
                            }else{
                                if(vector[i+6] == "" && vector[i+7] != "" ){
                                    vector[i] = vector[i+7];
                                    vector.splice((i+7),1);
                                }else{
                                    if(vector[i+7] == "" && vector[i+8] != "" ){
                                        vector[i] = vector[i+8];
                                        vector.splice((i+8),1);
                                    }else{
                                        if(vector[i+8] == "" && vector[i+9] != "" ){
                                            vector[i] = vector[i+9];
                                            vector.splice((i+9),1);
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
    for(var i=1; i<=vector.length; i++){
        console.log(vector[i]);
        document.getElementById("TR"+(i)).value = vector[i];
    }

    //console.log(A1+" "+A2+" "+A3+" "+B1+" "+B2+" "+B3+" "+C1+" "+C2+" "+C3);

    /*document.getElementById("TR1").value = A1; document.getElementById("TR2").value = B1; document.getElementById("TR3").value = C1;
    document.getElementById("TR4").value = A2; document.getElementById("TR5").value = B2; document.getElementById("TR6").value = C2;
    document.getElementById("TR7").value = A3; document.getElementById("TR8").value = B3; document.getElementById("TR9").value = C3;
    */
}
function demultiplexarAsc(){

    document.getElementById("A3AS").value = document.getElementById("TR7").value; 
    document.getElementById("A2AS").value = document.getElementById("TR4").value; 
    document.getElementById("A1AS").value = document.getElementById("TR1").value;
    document.getElementById("B3AS").value = document.getElementById("TR8").value; 
    document.getElementById("B2AS").value = document.getElementById("TR5").value; 
    document.getElementById("B1AS").value = document.getElementById("TR2").value;
    document.getElementById("C3AS").value = document.getElementById("TR9").value; 
    document.getElementById("C2AS").value = document.getElementById("TR6").value; 
    document.getElementById("C1AS").value = document.getElementById("TR3").value;
    
}

