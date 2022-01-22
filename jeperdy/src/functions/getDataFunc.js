import axios from 'axios'
const url ='http://jservice.io/api/random'
export default function getData(setQuestion,setAnswer,setJeoperdy,setCategory){
    
    axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  })
    .then((response) =>{
      setQuestion(response.data[0].question)
      setAnswer(response.data[0].answer)
      setJeoperdy(response.data[0])
      setCategory({title:response.data[0].category.title,id:response.data[0].category.id})
    })
    .catch((error) =>console.log(error))
  }