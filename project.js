{/* Task 4
    Create a small HTML page with the following features:

1. A button that, when clicked, changes the text of a heading (use JavaScript to manipulate the DOM).
2. Add some basic CSS to style the page and button (you can use inline or external CSS).
3. Ensure the page looks presentable (though it doesn’t need to be extensively styled, just functional).

Feel free to be creative, but the focus should be on clean code and basic functionality.
    
*/}

// some variation when clicked but I need someone to store it
let buttonClicker = 0;

function changeHeadingText() {
    const heading = document.getElementById('heading');
    heading.textContent = 'Goodnight'

}

document.getElementById('changeText').onclick = function() {
    buttonClicker++; // count gets incremented 

    greetingMessages(); //change heading text when clicked
}


function greetingMessages() {
    const heading = document.getElementById('heading');
   
    // change the heading text for every click
    switch(buttonClicker) {
        case 1:
            heading.textContent = "Good Morning";
            break;
        case 2:
            heading.textContent = "Good Afternoon";
            break;
        case 3:
            heading.textContent = "Good Evening";
            break;
        case 4:
            heading.textContent = "Good Night";
            break;
            default:
                heading.textContent = 'Pleasure to have you.'
                break;
    }
}

