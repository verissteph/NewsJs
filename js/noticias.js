//trazendo as info numa função e armazenando na variavel p trabalharmos.
// function pegarNoticias() {
//     let noticias = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=82e74070f02b4a2498324d600607c30f')
//         .then((resposta) => {
//             return resposta.json()
//         })
//         .then((dadosEmJson) => {
//             console.log(dadosEmJson)
//             dadosEmJson.articles.forEach((dados, posicao) => {
//                 console.log("O titulo é: " + dados.title)
//                 console.log("A descrição é: " + dados.description)
//                 console.log("O link da imagem é: " + dados.urlToImage)
//             });
//         })
//     console.log(noticias)
// }
let containerDeNoticias = document.querySelector('#listaDeNoticias')
async function pegarNoticias() {

    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=82e74070f02b4a2498324d600607c30f');
    let listaDeNoticias = await noticias.json();

    listaDeNoticias.articles.forEach((dados) => {
        let coluna = document.createElement('div');
        coluna.setAttribute('class', 'col-3');

        let card = document.createElement('div');
        card.setAttribute('class', 'card');

        let imgCard = document.createElement('img')
        imgCard.setAttribute('class', 'card-img-top')
        imgCard.setAttribute('src', dados.urlToImage);

        let bodyCard = document.createElement('div')
        bodyCard.setAttribute('class', 'card-body');

        let titleCard = document.createElement('h5')
        titleCard.setAttribute('class', 'card-title');
        titleCard.textContent = dados.title;

        let descriptionCard = document.createElement('p')
        descriptionCard.setAttribute('class', 'card-text');
        descriptionCard.textContent = dados.description;

        let linkCard = document.createElement('a')
        linkCard.setAttribute('class', 'btn btn-primary');
        linkCard.setAttribute('href', dados.url);
        linkCard.textContent = "Ir para noticia";

        card.appendChild(imgCard);
        card.appendChild(bodyCard);
        bodyCard.appendChild(titleCard);
        bodyCard.appendChild(descriptionCard);
        bodyCard.appendChild(linkCard);

        coluna.appendChild(card);

        containerDeNoticias.appendChild(coluna)



    })



    console.log(listaDeNoticias);
}