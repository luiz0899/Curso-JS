
    var adNum = document.getElementById("txtNum")
    var tab = document.getElementById("valAdd")
    var res = document.getElementById("res")
    var tabNum = []
 
        function isnumero ( n ) {
            
            if( Number(n) <= 100 && Number(n) >= 1 ){
                return true
            }else {
                return false
            }
        }

        function inLista (n,l) {
        
            if(l.indexOf(Number(n)) != -1 ) {
                return true
            }else {
                return false
            }

        }

        function addNum() {
            
            if(isnumero(adNum.value) && !inLista(adNum.value , tabNum )){
                
                var item = document.createElement('option')
                tabNum.push(Number(adNum.value))
                item.text = `Foi adicionado o numero ${(adNum.value)} . `
                tab.appendChild(item)
                res.innerHTML = ''

            }else{

                alert('[ERRO]')

            }        
           adNum.value = ''
           adNum.focus()
        }

        function fimAnalize() {

            if (tabNum.length == 0 ){
                alert('[ERRO]')
            }else {

                tabNum.sort()
                var tot = tabNum.length
                var soma = 0
                var media = 0

                for(var pos in tabNum ) {
                
                    soma += tabNum[pos]
                    media = soma / pos

                }
            
                res.innerHTML = ''
                res.innerHTML += `<p> Você tem ${tot} cadastro . </p>`
                res.innerHTML += `<P> Maior numero é ${tabNum[ tabNum.length -1] }`
                res.innerHTML += `<p> Menor numero é ${tabNum[0]}`
                res.innerHTML += `<p> A soma dos valores é de ${soma}`
                res.innerHTML += `<p> A media entre valores é de ${media}` 
            }
        

        }
