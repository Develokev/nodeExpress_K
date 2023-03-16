//Funcion que hace el fetch a USERS
const urlBase = 'http://localhost:3000/api/v1'

//Petition
const petition = async(url,method,body={}) => {
    let options={}
    
    try {
        if(method=='post' || method=='put'){
            //const {servicio,descripcion}=body
            console.log('Fetching --> Post or Put methods')
            const data={...body};
                options={
                    method:method,
                    body:JSON.stringify(data),
                    headers:{
                        'Content-type':'application/json'
                    }
                }
        }
        // if(method=='delete'){
        //     console.log('Fetching --> DELETE method')
        //     options={
        //         method: method, //mirar si hay que mandar mas cosas en el delete
        //     }
        // }
        // if(method=='get'){
        //     console.log('Fetching --> GET method')
        //     options={
        //         method: method,
        //     }
        // }
        
          let respuesta= await fetch(`${urlBase}/${url}`,options);

          if(respuesta.ok){
            console.log('Fetch done correctly')
            resp=respuesta.json()
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