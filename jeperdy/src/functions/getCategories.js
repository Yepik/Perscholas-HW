import axios from 'axios'
let offset = 0
const url =`http://jservice.io/api/categories?count=10&&offset=${offset}`
export default function getCategries(setCategories,offsetCat) {
    offset=offsetCat
    axios({
        method: 'get',
        url: url,
      })
        .then((response) =>{
            console.log(response)
        })
        .catch((error) =>console.log(error))

}