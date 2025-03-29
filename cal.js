let input = document.querySelector("input");
let btns = document.querySelectorAll("button");
let string = "";
let arr = Array.from(btns);

arr.forEach(btns => {
    btns.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == "C") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == "+/-") {
            if (string) {
                string = String(-parseFloat(string));
                input.value = string;
            }
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
