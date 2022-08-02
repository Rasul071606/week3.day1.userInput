let submitBtn = document.getElementById("submit_button")


submitBtn.onclick = function(event){
    event.preventDefault()

    let titleResponseBox = document.getElementById("title_input")
    let titleResponseValue = titleResponseBox.value

    let nounResponseBox = document.getElementById("noun")
    let nounResponseValue = nounResponseBox.value 

    let verbResponseBox = document.getElementById("verb")
    let verbResponseValue = verbResponseBox.value

    let adjectiveResponseBox = document.getElementById("adjective")
    let adjectiveResponseValue = adjectiveResponseBox.value 
    
    let currentTitle = document.getElementById("main_title")
    let currentStory = document.getElementById("story_result")

    currentTitle.innerHTML = titleResponseValue

    if(titleResponseValue==""||nounResponseValue==""||verbResponseValue==""||adjectiveResponseValue==""){
        alert("Please fill out all fields")
    }
    else{
        let displayNone = document.getElementsByClassName("form_container")
        displayNone[0].style.display = "none"
        currentStory.innerHTML = "Today, I got stuck inside of a " + nounResponseValue + " and since that happened, I had to " + verbResponseValue + ". Needless to say, today was a very " + adjectiveResponseValue + " day."
    }


}