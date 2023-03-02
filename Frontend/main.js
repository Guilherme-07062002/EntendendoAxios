const url = "http://localhost:3000/list"
const url2 = "http://localhost:3000/register"

function listar() {
    axios.get(url)
        .then(response => {
            const data = response.data
            console.log(data.length)
            let dados = []
            for (let index = 0; index < data.length; index++) {
                dados.push(data[index].nome)
                
            }
            console.log(dados)
            dados.forEach(element => {
                const container = document.createElement('p');
                container.setAttribute('class', 'container');
                container.textContent = element;
                renderApiResult.appendChild(container);

            });
            // const data = JSON.stringify(response.data[0].nome)
            // const data2 = JSON.stringify(response.data[1].nome)
            // renderApiResult.textContent = data + data2

        })
        .catch(error => console.log(error))
}
function registrar() {
    
    nome = document.getElementById('name').value
    senha = document.getElementById('password').value
    
    axios.post(url2, {
        nome: nome,
        senha: senha

    })
        .then(response => {
            alert('Usuário cadastrado!')
        })
        .catch(error => console.log(error))
}

listar()