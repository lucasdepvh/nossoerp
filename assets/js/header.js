
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
}

// Chama a função para carregar o header quando a página for carregada
document.addEventListener('DOMContentLoaded', loadHeader);
