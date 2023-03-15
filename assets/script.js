new URLSearchParams(window.location.search).forEach((value) => {
    checkParams(value);
})


function checkParams(parameter) {
    // ------------- Stuff --------------

    const secrets = ["livestream"]
    const secretlinks = [
        "https://youtube.com/channel/UCItbfk2X2ASiexdsX7rEv-g/live"
    ]

    for (let i = 0; i < secrets.length; i++) {
        if (parameter == secrets[i]) {
            openLink(secretlinks[i])
            window.location.search = ""
        }
    }
    // -----------------------------------
}

function openLink(link) {
    var linkchecker = window.open(link)

    if (!linkchecker || linkchecker.closed || typeof linkchecker.closed == 'undefined') {
        alert("Pop-up Blocker is enabled! Please add this site to your exception list.")
    }
}


function redirectParamater(parameter) {
    window.location.search = "=" + parameter
}