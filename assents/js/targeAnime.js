const render=({image,name,species,status,gender})=>{

    const template=
    `
    <div class="card_anime">
    <img src="${image}" alt="${name}">
    <div class="card_text">
    <h2>Nombre: ${name} </h2>
    <div class="footer__card">
    <h3>${gender}</h3>
    <p>${species} || ${status}</p>
    </div>
    </div>
    </div>
    `
    return template
}
export default render;