const ObtenerAnimes=async()=>{
  
    try {
        const Apirest=await axios.get('https://rickandmortyapi.com/api/character') 
        
    const res=Apirest
    const data=res.data
    console.log(data)
    } catch (error) {
        console.log(error)
    }
    }
    export default ObtenerAnimes;
    