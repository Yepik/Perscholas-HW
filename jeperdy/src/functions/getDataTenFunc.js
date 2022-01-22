import axios from 'axios'
const url ='http://jservice.io/api/random?count=10'
export default function getData(setQuestions,setAnswer,setJeoperdy,setCategory){
  console.log(setJeoperdy)
    axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  })
    .then((response) =>{
      setQuestions(response.data[0].question)
      setAnswer(response.data[0].answer)
      setJeoperdy(response.data[0])
      setCategory({title:response.data[0].category.title,id:response.data[0].category.id})
    })
    .catch((error) =>console.log(error))
  }