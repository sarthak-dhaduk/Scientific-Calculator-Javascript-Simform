let entry = "0";
let num1;
let num2;

let buttons = document.querySelectorAll('button');

    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target.value);
            if (e.target.value == "=") {
                entry = eval(entry);
                document.querySelector("input").value = entry;

            } else if (e.target.value == "C") {
                entry = "";
                document.querySelector("input").value = entry;
            } else if (e.target.value == "D") {
                entry = entry.slice(0,entry.length-1)
                document.querySelector("input").value = entry;
            } else if (e.target.value == "x2") {
                entry = entry+"*"+entry
                document.querySelector("input").value = entry;
            }else if (e.target.value == "sqrt") {
                entry = Math.sqrt(entry)
                document.querySelector("input").value = entry;
            }else {
                entry = entry + e.target.value;
                document.querySelector("input").value = entry;
            }
        })
    })