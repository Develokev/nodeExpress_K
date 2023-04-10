//Funcion que hace el fetch a USERS
const urlBase = 'http://localhost:3000/api/v1'

//Petition
const petition = async(url, method, body={}) => {
    let options={}
    const data={...body};
    console.log('esto es la URL del fetch', url)

    try {
        if(method=='post' || method=='put' || method=='delete'){
            
            console.log('Fetching --> Post or Put methods')
            
                options={
                    method:method,
                    body:JSON.stringify(data),
                    headers:{
                        'Content-type':'application/json'
                    }
                }
        }
        
          let respuesta= await fetch(`${urlBase}/${url}`,options);

          if(respuesta.ok){
            console.log('Fetch done correctly')

            const resp=await respuesta.json()   
            
             return resp
          }else{
            throw ('FAILED to fetch from server')
          }
          
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    petition
}