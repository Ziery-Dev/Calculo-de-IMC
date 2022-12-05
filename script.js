


function mostrar(){
     
     let peso = document.getElementById('input-peso').value //pega o valor do peso
     let altura = document.getElementById('input-altura').value //pega o valor da altura

     if(peso> 0 && altura > 0 && altura < 3 && peso < 450){
          
          document.getElementById('tela-1').className='display-none' //altera a classe do container para não exibir o input peso e altura
          document.getElementById('tela-2').className='display-ativo' //altera a classe para que seja exibido o resultad
     
          let calculo = peso / (altura * altura) //realiza o cálculo e armazena na variavel
          let calculo_exibir = Math.floor(calculo) //valor do calculo que será exibido na tela

          let local_resultado = document.getElementById('resultado') //pega o local onde será exibido o resultado

          if(calculo < 18.5){
               local_resultado.innerHTML = `${calculo_exibir} </br> Você está abaixo do peso ideal.` 
          }

          else if(calculo < 25){
               local_resultado.innerHTML = `${calculo_exibir} </br> Você está no peso ideal.`
          }
          else if (calculo < 30){
               local_resultado.innerHTML = `${calculo_exibir} </br> Você está levemente acima do peso.`
          }
          else if (calculo < 35){
               local_resultado.innerHTML = `${calculo_exibir} </br> Você está com obesidade grau 1.`
          }
          else if (calculo < 40){
               local_resultado.innerHTML = `${calculo_exibir} </br> Você está com obesidade grau 2 (severa).`
          }
          else if (calculo >= 40){
               local_resultado.innerHTML = `${calculo_exibir} </br> Você está com obesidade grau 3 (mórbida).`
          }

     }
     else{
          alert('Insira valores de peso e altura válidos!')
          document.getElementById('input-altura').value = ''
          document.getElementById('input-peso').value = ''
     }

}


function voltar(){
     location.reload()
}



 