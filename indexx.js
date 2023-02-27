let entry = "";
let num1;
let num2;
let angle = "deg";
let tmf = "o";
let thf = "o";
var fact = 1;
let st_memory=0;

function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

let buttons = document.querySelectorAll(".jscont");
let icon = document.querySelectorAll('i');

    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.value);
            if (e.target.value == "=") {
                entry = eval(entry);
                document.querySelector("input").value = entry;
            }else if (e.target.id == "M+") {
                st_memory=eval(st_memory+"+"+entry);
                document.querySelector("input").value = st_memory;
            }else if (e.target.id == "M-") {
                st_memory=eval(st_memory+"+"+entry);
                document.querySelector("input").value = st_memory;
            }else if (e.target.id == "MS") {
                st_memory=entry;
                document.querySelector("input").value = st_memory;
            }else if (e.target.id == "MR") {
                document.querySelector("input").value = st_memory;
            }else if (e.target.id == "MC") {
                st_memory=0;
                document.querySelector("input").value = st_memory;
            }else if (e.target.value == "C") {
                entry = "";
                document.querySelector("input").value = entry;
            } else if (e.target.value == "D") {
                entry = entry.slice(0,entry.length-1)
                document.querySelector("input").value = entry;
            } else if (e.target.value == "x2") {
                entry = entry+"*"+entry
                document.querySelector("input").value = entry;
            }else if (e.target.id == "sqrti") {
                entry = Math.sqrt(entry)
                document.querySelector("input").value = entry;
            }else if (e.target.id == "mp") {
                if(entry > 0){
                    entry="-" + entry;
                    document.querySelector("input").value = entry;
                }else{
                    entry = entry.slice(entry.length-1);
                    document.querySelector("input").value = entry;
                }
            }else if (e.target.id == "log") {
                entry = Math.log10(entry);
                document.querySelector("input").value = entry;
            }else if (e.target.id == "in") {
                entry = Math.log(entry);
                document.querySelector("input").value = entry;
            }else if (e.target.id == "|x|") {
                entry = entry.slice(entry.length-1);
                document.querySelector("input").value = entry;
            }else if (e.target.value == "E") {
                entry = Math.exp(entry);
                document.querySelector("input").value = entry;
            }else if (e.target.id == "fe") {
                entry = Number.parseFloat(entry).toExponential();
                document.querySelector("input").value = entry;
            }else if (e.target.id == "frr") {
                entry = Math.round(entry);
                document.querySelector("input").value = entry;
            }else if (e.target.id == "floor") {
                entry = Math.floor(entry);
                document.querySelector("input").value = entry;
            }else if (e.target.id == "rand") {
                entry = Math.floor(Math.random() * entry);
                document.querySelector("input").value = entry;
            }else if (e.target.id == "ni") {
                for(let i = 1 ; i<=entry;i++){
                    fact = fact * i;
                }
                document.querySelector("input").value = fact;
                fact=1;
                i=1;
            }else if (e.target.id == "dms") {
                let d = Math.floor(entry);
                let minfloat = (entry - d) * 60;
                let m = Math.floor(minfloat);
                let secfloat = (minfloat - m) * 60;
                let s = Math.round(secfloat);
                
                if (s === 60) {
                    m++;
                    s = 0;
                }
                if (m === 60) {
                    d++;
                    m = 0;
                }
                let output = "" + d + ":" + m + ":" + s;
                document.querySelector("input").value = output;
            }else if (e.target.id == "angle") {
                if (e.target.value == "deg") {
                    document.getElementById('angle').innerHTML = "RAD";
                    document.getElementById('angle').value = "rad";
                    angle = "rad";
                }else if(e.target.value== "rad"){
                    document.getElementById('angle').innerHTML = "GRAD";
                    document.getElementById('angle').value = "grad";
                    angle = "grad";
                }else if(e.target.value == "grad"){
                    document.getElementById('angle').innerHTML = "DEG";
                    document.getElementById('angle').value = "deg";
                    angle = "deg";
                }
            }else if (e.target.id == "2nd" || e.target.id == "hyp") {
                if (tmf == "o" && thf == "o" ) {

                    document.getElementById('sinθ').innerHTML = "sinθ";
                    document.getElementById('sinθ').value = "sin";

                    document.getElementById('cosθ').innerHTML = "cosθ";
                    document.getElementById('cosθ').value = "cos";

                    document.getElementById('tanθ').innerHTML = "tanθ";
                    document.getElementById('tanθ').value = "tan";

                    document.getElementById('cosecθ').innerHTML = "cosecθ";
                    document.getElementById('cosecθ').value = "cosec";

                    document.getElementById('secθ').innerHTML = "secθ";
                    document.getElementById('secθ').value = "sec";

                    document.getElementById('cotθ').innerHTML = "cotθ";
                    document.getElementById('cotθ').value = "cot";
                    if(e.target.id == "2nd"){
                        tmf = "z";
                    }else if (e.target.id == "hyp") {
                    thf = "z";
                    }
                }else if(tmf == "z" && thf == "o"){
                    document.getElementById('sinθ').innerHTML = "sin <sup>-1</sup>";
                    document.getElementById('sinθ').value = "sin-1";

                    document.getElementById('cosθ').innerHTML = "cos <sup>-1</sup>";
                    document.getElementById('cosθ').value = "cos-1";

                    document.getElementById('tanθ').innerHTML = "tan <sup>-1</sup>";
                    document.getElementById('tanθ').value = "tan-1";

                    document.getElementById('cosecθ').innerHTML = "cosec <sup>-1</sup>";
                    document.getElementById('cosecθ').value = "cosec-1";

                    document.getElementById('secθ').innerHTML = "sec <sup>-1</sup>";
                    document.getElementById('secθ').value = "sec-1";

                    document.getElementById('cotθ').innerHTML = "cot <sup>-1</sup>";
                    document.getElementById('cotθ').value = "cot-1";

                    if(e.target.id == "2nd"){
                        tmf = "o";
                    }else if (e.target.id == "hyp") {
                        thf = "z";
                    }
                }else if(tmf == "o" && thf == "z"){
                    document.getElementById('sinθ').innerHTML = "sinhθ";
                    document.getElementById('sinθ').value = "sinh";

                    document.getElementById('cosθ').innerHTML = "coshθ";
                    document.getElementById('cosθ').value = "cosh";

                    document.getElementById('tanθ').innerHTML = "tanhθ";
                    document.getElementById('tanθ').value = "tanh";

                    document.getElementById('cosecθ').innerHTML = "cosechθ";
                    document.getElementById('cosecθ').value = "cosech";

                    document.getElementById('secθ').innerHTML = "sechθ";
                    document.getElementById('secθ').value = "sech";

                    document.getElementById('cotθ').innerHTML = "cothθ";
                    document.getElementById('cotθ').value = "coth";

                    if(e.target.id == "2nd"){
                        tmf = "z";
                    }else if (e.target.id == "hyp") {
                        thf = "o";
                    }
                }else if(tmf == "z" && thf == "z"){
                    document.getElementById('sinθ').innerHTML = "sinh <sup>-1</sup>";
                    document.getElementById('sinθ').value = "sinh-1";

                    document.getElementById('cosθ').innerHTML = "cosh <sup>-1</sup>";
                    document.getElementById('cosθ').value = "cosh-1";

                    document.getElementById('tanθ').innerHTML = "tanh <sup>-1</sup>";
                    document.getElementById('tanθ').value = "tanh-1";

                    document.getElementById('cosecθ').innerHTML = "cosech <sup>-1</sup>";
                    document.getElementById('cosecθ').value = "cosech-1";

                    document.getElementById('secθ').innerHTML = "sech <sup>-1</sup>";
                    document.getElementById('secθ').value = "sech-1";

                    document.getElementById('cotθ').innerHTML = "coth <sup>-1</sup>";
                    document.getElementById('cotθ').value = "coth-1";

                    if(e.target.id == "2nd"){
                        tmf = "o";
                    }else if (e.target.id == "hyp") {
                        thf = "o";
                    }
                }
            }else if (e.target.id == "sinθ") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.sin(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.sin(entry);
                }else{
                    entry = Math.sin(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.id == "cosθ") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.cos(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.cos(entry);
                }else{
                    entry = Math.cos(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.id == "tanθ") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.tan(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.tan(entry);
                }else{
                    entry = Math.tan(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.id == "cosecθ") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.sin(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.sin(entry);
                }else{
                    entry = 1/Math.sin(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.id == "secθ") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.cos(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.cos(entry);
                }else{
                    entry = 1/Math.cos(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.id == "cotθ") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.tan(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.tan(entry);
                }else{
                    entry = 1/Math.tan/(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "sin-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.asin(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.asin(entry);
                }else{
                    entry = Math.asin(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "cos-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.acos(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.acos(entry);
                }else{
                    entry = Math.acos(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "tan-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.atan(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.atan(entry);
                }else{
                    entry = Math.atan(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "cosec-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.asin(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.asin(entry);
                }else{
                    entry = 1/Math.asin(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "sec-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.acos(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.acos(entry);
                }else{
                    entry = 1/Math.acos(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "cot-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.atan(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.atan(entry);
                }else{
                    entry = 1/Math.atan(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "sinh") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.sinh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.sinh(entry);
                }else{
                    entry = Math.sinh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "cosh") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.cosh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.cosh(entry);
                }else{
                    entry = Math.cosh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "tanh") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.tanh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.tanh(entry);
                }else{
                    entry = Math.tanh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "cosech") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.sinh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.sinh(entry);
                }else{
                    entry = 1/Math.sinh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "sech") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.cosh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.cosh(entry);
                }else{
                    entry = 1/Math.cosh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "coth") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.tanh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.tanh(entry);
                }else{
                    entry = 1/Math.tanh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "sinh-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.asinh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.asinh(entry);
                }else{
                    entry = Math.asinh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "cosh-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.acosh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.acosh(entry);
                }else{
                    entry = Math.acosh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "tanh-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = Math.atanh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= Math.atanh(entry);
                }else{
                    entry = Math.atanh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "cosech-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.asinh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.asinh(entry);
                }else{
                    entry = 1/Math.asinh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "sech-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.acosh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.acosh(entry);
                }else{
                    entry = 1/Math.acosh(entry);
                }
                document.querySelector("input").value = entry;
            }else if (e.target.value == "coth-1") {
                if(document.getElementById('angle').value == "deg"){
                    entry = degrees_to_radians(entry);
                    entry = 1/Math.atanh(entry);
                }else if (document.getElementById('angle').value == "grad"){
                    entry = entry * 0.0157;
                    entry= 1/Math.atanh(entry);
                }else{
                    entry = 1/Math.atanh(entry);
                }
                document.querySelector("input").value = entry;
            }else {
                entry = entry + e.target.value;
                document.querySelector("input").value = entry;
            }

            if(st_memory != 0){
                document.querySelector(".mc").disabled = false;
                document.querySelector(".mr").disabled = false;
                
            }else{
                document.querySelector(".mc").disabled = true;
                document.querySelector(".mr").disabled = true;
            }
        })
    })


    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.class);

        })
    })