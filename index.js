const fs = require("fs");
const date = new Date();
const day = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

const generateNewREADME = (path) =>{
    const state = date.getDay() == 6 || date.getDay() == 7 ? '🌴 Repos.' : '🏢 travail.';
    const final = `<h1 align='center'>Hi 👋, I'm yhassanige1</h1>\n<div align='center'>\n\n|<h2 align='center'>Nous sommes le: <u>${date.toLocaleDateString('en-GB')}</u></h2><h2 align='center'>c'est un ${day[date.getDay() - 1]} et je suis au: ${state}</h2>|\n|---\n</div>`;
    fs.writeFile(path, final, (err) =>{
        if(err)
        {
            console.error(err);
        }
    });
};

generateNewREADME('README.md');