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
function multiplexarAsc(){
    
    A3 = document.getElementById("A3").value; A2 = document.getElementById("A2").value; A1 = document.getElementById("A1").value;
    B3 = document.getElementById("B3").value; B2 = document.getElementById("B2").value; B1 = document.getElementById("B1").value;
    C3 = document.getElementById("C3").value; C2 = document.getElementById("C2").value; C1 = document.getElementById("C1").value;

    document.getElementById("TR1S").value = A1S; document.getElementById("TR2S").value = B1S; document.getElementById("TR3S").value = C1S;
    document.getElementById("TR4S").value = A2S; document.getElementById("TR5S").value = B2S; document.getElementById("TR6S").value = C2S;
    document.getElementById("TR7S").value = A3S; document.getElementById("TR8S").value = B3S; document.getElementById("TR9S").value = C3S;
   
}
function demultiplexarAsc(){
    alert("Demultiplexar Sícrono");
}

