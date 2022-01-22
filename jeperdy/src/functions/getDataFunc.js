import axios from 'axios'
const url ='http://jservice.io/api/random'
export default function getData(setQuestion,setAnswer,setJeoperdy){
  
    axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  })
    .then((response) =>{
      setQuestion(response.data[0].question)
      setAnswer(response.data[0].answer)
      setJeoperdy(response.data[0])
    })
    .catch((error) =>console.log(error))
  }