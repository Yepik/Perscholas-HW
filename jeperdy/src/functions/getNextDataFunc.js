import axios from 'axios'
export default function getNextData(setQuestion,setAnswer,setJeoperdy,category){
   
    let urlNext=`http://jservice.io/api/category?id=${category.id}`
    axios({
    method: 'get',
    url: urlNext,
    responseType: 'stream'
  })
    .then((response) =>{

      setQuestion(response.data.clues[0].question)
      setAnswer(response.data.clues[0].answer)
      setJeoperdy(response.data.clues[0]
        )
    })
    .catch((error) =>console.log(error))
  }