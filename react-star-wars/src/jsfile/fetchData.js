export default function fetchData(url,setError,setLoading){
    let rawData=null
    fetch(url)
        .then(response =>{ if(response.ok)
        return response.json();
        throw response
    })
            .then(data=> rawData= data)
        .catch(error =>{ 
            console.log("Error has occurred: " ,error)
            setError(error);
        })
        .finally(() =>{setLoading(false)
            console.log(rawData)
        return rawData});
        console.log (rawData)
    setTimeout(() =>{console.log(rawData)},500)
    return rawData
}