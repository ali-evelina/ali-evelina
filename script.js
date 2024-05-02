let bodyContents = {
    page1: `
    <div class="content page1">
        <span class="page1-text">
            Jede Freundlichkeit wird von Allah belohnt.
    Du warst auch sehr gut zu mir und hast mich richtig krass glücklich gemacht.
    Das vergesse ich Dir nicht. 
    Und Allah vergisst es Dir natürlich auch nicht.
    
    Alles gute was man tut, kommt irgendwann zu einem zurück.
        </span>
        <div class="buttons">
        <button onclick=sendPage("page2") class="btn-weiter">
            Weiter
        </button>
        </div>
    </div>
    `,
    page2: `        <div class="content">
    <div class="content-main">
        <img src="page2.jpg">
        <span>
        Es gab viele negative Momente bei mir, aber ich habe gelernt, damit umzugehen. 
        Das Beten und die Bindung zu Dir haben mir geholfen. 
        Ich habe meine Stirn auf den Boden gelegt um Allah anzubeten.
        In meinen Gedanken habe ich auch meinen Kopf an deinen Kopf gehalten und kurz alles vergessen.
        </span>
    </div>
    <div class="buttons">
        <button onclick='sendPage("page1")' class="btn-zurueck">
        Zurück
        </button>
        <button onclick='sendPage("page3")' class="btn-weiter">
            Weiter
        </button>
    </div>
</div>`,
    page3: `        <div class="content">
    <div class="content-main">
    <img src="page3.jpg">
    <span>
        Schmerz ist nichts im Vergleich zu dem, wie es sich anfühlt aufzuhören obwohl man weitermachen will.
        Dieses Lächeln war mein Licht und der Grund warum es mir niemals zu schade war mir mühe zu geben. 
        Wenn ich einen schlechten Tag hatte, hab ich es mir immer angeschaut und mir ging es besser.
        Niemals könnte ich Dich einfach so aufgeben.
    </span>
    </div>
    <div class="buttons">
    <button onclick=sendPage("page2") class="btn-zurueck">
    Zurück
</button>
    <button onclick=sendPage("page4") class="btn-weiter">
        Weiter
    </button>
    </div>
</div>`,



    page4: `    <div class="content">
    <div class="content-main">
    <img src="page4.jpg">
    <span>
        Ich sah Dich nicht einfach als meine Freundin.
        Du warst direkt das Allerwichtigste und meine allerengste Familie.        
    </span>
    </div>
    <div class="buttons">
    <button onclick=sendPage("page3") class="btn-zurueck">
    Zurück
</button>
    <button onclick=sendPage("page5") class="btn-weiter">
        Weiter
    </button>
    </div>
</div>

    `,

    page5: `<div class="content">
    <div class="content-main">
    <img src="page5.jpg">
    <span>
    Die Zeit, als Du da warst, war an sich echt eine schwere Zeit, dennoch hast Du diese Zeit für mich zur allerbesten gemacht.    </span>
    </div>
    <div class="buttons">
    <button onclick=sendPage("page4") class="btn-zurueck">
    Zurück
</button>
    <button onclick=sendPage("page6") class="btn-weiter">
        Weiter
    </button>
    </div>
</div>`,

    page6: `<div class="content page5">
    <div class="main-txt">
        <img class="img-end" src="page6.jpg">
        <div class="buttons">
        <button onclick=sendPage("page5") class="btn-zurueck">
        Zurück
    </button>
    </div>
    </div>
</div>`
}

function sendCode() {
    let code = document.getElementsByName("code")[0]
    if(code.value === "5236") {
        sendPage("page1");
    }
    else {
        code.style.borderColor = "red"
    }
}


function sendPage(pageIndex) {
    document.body.innerHTML = bodyContents[pageIndex];;
}
