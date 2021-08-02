
let minTens = document.querySelector('#min-tens');
let minUnit = document.querySelector('#min-unit');
let secTens = document.querySelector('#sec-tens');
let secUnit = document.querySelector('#sec-unit');
let startBtn = document.querySelector('#startBtn');



let min_Tens_number;
let min_Unit_number;
let sec_Tens_number;
let sec_Unit_number;

let interval;


let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
// console.log(parseInt(secUnit, 10) + 10);

let min = document.querySelector('#min');
console.log(min.value[1]);
let sec = document.querySelector('#sec');
console.log(sec.value);

let play = document.querySelector('#play');



play.addEventListener('click', () => {

    if (play.innerText === 'pause') {

        

        play.innerText = "play";

        stopCounter();
        


    } else {

        min_Tens_number = parseInt(minTens.innerText, 10);
        min_Unit_number = parseInt(minUnit.innerText, 10);
        sec_Tens_number = parseInt(secTens.innerText, 10);
        sec_Unit_number = parseInt(secUnit.innerText, 10);

        play.innerText = "pause";

        interval = setInterval(startCounter, 1000);

    }

});


startBtn.addEventListener('click', (e) => {

    // defaul action prevention
    e.preventDefault();


    if (startBtn.innerText === "Start") {
        // alert('timer starts');

        // console.log(min.value[1]);



        if (min.value > 60 || sec.value > 59) {
            alert("minute or secoend are outside limit");
            return;
        } else {

            minTens.innerHTML = min.value[0];
            minUnit.innerHTML = min.value[1];
            secTens.innerHTML = sec.value[0];
            secUnit.innerHTML = sec.value[1];

            if (typeof min.value[1] === "undefined") {
                // alert('please add in this format (05)');
                minTens.innerHTML = "0";
                minUnit.innerHTML = min.value[0];


            }

            if (typeof sec.value[1] === 'undefined') {

                secTens.innerHTML = "0";
                secUnit.innerHTML = sec.value[0];
            }
        }







        min_Tens_number = parseInt(minTens.innerText, 10);
        min_Unit_number = parseInt(minUnit.innerText, 10);
        sec_Tens_number = parseInt(secTens.innerText, 10);
        sec_Unit_number = parseInt(secUnit.innerText, 10);

        startBtn.innerText = "Stop";
        play.innerText = "pause";

        interval = setInterval(startCounter, 1000);


    } else {
        // alert('timer stops');

        startBtn.innerText = "Start";
        play.innerText = "play";
        stopCounter();


    }

});




// setInterval(startTimer, 1000);


function startCounter() {



    if (sec_Unit_number != 0 || sec_Tens_number != 0 || min_Tens_number != 0 || min_Unit_number != 0) {

        sec_Unit_number -= 1;
        secUnit.innerHTML = sec_Unit_number;
        // secUnit.innerHTML = sec_Unit_number;
        if (sec_Unit_number === -1) {

            sec_Unit_number = 9;
            secUnit.innerHTML = sec_Unit_number;
            sec_Tens_number -= 1;
            secTens.innerHTML = sec_Tens_number;

            if (sec_Tens_number === -1) {

                sec_Tens_number = 5;
                secTens.innerHTML = sec_Tens_number;

                min_Unit_number -= 1;
                minUnit.innerHTML = min_Unit_number;

                if (min_Unit_number === -1) {
                    min_Unit_number = 9;
                    minUnit.innerHTML = min_Unit_number

                    min_Tens_number -= 1;
                    minTens.innerHTML = min_Tens_number;

                    if (min_Tens_number === -1) {
                        minTens.innerHTML = 0;
                        clearInterval(interval);
                    }
                }


            }
        }
    }

}


function stopCounter() {

    clearInterval(interval);
    min_Tens_number = 0;
    min_Unit_number = 0;
    sec_Tens_number = 0;
    sec_Unit_number = 0;
}


