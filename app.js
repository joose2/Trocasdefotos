var botao = document.getElementById('clique');

botao.onclick = function(){
    if(botao.value === 'troca'){
        p1.src = 'trofeucr7.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        p1.src = 'novacr7.jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}