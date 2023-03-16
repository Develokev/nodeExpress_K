//Funcion que hace el fetch a USERS
const urlBase = 'http://localhost:3000/api/v1'

//Petition
const petition = async(url,method,body={}) => {
    let options={}
    
    try {
        if(method=='post' || method=='put'){
            //const {servicio,descripcion}=body
           const data={...body};
             options={
                method:method,
                body:JSON.stringify(data),
                headers:{
                    'Content-type':'application/json'
                }
            }
        }
        if(method=='delete'){
            options={
                method: method, //mirar si hay que mandar mas cosas en el delete
            }
        }
        if(method=='get'){
            // options={
            //     method: method,
            // }
        }
          console.log(`${urlBase}/${url}`)
          console.log(method)
         let respuesta= await fetch(`${urlBase}/${url}`,options);

          if(respuesta.ok){
            console.log(respuesta.ok)
            respuesta=respuesta.json()
          return respuesta
          }else{
            throw ('error en el fetch')
          }
          
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = {
    petition
}