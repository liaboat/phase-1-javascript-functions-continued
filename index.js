const { reporters } = require("mocha");

function saturdayFun(message = "This Saturday, I want to roller-skate!"){
    console.log (message);
    if(message === "This Saturday, I want to roller-skate!"){
        return message
    }else
        return "This Saturday, I want to bathe my dog!"
    }

    function mondayWork(message = "This Monday, I will go to the office."){
    console.log(message)
        if (message === "This Monday, I will go to the office."){
                 return message
        }   else
                return "This Monday, I will work from home."
    } 

    function wrapAdjective(Lia = "*") {
            return function (parameter = "special") {
            return `You are ${Lia}${parameter}${Lia}!`

        }
    }
