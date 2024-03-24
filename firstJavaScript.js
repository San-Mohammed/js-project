const san = [];
let rahen;
let remove;

let input = prompt("What you like to do ?");
while (input !== "quit") {
    input = prompt("What you like to do ?");

    if (input === "new") {
        input = prompt("Enter new todo");
        let rahen = san.push(input);
    } else if (input === "list") {
        console.log("Welcome");
        for (let i = 0; i < san.length; i++) {
            console.log(`index: ${i}: ${san[i]}`);
        }
    } else if (input === "delete") {
        input = prompt("Which index do u want to remove");
        let remove = san.splice(input, 1);
    }
}
