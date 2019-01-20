var question = [
    {
     prompt: "What is the longest river in the United States?\n(a) Colorado River\n\ (b) Mississippi River\n\ (c)Missour River",
     answer: "c"
    },
    {
     prompt: "Death Valley is located in what U.S. state?\n(a) Californian\n\ (b) Nevada\n\ (c)Texas",
     answer: "a"  
    },

    {
     prompt:"What is the  smallest U.S. states?\n(a) Dalaware\n\ (b) Rhode Island\n\ (c)Maryland",
     answer: "b"   
    },

    {
     prompt: "Which of the Great Lakes is located entirely within the U.S border?\n(a) Lake Huron\n\ (b) Lake Erie\n\ (c)Lake Michigan",
     answer: "c"     
    },

    {
     prompt: "Pierre is the capital of what U.S. stata?\n(a) Montana\n\ (b) Wisconson\n\ (c)South Dakota",
     answer: "c"     
    },  
    
]

for (var i=0; i < question.length; i++){
    var respone = window.prompt (question[i].prompt);
    if(response == question[i].answer) {
        alert("You Are Smart")
    } else {
        alert("You Are Wrong")
    }
}


