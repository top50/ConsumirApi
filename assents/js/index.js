import render from "./targeAnime.js";
let page=1
const ObtenerAnimes=async()=>{
    const Api=`https://rickandmortyapi.com/api/character/?page=${page}`
    const response= await axios.get(Api);
   
    const data= response.data.results        

    const card_pers=document.querySelector('.card_pers');
    
    card_pers.innerHTML="";
    data.map(character=>{    
        card_pers.innerHTML += render({
        image: character.image,
        name:  character.name,
        gender: character.gender,
        species:character.species,
        status:character.status
    })

}).className=('animate__animated animate__backInDown');
   
}


const next=document.getElementById('next'),
        prev=document.getElementById('prev'),
       numpage=document.getElementById('nunpage')
next.addEventListener('click',(e)=>{
e.preventDefault();
    if(page < 48){
        page+=1
        ObtenerAnimes();
    }
   numpage.innerHTML=page
})
prev.addEventListener('click',(e)=>{
    e.preventDefault();
    if(page > 1){
        page-=1
        ObtenerAnimes();
      
    }
    numpage.innerHTML=page
})

        export default ObtenerAnimes();




