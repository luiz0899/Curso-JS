function contar() {

    var num = document.getElementById("numTab")
    var tab = document.getElementById("selTab")
   
    var n = Number(num.value)
   
    if (num.value.length == 0 || n == null ) {
      
        alert('[ERRO]')

    }else{
        
        var r = 0 
        tab.innerHTML = ''

        for(var c = 1 ; c <=10 ; r =  c++ ){

            var item = document.createElement('option')
            
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
         

        }


    }

}