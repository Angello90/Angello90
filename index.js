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
    else if ((date.getMonth() === 11 && date.getDate() >= 21) || (date.getMonth() === 0 && date.getDate() <= 6)) {
        vacation = true;
    }
    else if ((date.getMonth() === 6 && date.getDate() >= 5) || (date.getMonth() === 8 && date.getDate() < 2)) {
        vacation = true;
    }

    return vacation;
}





const generateNewREADME = (path) => {
    console.log(date.getDate());

    if (isVacation()) {
        state = 'on: 🌴 vacation.';
    }
    else {
        state = date.getDay() == 0 || date.getDay() == 7 ? 'at: 💤 rest.' : 'at: 🏢 work.';
    }

    // const final = `<h1 align='center'>Hi 👋, I'm Angello90</h1>\n<div align='center'>\n\n|<h2 align='center'>Nous sommes le: <u>${date.toLocaleDateString('en-GB')}</u></h2><h2 align='center'>c'est un ${day[date.getDay()]} et je suis ${state}</h2>|\n|---\n</div>`;

    const text = `👋 Hello! Welcome to my GitHub profile. Today we are the ${date.toLocaleDateString('en-GB')}, and I am ${state}`;


const readme = `
# 💫 About Me:

${text}


# 💻 Tech Stack:

![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white)  ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)  ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)  ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white)  ![EJS](https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=black)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)  ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)  ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)  ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)  ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)  ![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)  ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

# 📊 GitHub Stats:

![](https://github-readme-stats.vercel.app/api/top-langs/?username=Angello90&theme=dark&hide_border=true&include_all_commits=false&count_private=false&layout=compact)
---
![](https://media3.giphy.com/media/24FIhRIK2c4uz5mxGS/200.gif)


`


    fs.writeFile(path, readme, (err) => {
        if (err) {
            console.log(err);
        }
    });
};



generateNewREADME('README.md');
