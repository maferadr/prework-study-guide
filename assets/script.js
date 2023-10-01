var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopics = topics[Math.floor(Math.random() * topics.length)];


function listTopics(){
    for(var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}
console.log("Here are the topics that we learned through the prework");
listTopics()

function selectTopic(){
    if(randomTopics === 'HTML'){
        console.log("Lets study HTML");
    } else if (randomTopics === 'CSS'){
        console.log("Lets study CSS");
    }else if(randomTopics === 'Git'){
        console.log("Lets study Git");
    }else if(randomTopics === 'JavaScript'){
        console.log("Lets study JavaScript");
    }else{
        console.log("Please try again");
    }
}
console.log("what should we study first?");
selectTopic()



// var shapes = ["Triangle", "Circle", "Square", "Rectangle"]
// console.log(shapes);

// for(var x = 0; x < shapes.length; x++){
//     console.log(shapes[x]);
// }
