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
        <button onclick=sendPage("page2") class="btn-weiter">
            Weiter
        </button>
    </div>
    `,
    page2: `    <div class="content">
    <img src="sources/page2/page2.jpg">
    <span>
        Ich bin immer heftig traurig gewesen weißt Du.
        Auch wegen vielen anderen Sachen.
        Geholfen hat mir, immer die Bindung zu Allah und zu Dir zu behalten. 
        Ich habe gebetet und meine Stirn auf den Boden gelegt um Allah anzubeten.
        In meinen Gedanken habe ich meinen Kopf an deinen Kopf gehalten und kurz alles vergessen.
    </span>
    <button onclick=sendPage("page1") class="btn-zurueck">
    Zurück
</button>
    <button onclick=sendPage("page3") class="btn-weiter">
        Weiter
    </button>
</div>`,
    page3: `        <div class="content">
    <img src="sources/page3/page3.jpg">
    <span>
        Schmerz ist nichts im Vergleich zu dem, wie es sich anfühlt aufzuhören obwohl man weitermachen will.
        Dieses Lächeln war mein Licht und der Grund warum es mir niemals zu schade war mir mühe zu geben. 
        Wenn ich einen schlechten Tag hatte, hab ich es mir immer angeschaut und mir ging es besser.
        Niemals könnte ich Dich einfach so aufgeben.
    </span>
    <button onclick=sendPage("page2") class="btn-zurueck">
    Zurück
</button>
    <button onclick=sendPage("page4") class="btn-weiter">
        Weiter
    </button>
</div>`,



    page4: `    <div class="content">
    <img src="sources/page4/page4.jpg">
    <span>
        Ich sah Dich nicht einfach als meine Freundin.
        Du warst direkt das Allerwichtigste und meine allerengste Familie.        
    </span>
    <button onclick=sendPage("page3") class="btn-zurueck">
    Zurück
</button>
    <button onclick=sendPage("page5") class="btn-weiter">
        Weiter
    </button>
</div>

    `,

    page5: `<div class="content">
    <img src="sources/page5/page5.jpg">
    <span>
    Die Zeit, als Du da warst, war an sich echt eine schwere Zeit, dennoch hast Du diese Zeit für mich zur allerbesten gemacht.    </span>
    <button onclick=sendPage("page4") class="btn-zurueck">
    Zurück
</button>
    <button onclick=sendPage("page6") class="btn-weiter">
        Weiter
    </button>
</div>`,

    page6: `<div class="content page5">
    <div class="main-txt">
        <img class="img-end" src="sources/page 6/page6.jpg">
        <button onclick=sendPage("page5") class="btn-zurueck">
        Zurück
    </button>
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
    document.body.innerHTML = bodyContents[pageIndex];` <div class="main">
    <img class="img-mond" src="img/page-1.jpg">
    <div class="main-txt">
        <span>
            jndsfnsfnerjaisofnvso
        </span>
        <button class="btn-weiter" onclick="further()">
            Weiter
        </button>
    </div>
</div>`;
}
