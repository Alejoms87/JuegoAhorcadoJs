// Juego del Ahorcado


let seguirJugando = true

while(seguirJugando){
        
    let jugador = prompt("Para comenzar a jugar ingrese su nombre")
    
    let pregunta = prompt("Bienvenido " + jugador + " queres jugar con pistas ? (si o no)")
        
    let palabra = "JavaScript"
    
    
    if(pregunta.toLocaleLowerCase() === "si"){
        
        let pistas = 5

        for(let i = 0; i < 5; i++) {

            let intento = prompt("Tienes un total de " + pistas + " pistas" + "\nEs un lenguaje de programacion")
            if(palabra.toLocaleLowerCase() === intento.toLocaleLowerCase()){
                alert("Felicitaciones " + jugador + " adivinaste la palabra")
                break
            }
            else{
                alert("No, esa no es la palabra")
                pistas--

                if (pistas > 0) {
                    alert ("Te quedan " + pistas + " pistas")
                    
                    switch (pistas) {
                        case 4:
                            alert("Pista: Este lenguaje es utilizado en desarrollo web")
                            break;
                            
                        case 3:
                            alert("Pista: Se utiliza para darle interactividad al usuario")
                            break;
                        case 2:
                            alert("Pista: HTML es conocido como el 'Esqueleto', CSS es conocido como 'El Cuerpo' y este lenguaje es conocido como 'El Cerebro'")
                            break;
                        case 1:
                            alert ("Ultima pista: Empieza con una J y tiene una S a mitad de su nombre")
                            break    
                    }
                }
            }

            if(pistas === 0){
                alert("Te quedaste sin pistas, la palabra era: " + palabra)
                break
            }
        }

    }else if(pregunta.toLocaleLowerCase() === 'no'){
        alert("Ok, vamos a jugar sin pistas")

        let intentosRestantes = 5

        for(let i = 0; i< 5; i++){

            let intento = prompt("Es uno de los lenguajes de programacion mas conocidos")

            if(palabra.toLocaleLowerCase() === intento.toLocaleLowerCase()){
                alert ("Felicitaciones " + jugador + "adivinaste la palabra")
                break
            }
            else{
                alert("No, esa no es la palabra, te quedan " + intentosRestantes + " intentos")
                if(intentosRestantes === 2){
                    alert("Te queda el ultimo intento")
                }
                intentosRestantes--
                
                if(intentosRestantes === 0){
                    alert ("Te quedaste sin intentos, la palabra era: " + palabra)
                    break
                }
            }
        }

    }else{
        alert(" has ingresado una opcion incorrecta")
            
    }

    let terminarJuego = prompt("Quiere seguir jugando? Ingrese: si o no")

    if(terminarJuego.toLocaleLowerCase() === 'si'){
        seguirJugando = true
    }else if(terminarJuego.toLocaleLowerCase() === 'no'){
        seguirJugando = false
        alert("Has salido del juego")
    }else{
        alert("Por favor ingrese una opcion correcta")
    }
}