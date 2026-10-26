function applyVerText() {
    document.getElementById("ver").innerHTML = `v0.7.1`;
    document.getElementById("msg").placeholder =`Type your stupid message here :P`;
}
function applyShareText() {
	if(navigator.share) {
		document.getElementById("paperBoatShareBtn").innerHTML= `Share link to your message!`
    }
}
function displayBlock(e) {
    var e = document.getElementById(e);
      e.style.display = "block";
}
function displayNone(e) {
    var e = document.getElementById(e);
      e.style.display = "none";
}
function applyWhisperText() {
    var width = parseFloat(window.screen.availWidth)
    if(!width >= parseFloat(1024)) {
        displayNone("whisper")
    }
}
function init() {
    applyVerText()
    applyShareText()
    applyWhisperText()
}

  function process() {
    
    // Get and Encode Message
    var msg = document.getElementById("msg").value
    if(msg.length < 1) {
        alert("You must write a message!")
        return
    }
    try {
        msg = CryptoJS.AES.encrypt(msg, "pb-0909");
    } catch (ex) {
        alert(ex + "\n\nTry not including odd chracters?")
        return;
    }
    displayBlock("sender")
    displayNone("composer")
    
    url=window.location.href
    //url=url.substring(0, url.length - 10); 
    //link=`${url}msg/index.html#${msg}`
    link=`${url}msg/#${msg}`
    document.getElementById("hidden").innerHTML = link
    // End
}
function recompose() {
    displayNone("sender")
    displayBlock("composer")
    document.getElementById("hidden").innerHTML = ""
}
function shareLink() {
	if (navigator.share) {
  // Web Share API is supported
  		
     paperBoatURL = document.getElementById("hidden").innerHTML; 
	  navigator.share({
	      title: 'PaperBoat Message',
	      url: paperBoatURL
	    })
	    .catch(console.error);
	    
		} else {
	  // Fallback
	  	Clipboard.copy()
		}
	
}
window.Clipboard = (function(window, document, navigator) {
    var textArea,
        copy;

        

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea() {
        textArea = document.createElement('textArea');
        textArea.value = document.getElementById("hidden").innerHTML;
        document.body.appendChild(textArea);
    }

    function selectText() {
        var range,
            selection;

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textArea.setSelectionRange(0, 999999);
        } else {
            textArea.select();
        }
    }

    function copyToClipboard() {        
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }

    copy = function(text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
        
    };

    return {
        copy: copy
    };
})(window, document, navigator);
