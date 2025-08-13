let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            // Replace X with * for eval
            string = string.replace(/X/g, '*');
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        }
        else if (value === 'AC') {
            string = "";
            input.value = string;
        }
        else if (value === 'del') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});