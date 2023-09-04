// console.log("Ok");
//calculate

const submit = document.getElementById('submit');//подтянули кнопку

submit.addEventListener('click', function(event /*параметр,который автоматически передается,сюда приходит объект*/ ){
    event.preventDefault(); /*убирает автоматическое обновление стр */
    const numA = parseFloat(document.getElementById('textA').value);
    const numB = parseFloat(document.getElementById('textB').value);


    console.log(numA+typeof numA);
    console.log(numB+typeof numB);

    const sumAB = document.getElementById('sumAB');
    const minusAB = document.getElementById('minusAB');
    const multiAB = document.getElementById('multiAB');
    const divisionAB = document.getElementById('divisionAB');

    // console.log(sumAB);
    // console.log(minusAB);
    // console.log(multiAB);
    // console.log(divisionAB);

    sumAB.value = getSumAB(numA, numB);
    minusAB.value = getMinusAB(numA,numB);
    multiAB.value = getMultiAB(numA,numB);
    divisionAB.value = getDivisionAB(numA,numB);
})//пч можно несколько д-й произвести с кнопкой,а не 1 д-е

function getSumAB(numA, numB){ /*возвращаем*/
    return numA + numB;
} 

function getMinusAB(numA,numB){
    return numA - numB;
}

function getMultiAB(numA,numB){
    return numA * numB;
}

function getDivisionAB(numA,numB){
    return (numB==0) ? 'Error': numA / numB;
}

//Autorization

const submitAuthorzation = document.getElementById('submitAuthorzation');

// console.log(submitAuthorzation);

let arrLoginsPasswords = [['example@mail.com', '123456'],['alex@gmail.com','qurty'], ['proger@gmail.com', '111']];

submitAuthorzation.addEventListener('click', function(event){
    event.preventDefault();

    const formLogin = document.getElementById('formLogin');
    const formPassword = document.getElementById('formPassword'); //идет авторизация, а не регистрация, те пользователь должен быть зареган заранее

    let checkAuthorzation = false; //доступ пользователю закрыт
    for(let elem of arrLoginsPasswords){
        
    }
    if(checkAuthorzation){
        alert("Вы авторизовались");
    } else{
        alert("Попробуйте еще раз");
    }
});