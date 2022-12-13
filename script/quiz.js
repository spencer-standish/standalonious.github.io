// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the polar arctic fox's main food source?",
    a: [{ text: "fruits and vegetables", isCorrect: false, isSelected: false },
        { text: "leftovers from polar bear kills", isCorrect: false, isSelected: false },
        { text: "lemmings", isCorrect: true, isSelected: false },
        { text: "whatever washes up on the seashore", isCorrect: false, isSelected: false }
    ]

},
{
    id: 1,
    q: "What is a baby arctic hare called?",
    a: [{ text: "a cub", isCorrect: false, isSelected: false },
        { text: "a kitten", isCorrect: false, isSelected: false },
        { text: "a baby", isCorrect: false, isSelected: false },
        { text: "a leveret", isCorrect: true, isSelected: false }
    ]

},
{
    id: 2,
    q: "A killer whale has a large _____ on its back.",
    a: [{ text: "Flipper", isCorrect: false, isSelected: false },
        { text: "Dorsal fin", isCorrect: true, isSelected: false  },
        { text: "Red spot", isCorrect: false, isSelected: false  },
        { text: "Scar", isCorrect: false, isSelected: false  }
    ]

},
{
    id: 3,
    q: "Beluga whales live in groups called what?",
    a: [{ text: "Flocks", isCorrect: false, isSelected: false },
        { text: "Packs", isCorrect: false, isSelected: false  },
        { text: "Litters", isCorrect: false, isSelected: false  },
        { text: "Pods", isCorrect: true, isSelected: false  }
    ]

},
{
    id: 4,
    q: "Why don't adult brown bears climb trees?",
    a: [{ text: "Their claws aren't long enough.", isCorrect: false, isSelected: false },
        { text: "They weigh too much.", isCorrect: true, isSelected: false  },
        { text: "They are afraid of heights.", isCorrect: false, isSelected: false  },
        { text: "They dont know how to climb", isCorrect: false, isSelected: false  }
    ]

},
{
    id: 5,
    q: "How fast can a moose run on land (over a short distance)?",
    a: [{ text: "Up to 35 miles an hour", isCorrect: true, isSelected: false },
        { text: "Up to 50 miles an hour", isCorrect: false, isSelected: false  },
        { text: "Up to 5 miles an hour", isCorrect: false, isSelected: false  },
        { text: "A moose can't run", isCorrect: false, isSelected: false  }
    ]

},
{
    id: 6,
    q: "How long do alpacas live on an average?",
    a: [{ text: "15 years", isCorrect: true, isSelected: false },
        { text: "25 years", isCorrect: false, isSelected: false  },
        { text: "10 years", isCorrect: false, isSelected: false  },
        { text: "20 years", isCorrect: false, isSelected: false  }
    ]

},
{
    id: 7,
    q: "A baby reindeer is called a _____.",
    a: [{ text: "Bull", isCorrect: false, isSelected: false },
        { text: "Doe", isCorrect: false, isSelected: false  },
        { text: "Cow", isCorrect: false, isSelected: false  },
        { text: "Calf", isCorrect: true, isSelected: false  }
    ]

},
{
    id: 8,
    q: "Canadian lynx can spot prey at night upto _____ feet.",
    a: [{ text: "150", isCorrect: false, isSelected: false },
        { text: "100", isCorrect: false, isSelected: false  },
        { text: "50", isCorrect: false, isSelected: false  },
        { text: "250", isCorrect: true, isSelected: false  }
    ]

},
{
    id: 9,
    q: "Why did American bison almost become extinct?",
    a: [{ text: "They starved.", isCorrect: false, isSelected: false },
        { text: "People hunted them.", isCorrect: true, isSelected: false  },
        { text: "They didn't have enough baby calves.", isCorrect: false, isSelected: false  },
        { text: "The temperature got to hot for them to survive.", isCorrect: false, isSelected: false  }
    ]

},
{
    id: 10,
    q: "In what type of water do beavers live?",
    a: [{ text: "Brackish", isCorrect: false, isSelected: false },
        { text: "Fresh", isCorrect: false, isSelected: false  },
        { text: "Salt", isCorrect: false, isSelected: false  },
        { text: "Estuarine", isCorrect: true, isSelected: false  }
    ]

},
{
    id: 11,
    q: "Where do polar bears live?",
    a: [{ text: "the Arctic", isCorrect: true, isSelected: false },
        { text: "the Antarctic", isCorrect: false, isSelected: false  },
        { text: "Asia", isCorrect: false, isSelected: false  },
        { text: "Africa", isCorrect: true, isSelected: false  }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
op1.style.backgroundColor = "lightskyblue";
op2.style.backgroundColor = "lightskyblue";
op3.style.backgroundColor = "lightskyblue";
op4.style.backgroundColor = "lightskyblue";
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 12) {
    id++;
    iterate(id);
    console.log(id);
}
op1.style.backgroundColor = "lightskyblue";
op2.style.backgroundColor = "lightskyblue";
op3.style.backgroundColor = "lightskyblue";
op4.style.backgroundColor = "lightskyblue";

})