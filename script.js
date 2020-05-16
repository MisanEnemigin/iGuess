const alphaBtns = document.getElementsByClassName("alphaBtn");
const word_dash = document.getElementById("word_dash");
const hint = document.getElementById("hint");

// Words and Their Hints
const level1 = {
    words: ["PYTHON", "STRING", "MOVIES", "TELEVISION", "LAPTOP", "APPLE", "TRAIN", "RIGHT", "FLASH", "RUN"],
    hints: ["Animal, Code, Reptile", "Music, Datatype, Thread", "Action, Comedy, Stories", "Black, Movies, Rectangle", "Coding, Typing, Office", "I-Products, Fruits, Evil-Queen", "Transport, Teach, Rail", "Priviledge, Left, Direction", "USB, Short-Call, Speed", "Speed, Execute, Sport"],
}
let num = 0
let getAnswer = 0;

const game = () => {
    // Variable to know if User gets the answer

    // Save Words and Hints in Individual Variables
    const words_var = level1.words
    const hints_var = level1.hints

    word_dash.style.color = "White";
    // Random Number that Selects Words and Hints at Random
    
    // Getting the Dashes from Words Length
    dash_array = [];
    let in_word_length = words_var[num].length;
    for (m = 0; m < in_word_length; m++) {
        dash_array.push("_")
    }
    let dash = dash_array.join("")
    word_dash.innerHTML = dash;

    // Getting the Hints
    hint.innerHTML = `Hints: ${hints_var[num]}`



    // Setting the Timer
    const elem = document.getElementById("bar");
    let width = 1;
    const frame = () => {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
    let id = setInterval(frame, 300);

    // Saving Word in Variable
    let main_word = words_var[num];

    // Converting the Word to Array
    m_word_arr = main_word.split("");

    // Getting Number of Hints and Displaying them in the Hint Paragraph
    const hint_p = document.getElementById("hint_p");
    const hintBtn = document.getElementById("useHint");
    let hint_num = 5;
    hint_p.innerHTML = `Hints Remaining: ${hint_num}`
    let hint_i = -1;
    hintBtn.addEventListener("click", () => {
        hint_num = hint_num - 1
        if (hint_num >= 0) {
            hint_i = hint_i + 1
            console.log(hint_i);

            for (j = 0; j < dash_array.length; j++) {
                if (dash_array[hint_i] != "_") {
                    hint_i = hint_i + 1;
                } else if (dash_array[hint_i] == "_") {
                    dash_array.splice(hint_i, 1, m_word_arr[hint_i])
                    break;
                }
            }
            let dash = dash_array.join("")
            word_dash.innerHTML = dash;
            if (dash == main_word) {
                word_dash.style.color = "Green";
                width = 100;
                hint_num = hint_num + 1
                hint_i = -1;
                getAnswer = 1;
            }
            hint_p.innerHTML = `Hints Remaining: ${hint_num}`
        }
    })

    // Loop to Get the Alphabets When you click them
    for (let i = 0; i < alphaBtns.length; i++) {
        alphaBtns[i].addEventListener("click", () => {
            let alpha_arr = alphaBtns[i].innerText;
            // Looping through the alphabets in the word
            for (i = 0; i < m_word_arr.length; i++) {
                // Checking the Word to See if it's correct
                if (alpha_arr == m_word_arr[i]) {
                    dash_array.splice(i, 1, alpha_arr)
                    let dash = dash_array.join("")
                    word_dash.innerHTML = dash;
                    word_dash.style.color = "white"

                    if (dash == main_word) {
                        word_dash.style.color = "Green";
                        width = 100;
                        getAnswer = 1;
                    }
                }
            }
        })
    }
    
}

game()

// Calling out Next Button
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    if (getAnswer == 1) {
        nextBtn.style.background = "Orangered"
        num = num + 1;
        game()
    } else {
        console.log(false)
    }
})
