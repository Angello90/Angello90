const fs = require("fs");
const date = new Date();
const day = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const month = ["Janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];

var state;

const isVacation = () => {
    let vacation = false;

    if ((date.getMonth() === 9 && date.getDate() >= 19) || (date.getMonth() === 10 && date.getDate() <= 4)) {
        vacation = true;
    }
    else if((date.getMonth() === 11 && date.getDate() >= 21) || (date.getMonth() === 0 && date.getDate() <= 6))
    {
        vacation = true;
    }
    else if((date.getMonth() === 6 && date.getDate() >= 5) || (date.getMonth() === 8 && date.getDate() < 2))
    {
        vacation = true;
    }

    return vacation;
}


const generateNewREADME = (path) => {
    console.log(date.getDate());

    if (isVacation()) {
        state = ' en: 🌴 vacances.';
    }
    else {
        state = date.getDay() == 0 || date.getDay() == 7 ? ' au: 💤 repos.' : ' au: 🏢 travail.';
    }

    const final = `<h1 align='center'>Hi 👋, I'm Angello90</h1>\n<div align='center'>\n\n|<h2 align='center'>Nous sommes le: <u>${date.toLocaleDateString('en-GB')}</u></h2><h2 align='center'>c'est un ${day[date.getDay()]} et je suis ${state}</h2>|\n|---\n</div>`;

    fs.writeFile(path, final, (err) => {
        if (err) {
            console.log(err);
        }
    });
};



generateNewREADME('README.md');
