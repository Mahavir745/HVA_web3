const easyArr = []
const mediumArr = []
const hardArr = []
const fetchquestion = []
let found = false
let playerinfo = {}

let allQuestions

let btn = document.querySelector("button")
let btn2 = document.querySelector("#btn2")
btn.addEventListener("click",()=>{
  let category = document.querySelector("#category").value
  playerinfo["category"] = category
  allQustions(easyArr,mediumArr,hardArr,playerinfo)
})



btn2.addEventListener("click",()=>{
  console.log(allQuestions)
})

function allQustions(easyArr,mediumArr,hardArr,playerinfo){

  fetch("https://the-trivia-api.com/v2/questions/")
  .then((data)=>{
    return data.json()
  })
  .then((data)=>{
    data.forEach((ele)=>{
      if(ele.difficulty === "easy" && ele.category === playerinfo["category"]){

        let question = {
          questionName: ele.question,
          correctAns: ele.correctAnswer,
          incorrectAns: ele.incorrectAnswers,
          difficulty: ele.difficulty,
          score: 10
        }
        easyArr.push(question)
        found = true
      }
      else if(ele.difficulty === "medium" && ele.category === playerinfo["category"]){

        let question = {
          questionName: ele.question,
          correctAns: ele.correctAnswer,
          incorrectAns: ele.incorrectAnswers,
          difficulty: ele.difficulty,
          score: 15
        }
        mediumArr.push(question)
      }

      else if(ele.difficulty === "hard" && ele.category === playerinfo["category"]){

        let question = {
          questionName: ele.question,
          correctAns: ele.correctAnswer,
          incorrectAns: ele.incorrectAnswers,
          difficulty: ele.difficulty,
          score: 20
        }
        hardArr.push(question)
      }
    })

    console.log(found)

    if(easyArr.length >=2 && mediumArr.length >=2 && hardArr.length >=2 ){

      let easyQues = easyArr.splice(0,2)
      let mediumQues = mediumArr.splice(0,2)
      let hardQues =hardArr.splice(0,2)
      allQuestions = [...easyQues,...mediumQues,...hardQues]
      console.log("fetched over")
    }
    else{
      allQustions(easyArr,mediumArr,hardArr,playerinfo)
    }

  })
  
}
