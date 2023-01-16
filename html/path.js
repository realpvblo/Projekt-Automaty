var counter = 0;
var A = document.getElementById('buttonA');
var B = document.getElementById('buttonB');

// function myFunction(){
//     if(counter==0){
//         if(document.getElementById('buttonA').onclick = function() {
//             alert("buttonA was clicked");
//         });
//         else if(document.getElementById('buttonB').onclick = function() {
//             alert("buttonB was clicked");
//         });
//     }
// }

// document.getElementById('buttonA').onclick = function() {
//     alert("button was clicked " + (count++) + " times");
//  };

window.onload = myMain;

function myMain() {
document.getElementById("buttons").onclick = buton;
}

function buton(e) {
    id1: if(counter<=10){
        if (e.target.id == 'reset'){
            counter = 0;
            document.getElementById("svg").src="1.svg";
            document.getElementById("counter").innerHTML="0";
            break id1;
        }
        else if (e.target.tagName == 'INPUT' && counter == 0){
            if(e.target.id == 'buttonA'){
                document.getElementById("svg").src="1ab.svg";
                counter++;
                // if(e.target.id == 'buttonB'){
                //     document.getElementById("svg").src="2b.svg";
                //     counter++;
                // }
            }
            else if(e.target.id == 'buttonB'){
                document.getElementById("svg").src="1ab.svg";
                counter++;
            }
            document.getElementById("counter").innerHTML="1";
        }
        else if(e.target.tagName == 'INPUT' && counter == 1){
            if(e.target.id == 'buttonA'){
                document.getElementById("svg").src="1.svg";
                counter = 0;
                document.getElementById("counter").innerHTML="0";
                break id1;
            }
            else if(e.target.id == 'buttonB'){
                document.getElementById("svg").src="2b.svg";
                counter++;
                document.getElementById("counter").innerHTML="2";
            }
        }
        else if(e.target.tagName == 'INPUT' && counter == 2){
            if(e.target.id == 'buttonA'){
                document.getElementById("svg").src="1.svg";
                counter = 0;
                document.getElementById("counter").innerHTML="0";
                break id1;
            }
            else if(e.target.id == 'buttonB'){
                document.getElementById("svg").src="3b.svg";
                document.getElementById("counter").innerHTML="3";
                counter++;
            }
        }
        else if(e.target.tagName == 'INPUT' && counter == 3){
            if(e.target.id == 'buttonA'){
                document.getElementById("svg").src="4a.svg";
                document.getElementById("counter").innerHTML="4";
                counter++;
            }
            else if(e.target.id == 'buttonB'){
                document.getElementById("svg").src="1.svg";
                counter = 0;
                document.getElementById("counter").innerHTML="0";
                break id1;
            }
        }
        else if(e.target.tagName == 'INPUT' && counter == 4){
            if(e.target.id == 'buttonA'){
                document.getElementById("svg").src="5a.svg";
                document.getElementById("counter").innerHTML="5";
                counter++;
            }
            else if(e.target.id == 'buttonB'){
                document.getElementById("svg").src="1.svg";
                counter = 0;
                document.getElementById("counter").innerHTML="0";
                break id1;
            }
        }
    }
    
}

 