document.getElementById('btnAddJogo').addEventListener('click', function(){
    
    //criando constantes com o id dos elementos
    const cadastraJogo = document.getElementById('cadastraJogo');
    const listaJogos = document.getElementById('listaJogos');
    const jogo = cadastraJogo.value;

    if (jogo.trim() !== ""){
        const li = document.createElement('li');
        li.textContent = jogo;
        listaJogos.appendChild(li);
        //Salvar no localStorage (implementar ainda)
        cadastraJogo.value = "";
        salvaJogos();  
       
    }

    function salvaJogos(){
        const listaJogos = document.getElementById('listaJogos');
        let jogos = [];

        for (let i = 0; listaJogos.children.length; i++){
            jogos.push(listaJogos.children[i].textContent);
        }

        localStorage.setItem('jogos',JSON.stringify(jogos));
    }

    function carregarJogos(){
        const jogos = JSON.parse(localStorage.getItem('jogos') || []);
    }



});