const buttons = document.querySelectorAll("#game>div>button");
const gameStatus = document.querySelector("#game_status");
let joueurActuel = "O";
let statusGagnant = false;

let handleEvent = (e) => {
    let joueurO = "O";
    let joueurX = "X";

    if (statusGagnant) {
        console.log("rejouer call");
        console.log(statusGagnant);
        return rejouer();
    }
    console.log("ach →" + statusGagnant);
    if (joueurActuel == joueurO) {
        joueurActuel = joueurX;
        e.target.textContent = joueurO
        gameStatus.textContent = `Joueur ${joueurX} c'est votre tour.`;
        check("O")
    } else {
        joueurActuel = joueurO;
        e.target.textContent = joueurX
        gameStatus.textContent = `Joueur ${joueurO} c'est votre tour.`
        check("X")
    }
}

let main = () => {
    buttons.forEach(videButton => {
        videButton.innerHTML = "";
        videButton.style.backgroundColor = "";
    })
    buttons.forEach(button => {
        button.addEventListener("click", handleEvent, { once: true })
    });
}

function check(symboleJoueur) {
    if (
        buttons[0].textContent == symboleJoueur &&
        buttons[1].textContent == symboleJoueur &&
        buttons[2].textContent == symboleJoueur
    ) {
        buttons[0].style.backgroundColor = "green";
        buttons[1].style.backgroundColor = "green";
        buttons[2].style.backgroundColor = "green";
        gameStatus.innerHTML = `<a href="#">Rejouer ?</a> <br/> Le joueur ${symboleJoueur} a gagné !`;
        statusGagnant = true;
    }
}

let rejouer = () => {
    let btnRoujer = document.querySelector('#game_status a');
    btnRoujer.addEventListener('click', () => {
        statusGagnant = false;
        console.log("false");
        main();
        console.log("main");
    })
}

main();
