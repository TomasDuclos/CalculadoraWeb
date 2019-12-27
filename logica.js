var n1;
var n2;
var operando;
var isResult;

function init(){
    //variables
    var resultado=document.getElementById('resultado');
    var cancelar=document.getElementById("cancelar");
    var suma=document.getElementById("suma");
    var resta=document.getElementById("resta");
    var division=document.getElementById("division");
    var multiplicacion=document.getElementById("multiplicacion");
    var igual=document.getElementById("igual");
    var uno=document.getElementById('uno');
    var dos=document.getElementById("dos");
    var tres=document.getElementById("tres");
    var cuatro=document.getElementById("cuatro");
    var cinco=document.getElementById("cinco");
    var seis=document.getElementById("seis");
    var siete=document.getElementById("siete");
    var ocho=document.getElementById("ocho");
    var nueve=document.getElementById("nueve");
    var cero=document.getElementById("cero");

    uno.onclick= function(e){
        NuevaOperacion();
        resultado.textContent=resultado.textContent + 
        "1";
    }    
    dos.onclick= function(e){     
        NuevaOperacion();
        resultado.textContent=resultado.textContent + 
        "2";
    }
    tres.onclick= function(e){    
        NuevaOperacion(); 
        resultado.textContent=resultado.textContent + 
        "3";
    }
    cuatro.onclick= function(e){    
        NuevaOperacion(); 
        resultado.textContent=resultado.textContent + 
        "4";
    }
    cinco.onclick= function(e){ 
        NuevaOperacion();    
        resultado.textContent=resultado.textContent + 
        "5";
    }
    seis.onclick= function(e){   
        NuevaOperacion();  
        resultado.textContent=resultado.textContent + 
        "6";
    }
    siete.onclick= function(e){   
        NuevaOperacion();  
        resultado.textContent=resultado.textContent + 
        "7";
    }
    ocho.onclick= function(e){    
        NuevaOperacion(); 
        resultado.textContent=resultado.textContent + 
        "8";
    }
    nueve.onclick= function(e){     
        NuevaOperacion();
        resultado.textContent=resultado.textContent + 
        "9";
    }
    cero.onclick= function(e){     
        NuevaOperacion();
        resultado.textContent=resultado.textContent + 
        "0";
    }
    cancelar.onclick= function(e){     
        resetear();
    }
    function resetear(){
        resultado.textContent=null;
        n1=null;
        n2=null;
        operando=null;
    }
    function NuevaOperacion(){
        if(resultado.textContent!=null & isResult==true){
            resultado.textContent=null;
        }
    }

    suma.onclick= function(e){     
        if(resultado.textContent!=null){
            n1=resultado.textContent;
            operando="+";
            resultado.textContent=null;
            isResult=false;
        }      
    }
    resta.onclick= function(e){     
        if(resultado.textContent!=null){
            n1=resultado.textContent;
            operando="-";
            resultado.textContent=null;
            isResult=false;
        }      
    }
    multiplicacion.onclick= function(e){     
        if(resultado.textContent!=null){
            n1=resultado.textContent;
            operando="*";
            resultado.textContent=null;
            isResult=false;
        }      
    }    
    division.onclick= function(e){     
        if(resultado.textContent!=null){
            n1=resultado.textContent;
            operando="/";
            resultado.textContent=null;
            isResult=false;
        }      
    }
    igual.onclick= function(e){     
        debugger;
        if(resultado.textContent!=null & operando!=null ){
            n2=resultado.textContent;
            if(operando=="+"){

                resultado.textContent=null;
                resultado.textContent =parseInt(n1)+parseInt(n2);       
                isResult=true;        
            }
            else if(operando=="-"){
                resultado.textContent=null;
                resultado.textContent =parseInt(n1)-parseInt(n2);   
                isResult=true;
            }
            else if(operando=="*"){
                resultado.textContent=null;
                resultado.textContent =parseInt(n1)*parseInt(n2);   
                isResult=true;
            }
            else if(operando=="/"){
                resultado.textContent=null;
                resultado.textContent =parseFloat(n1)/parseFloat(n2);
                isResult=true;
            }

        }      
    }


}