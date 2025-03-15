

// Loop through all buttons.

document.querySelectorAll("button").forEach(button => {   
button.addEventListener("click", handleButtonClick); 
});                                                         // listens to all buttons for a click event




function handleButtonClick(event) {
    let display = document.querySelector('.calculator-screen').value;  // Get the value of the display
    let value = event.target.innerText;                                // Get the text of the clicked button
    
    if(value === "AC") {                                                
        clearDisplay(); 
                                                      
    }
    
    else if(value === "=") {
        calculateResult();
    }

    else if(value ==="⌫"){
        handleButtonClick(false)
        backButton();
    }
    
    else {
        display += value;                                                // Concatenate the value of the clicked button to the display
        document.querySelector('.calculator-screen').value = display;    // Display the new value
    };
};




function clearDisplay(){
    document.querySelector('.calculator-screen').value = "";
    
}



function backButton(){
    
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    let display = document.querySelector('.calculator-screen');
    
    try{  
        let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/").replace(/√(\d+)/g, "Math.sqrt($1)").replace(/(\d+)%/g, "$1/100");
        // Evaluate the expression
        display.value = eval(expression);                                   // Display the result

    }
    
    catch (error) {
        display.value = "Error";                                              // Handles invalid expressions
        };

    };
    
    
    
    const images = [
        "url('./images/image3.jpg')",
        "url('./images/image5.jpg')",
        "url('./images/image6.jpg')",
        "url('./images/image8.jpg')",
        "url('./images/image9.jpg')",
        "url('./images/image11.jpg')",
        "url('./images/image12.jpg')",
        "url('./images/image26.jpg')",
        "url('./images/image31.jpg')",
        "url('./images/image32.jpg')",
        "url('./images/image39.jpg')",
        "url('./images/image44.jpg')",
        "url('./images/image49.jpg')",
        "url('./images/image52.jpg')",
        "url('./images/image53.jpg')",
        "url('./images/image54.jpg')",
        "url('./images/image55.jpg')",
        "url('./images/image56.jpg')",
        "url('./images/image57.jpg')",
        ];
            
    let index = 0;                                                              // Initialize index
            
    function changeBackground() {
        const bgElement = document.getElementById("newBackground");
            bgElement.style.backgroundImage = images[index];                
            index++
            if(index >= images.length) index = 0;                          // Loop back to the first image after the last one
        };
            
            // Start changing the background every second (10000ms) after page loads
    window.onload = function () {
        setInterval(changeBackground, 10000);
        };






    


