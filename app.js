//date logic
document.querySelector(".year").innerHTML = new Date().getFullYear() 

// Target menu button
const menu_btn = document.querySelector(".menu-btn")

// add event listener to the menu button
menu_btn.addEventListener("click", slideout)

function slideout(){
    document.querySelector("nav").classList.toggle("slide")
    menu_btn.classList.toggle("change-bg")
}

// logic for calculating interest

// target the form

document.querySelector("form").addEventListener('submit', calculate_interest)

function calculate_interest(event){
    event.preventDefault()  //prevent the submission of the form from refreshing the page



    let borrowed_amount = document.querySelector(".borrowed-amount").value
    let payment_duration = document.querySelector(".duration").value
    let rate = 0.2

    // check if user enter valid input for borrowed amount
    if(borrowed_amount === ""){
        alert("borrowd amount feild cannot be empty!")
    }


    else if(payment_duration === ""){
        alert("payment duration field cannot be empty")
    }

    else{
        let interest = (Number(borrowed_amount) * Number(payment_duration) * rate) / 12
        let amount = Number(borrowed_amount) + interest
    


    // target the h1 display interest
    document.querySelector(".interest").innerHTML = interest.toFixed(1)
    // target the h1 that display the amount
    document.querySelector(".amount").innerHTML = amount


    // set the display property value for the result

    document.querySelector(".result").style.display = "flex"
    document.querySelector("form").style.display = "none"

    }
}


document.querySelector(".close-result").addEventListener('click', close_result)
function close_result(){
    //   hide result
        document.querySelector(".result").style.display = "none"


    //   bring out the form
        document.querySelector("form").style.display = "flex"

}







