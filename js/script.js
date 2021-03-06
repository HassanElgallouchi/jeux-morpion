const buttons = document.querySelectorAll("#game>div>button");
const gameStatus = document.querySelector("#game_status");

let joueurActuel = "O";
let statusGagnant = false;

let handleEvent = (e) => {
    let joueurO = "O";
    let joueurX = "X";
    if (statusGagnant) {
        return;
    }
    if (joueurActuel == joueurO) {
        joueurActuel = joueurX;
        e.target.textContent = joueurO
        gameStatus.textContent = `Joueur ${joueurX} c'est votre tour.`;
        check(joueurO)
    } else {
        joueurActuel = joueurO;
        e.target.textContent = joueurX
        gameStatus.textContent = `Joueur ${joueurO} c'est votre tour.`;
        check(joueurX)
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

let rejouer = (symboleJoueur) => {
    let btnRejouer = document.querySelector('#game_status a');
    btnRejouer.addEventListener('click', () => {
        statusGagnant = false;
        main();
        gameStatus.innerHTML = `Joueur ${symboleJoueur} c'est votre tour.`;
    })
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
        rejouer(symboleJoueur);
    }
}

main();