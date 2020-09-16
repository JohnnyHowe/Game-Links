/**
 * Populate the table at tableId with the links provided by linkInfo
 * @param tableId {string} id of table to populate
 * @param linksInfo {Array} links to build, each link to have name, desc, type, link and iconFilePath attributes
 */
function buildTable(tableId, linksInfo) {
    let table = document.getElementById(tableId);

    for (let linkInfo of linksInfo) {
        let row = table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = getBuiltLink(linkInfo.title, linkInfo.desc, linkInfo.type, linkInfo.link, linkInfo.iconFilepath);
    }
}


/**
 * Build a single link box from the format in linkBoxFormat.html
 * @param {string} title 
 * @param {string} desc 
 * @param {string} type 
 * @param {string} link 
 * @param {string} iconFilepath
 */
function getBuiltLink(title, desc, type, link, iconFilepath) {
    return getLinkBoxFormat().replace("GAME_LINK", link).replace("GAME_DESC", desc).replace("GAME_TYPE", type).replace("GAME_TITLE", title).replace("GAME_ICON_PATH", iconFilepath);
}


/**
 * Get the info of all the links to show
 * TODO make load from JSON
 */
// function getLinkInfo() {
//     typeStrings = {
//         javascript: "JavaScript, Click to play!",
//         python: "Python, Click to download!"
//     }
//     return [
//         // { title: "Title", desc: "desc", type: "type", link: "link", iconFilepath: "" }
//         { title: "Snake", desc: "Classic snake game", type: typeStrings.javascript, link: "https://johnnyhowe.github.io/Snake-JS/", iconFilepath: "./thumbnails/snake.png" },
//         { title: "Flappy Bird", desc: "Rip off of that very popular game", type: typeStrings.javascript, link: "https://anwildduck.github.io/flappybird/", iconFilepath: "./thumbnails/flappybird.png" },
//         { title: "Tower Defence", desc: "Basic tower defence game", type: typeStrings.python, link: "https://github.com/JohnnyHowe/tower-defence/archive/master.zip", iconFilepath: "./thumbnails/towerdefence.png" },
//     ]
// }


/**
 * Get a big string of the format
 * TODO make read from external file
 * @returns {string} the format of the link
 */
function getLinkBoxFormat() {
    return `<a href="GAME_LINK">
    <div class="gameLink">
        <img class="gameImages" src="GAME_ICON_PATH">

        <h1 class="gameTitle">
            GAME_TITLE
        </h1>
        <p class="gameInfo">
            GAME_DESC
        </p>
        <p class="gameType">
            GAME_TYPE
        </p>
    </div>
</a>`
}