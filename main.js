let Hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
let Color = [];

for (let i = 0; i < 6; i++)
{
    Color.push(Hex[Math.floor(Math.random() * Hex.length)]);
}

let Final = `#${Color.join("")}`;

document.body.append(Final);
document.body.style.backgroundColor = Final;