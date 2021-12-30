import './styles.css';

//const mensaje = 'Bienvenidos - Webpack Configuración Inicial';

//saludar( mensaje );

const buscador = document.querySelector("#search");

    //Arreglo de vendedores para buscar por DNI
    var vendedores = [
            {
            "nombre" : "Esteban",
            "apellido" : "Lopez",
            "dni" : "12345678"
            },
            {
            "nombre" : "Carlos",
            "apellido" : "carlino",
            "dni" : "22222222"
            },
            {
            "nombre" : "Juan",
            "apellido" : "Perez",
            "dni" : "11111111"
            },
            {
            "nombre" : "Cecilia",
            "apellido" : "Quezada de la Fuente",
            "dni" : "33333333"
            },

        ];

    buscador.addEventListener("keyup", function(e) {       

        //solo busco cuando se ingresaron 8 digitos
        if (buscador.value.length === 8){

            //busco el valor ingresado en el arreglo de objetos declarado al principio
            const vendedor = vendedores.find(vendedor => vendedor.dni === buscador.value);

            //si encuentra un resultado
            if (vendedor !== undefined) {
                //imprimo la respuesta positiva
                document.getElementById("respuesta").innerHTML = "<div class='exito'>Vendedor: <b>"+ vendedor.nombre + " " + vendedor.apellido +"</b><br>El DNI " + vendedor.dni + " pertenece a un vendedor de wwwlaguiatucuman.com</div>";
                //cambio el color del fondo
                document.querySelector(".frame") === null ? null : document.querySelector(".frame").className = "frame_exito";
            } else {
                //imprimo respuesta negativa
                const respuesta_negativa = "<div class='error'>El DNI " + buscador.value + " no pertenece a ningún vendedor de wwwlaguiatucuman.com</div>";
                document.getElementById("respuesta").innerHTML = respuesta_negativa;
            }

                
        } else {
            //si no hay 8 digitos en el input limpio la respuesta
            document.getElementById("respuesta").innerHTML = "";   
            //retorno el color del fondo al original si es que encontré antes un valor exitoso.         
            document.querySelector(".frame_exito") === null ? null : document.querySelector(".frame_exito").className = "frame";




        } 

    });
