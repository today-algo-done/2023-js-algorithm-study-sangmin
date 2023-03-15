const input = require("fs").readFileSync("GitHub/stdin").toString().trim().split("\n").map((str) => str.trim())
const [T, ...Pwd] = input;

function keylogger(T, Pwd) {
    Pwd.map((pwd) => {
        let [answer, tmp] = [[], []];
        pwd.split("").map((str) => {
            if (v === "<") {
                if (answer.length !== 0) tmp.push(answer.pop());
            } else if (v === ">") {
                if (tmp.length !== 0) answer.push(tmp.pop());
            } else if (v === "-") {
                answer.pop();
            } else {
                answer.push(str);
            }
        });
        console.log([...answer, ...tmp.reverse()].join(""));
    });

}

keylogger(T, Pwd);