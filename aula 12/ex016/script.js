function contar() { 

    var  numInd = document.getElementById("txtIni")
    var numFim = document.getElementById("txtfim")
    var numPas = document.getElementById("txtPas")
    var resul = document.getElementById("res")
    

    if (numFim.value.length == 0 || numInd.value.length == 0  || numPas.value.length == 0) {
        
        window.alert("[ERRO] Obrigatorio todos os campos, tente novamente! ")
       
    } else {

        resul.innerHTML = 'Resultado :'

        var i = Number(numInd.value)
        var f = Number(numFim.value)
        var p = Number(numPas.value)
        
        if ( i < f)
           
            for (var r = i ; r <= f ; r += p ) {

                resul.innerHTML += ` 👉 ${r} `

        }else{
            
            for(var r = i; r >= f ; r -= p )
                
                resul.innerHTML += `👉 ${r}`

        }

        resul.innerHTML += `\u{1F3C1}`
    }

}