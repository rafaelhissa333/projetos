function Verificar(){      
    
    
    var cliente = document.getElementById('selecao_1')
    var cliente = cliente.options[cliente.selectedIndex].text

    var procedimento = document.getElementById('procedimento')
    var procedimento = procedimento.options[procedimento.selectedIndex].text

    var exame = document.getElementById('exame')
    var exame = exame.options[exame.selectedIndex].text

    var res = document.getElementById('res')

    var nasc = document.getElementById('nasc')
    var nasc = String(nasc.value)

    var ano_nasc = Number(nasc.substr(0,4))
    var mes_nasc = Number(nasc.substr(5,2))
    var dia_nasc = Number(nasc.substr(8,2))
    
    var ano_atual = Number(new Date().getFullYear())
    var mes_atual = (new Date().getMonth()) + 1
    var dia_atual = Number(new Date().getDate())

    var idade = ano_atual - ano_nasc
    
    res.innerHTML = `<p>${cliente}</p>`
    res.innerHTML += `<p>${procedimento}</p>`
    res.innerHTML += `<p>${exame}</p>`

    var janela = window.open('','','with=800, height=600')
    janela.document.write('<html><head>')
    janela.document.write('<title>Laudo</title></head>')
    janela.document.write('<body>')
    janela.document.write('')
    janela.document.write('</body></html>')
    
    

    if((mes_nasc - mes_atual <= 0) && (dia_nasc - dia_atual >= 0)){

        
        
    }else{


    }
    
    return false
}