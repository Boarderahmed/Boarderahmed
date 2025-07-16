showMyTransaction.style.display = "none"
showMyHistory.style.display = "none"
showMySettings.style.display = "none"
showMyFaq.style.display = "none"
Trans1.style.color = "black"
Try.style.color = "black"
Stn.style.color = "black"
faq.style.color = "black"

// function pressMe1(){
//     showMyTransaction.style.display="block"
//     showMyHistory.style.display="none"
//     showMySettings.style.display="none"

//    Trans1.style.backgroundColor = "blue"
//     Try.style.backgroundColor = "black"
//     Stn.style.backgroundColor = "black"
// }

// function pressMe2(){
//     showMyTransaction.style.display="none"
//     showMyHistory.style.display="block"
//     showMySettings.style.display="none"

//     Trans1.style.backgroundColor = "black"
//     Try.style.backgroundColor = "blue "
//     Stn.style.backgroundColor = "black"
// }

// function pressMe3(){
//     showMyTransaction.style.display="none"
//     showMyHistory.style.display="none"
//     showMySettings.style.display="block"

//     Trans1.style.backgroundColor = "black"
//     Try.style.backgroundColor = "black"
//     Stn.style.backgroundColor = "blue"
// }

// Parameter Method

function pressMe(press) {
    if (press == "transactions") {
        showMyTransaction.style.display = "block"
        showMyHistory.style.display = "none"
        showMySettings.style.display = "none"
        showMyFaq.style.display = "none"

        Trans1.style.backgroundColor = "blue"
        Try.style.backgroundColor = "black"
        Stn.style.backgroundColor = "black"
        faq.style.backgroundColor = "black"
    }
    if (press == "history") {
        showMyTransaction.style.display = "none"
        showMyHistory.style.display = "block"
        showMySettings.style.display = "none"
        showMyFaq.style.display = "none"

        Trans1.style.backgroundColor = "black"
        Try.style.backgroundColor = "blue"
        Stn.style.backgroundColor = "black"
        faq.style.backgroundColor = "black"
    }
    if (press == "settings") {
        showMyTransaction.style.display = "none"
        showMyHistory.style.display = "none"
        showMySettings.style.display = "block"
        showMyFaq.style.display = "none"

        Trans1.style.backgroundColor = "black"
        Try.style.backgroundColor = "black"
        Stn.style.backgroundColor = "blue"
        faq.style.backgroundColor = "black"
    }
    if (press == "questions") {
        showMyTransaction.style.display = "none"
        showMyHistory.style.display = "none"
        showMySettings.style.display = "none"
        showMyFaq.style.display = "block"

        Trans1.style.backgroundColor = "black"
        Try.style.backgroundColor = "black"
        Stn.style.backgroundColor = "black"
        faq.style.backgroundColor = "blue"
    }


    // tabs //


    //     // bulbBtn.innerHTML = "ON"
    //     // function handleSwitch() {
    //     //     if (bulbBtn.innerHTML == "ON") {
    //     //         Lightbulb.innerHTML = '<img src ="./images/bulb2.gif">'
    //     //         bulbBtn.innerHTML = "OFF"
    //     //     }
    //     //     else if (bulbBtn.innerHTML == "OFF") {
    //     //         Lightbulb.innerHTML = '<img src ="./images/pic_bulboff.gif">'
    //     //         bulbBtn.innerHTML = "ON"
    //     //         bulbBtn.style.borderRadius = "0.5em"
    //     //     }
    //     // }{

}
//  if(press == "Enquiry"){
//         biggy1.value.display = "flex"
//         make1.value.display = "flex"
//     }












