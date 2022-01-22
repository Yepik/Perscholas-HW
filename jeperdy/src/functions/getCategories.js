import axios from 'axios'
let offset = 0

export default function getCategries(setCategories,offsetCat) {
    offset=offsetCat
    
    const url =`http://jservice.io/api/categories?count=10&&offset=${offset}`
    axios({
        method: 'get',
        url: url,
      })
        .then((response) =>{
            setCategories(response.data)
        })
        .catch((error) =>console.log(error))

}