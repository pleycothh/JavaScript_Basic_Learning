/// ####  Control Flow (1h25m) ####


// if (conditions) {
//     statement 
// } else if (secondCondition)
//     secondStatement
//  else
//     finalStatement



// switch (variable){
//     case aregument : action;
//     break;

//     case secondArgument: SecondAction;
//     break;

//     default: defaultAction;

// }


// for while doWile doin for in

// for (let i=0; i<5; i++){
//     console.log('hello world')
// }

i = 110;

// do{
//     console.log(i);
//     i ++;
// } while (i<10);

// for in loop
const person = {
    name: 'ben',
    age:30
};

// for (let key in person){
//     console.log(key);
//     console.log(key, person[key]);
// };

const colors = ['red', 'green', 'gray',3];
// for (let index in colors)
//     console.log(index)

// for-of loop for iteray array from ED6

// for (let color of colors){
//     console.log(color);
// }

while (i <=150){
    //if (i ===115) break;
    if (i%2 ==0){
        i ++;
        continue; // jump if i is even number
    }
    //console.log(i);
    i++;
}


/// Exercise 1: Max of two numbers

number = [1,1,1111,1,2,3,4,5];


function max ( number){
    let GOne = 0;
    let GTwo = 0;

    for (i in number){
        if (number[i] > GOne){
            GOne = number[i];
        }

    }
    for ( i in number){
        if (number[i] > GTwo && number[i] != GOne){
            GTwo = number[i]
        }
    }
    return [GOne, GTwo];

};
    
result = max(number);
//console.log(result);

// Exercise 2:
function isLand(width, height){
    return (width > height);
    // return (width > height) ? true : false;
}


function a(b){
    if (b){
        console.log(true)
        return;
    }
    console.log(false)
}

//a(false);

// Exerice 3: 

const marks = [50,60,10];

//console.log(calculateGrade(marks));

function calculateGrade(marks){
    
    let sum = 0;

    for (i of marks){
        sum += i;
    }

    let average = sum / marks.length;
    let grade = "Unknow";
  //  console.log(average)

    
    if (average <60 ) return 'F';



    // switch (average){
    //     case average < 60 : grade = "F";
        
    //         break;
    //     case (60 <= average) && (average < 70) : grade = "D";
    //         console.log("check")
    //         break;
    //     case (70 <= average) && (average < 80) : grade = "C";
    //         break;
    //     case (80 <= average) && (average < 90) : grade = "B";
    //         break;
    //     case (90 <= average) && (average < 100) : grade = "A";
    //         break;
        
    }

//    return grade;


// Exerice 4:


showPrimes(20);

function showPrimes(limit){
    let check = 0;
    for ( let i=0; i<=limit; i++){
        for (let j=0; j<=limit; j++){
            if (i % j == 0){
                check += 1;
            } 
        }
        //console.log(i,check)
        if (check == 2){
            console.log(i);
        }
        check = 0;
    }
};