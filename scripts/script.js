let black = document.getElementById("blackScreen");



function thePit() {

    black.innerHTML=`
<div id="text"><p>❄︎□︎♎︎□︎ ●︎●︎♏︎♑︎♋︎ ♏︎■︎ ⬧︎◆︎ ❍︎□︎❍︎♏︎■︎⧫︎□︎📬︎📬︎📬︎ ♏︎⬧︎⧫︎◻︎■︎ ●︎♓︎⬧︎⧫︎□︎⬧︎</p></div>
`;

    setTimeout(() => {
        black.innerHTML=`
    <div id="text" style="animation-duration: 10s; font-size: 70px" ><p>11/04</p></div>
    `;
    
    setTimeout(() => {
        black.innerHTML=`
        <img src="extras/screamer.jpg" class="screamer"></img>
        `;
        setTimeout(() => {
            black.innerHTML=`
            <div id="text" style="animation-duration: 5s;color: red;  font-size: 70px;" ><p>I'm watching you</p></div>
        `;
        localStorage.setItem("cago", true);
        }, 300);
        
    }, 2000);
    }, 11000);
}

if (localStorage.getItem("cago") !== null) {
    console.log("ya cago")
    black.innerHTML=`
`;

}else if (localStorage.getItem("cago") == null) {
    console.log("no a cagado")
    thePit();
}

