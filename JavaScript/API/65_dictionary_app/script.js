
let submit_btn = document.querySelector("#submit_btn")

submit_btn.addEventListener("click",()=>{
  let value = document.querySelector("#input_field").value
  let word_name = document.querySelector("#word_name")
  let display = document.querySelector(".output_display")
  let meaning = document.querySelector("#Meaning")
  let synonmys = document.querySelector("#synonmys")
  let antonyms = document.querySelector("#antonyms")
  let more_example = document.querySelector("#more_example")
  word_name.textContent = value


  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`)
  .then((data)=>{
    return data.json()
  })
  .then((data)=>{
    let res = data[0].meanings
    let slenght = 0, dlenght = 0;
    let alenght = 0

    res.forEach((ele)=>{

      if(ele["synonyms"].length > slenght){
        slenght = ele["synonyms"].length
        synonmys.innerHTML = `${ele["synonyms"]}`
      }
      if(ele["definitions"].length > dlenght){
        dlenght = ele["definitions"].length
        meaning.innerHTML = `${ele["definitions"][0].definition}`
      }

      if(ele["antonyms"].length > alenght){
        alenght = ele["antonyms"].length
        antonyms.innerHTML = `${ele["antonyms"]}`
      }
    })
  })
  .catch(()=>{
    console.log("Data Not Found")
  })


})

