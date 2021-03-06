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


    funcDernierGagnant();


    buttons.forEach(videButton => {
        videButton.innerHTML = "";
        videButton.style.backgroundColor = "";
    })
    buttons.forEach(button => {
        button.addEventListener("click", handleEvent, { once: true })
    });
}

let rejouer = () => {

    let btnRejouer = document.querySelector('#game_status a');
    btnRejouer.addEventListener('click', () => {
        statusGagnant = false;
        main();
        gameStatus.innerHTML = `Joueur X c'est votre tour.`;
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


        window.localStorage.setItem("dernier_gagnant", JSON.stringify(symboleJoueur));
        funcDernierGagnant()
    }
}

let funcDernierGagnant = () => {
    if (window.localStorage.getItem("dernier_gagnant")) {
        let dernierGagnant = JSON.parse(window.localStorage.getItem("dernier_gagnant"));
        let d = dernierGagnant;
        console.log(d);
        let gameId = document.querySelector("#game");
        gameId.appendChild(document.createElement("div")).setAttribute("class", "gagnant");
        let divDernierGagnant = document.querySelector(".gagnant");
        divDernierGagnant.style.backgroundColor = "#fff";
        divDernierGagnant.style.marginTop = "10px";
        divDernierGagnant.style.padding = "10px";

        divDernierGagnant.innerHTML = `<strong>Dernier gagnant : </strong> ${dernierGagnant}`;

    }
}

main();