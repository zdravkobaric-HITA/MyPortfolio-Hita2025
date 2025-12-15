const data = {
    htmlcss: {
        exercises: [
            { name: "Personal Website", path: "exercises/personal-website/" },
            { name: "Google.com Clone", path: "exercises/google-clone/" },
            { name: "Business Card", path: "exercises/business-card/" },
            { name: "Space Exploration Website", path: "exercises/space-exploration-site/" },
            { name: "Birthday Gift Card", path: "exercises/birthday-gift-site/" }
        ],
        projects: [
            { name: "Hometown", path: "projects/home-town/" }
        ]
    },

    js: {
        exercises: [
            { name: "Calculator", path: "exercises/calculator/" },
            { name: "Basic Console Chatbot", path: "exercises/chatbots/basic-console-chatbot/" },
            { name: "Advanced Console Chatbot", path: "exercises/chatbots/advanced-console-chatbot/" }
        ],
        projects: [
            { name: "Basic Stopwatch", path: "projects/stopwatch/" },
            { name: "StarWars Stopwatch", path: "projects/starwars-stopwatch/" },
            { name: "Basic Browser Bot", path: "projects/browser-bot/" },
            { name: "State Machine Bot", path: "projects/state-machine-bot/" }
        ]
    }
};


function fillList(id, items) {
    const ul = document.getElementById(id);

    ul.innerHTML = items
        .map(item => `
            <li>
                <img src="./assets/icons/arrow.svg" class="icon" alt="arrow">
                <a href="${item.path}">${item.name}</a>
            </li>
        `)
        .join("");
}


fillList("htmlcss-exercises", data.htmlcss.exercises);
fillList("htmlcss-projects", data.htmlcss.projects);
fillList("js-exercises", data.js.exercises);
fillList("js-projects", data.js.projects);


document.getElementById("darkToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
