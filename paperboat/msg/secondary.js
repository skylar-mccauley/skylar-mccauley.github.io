function applyVerText() {
    document.getElementById("ver").innerHTML = `v0.7.1`;
}
function applyShareText() {
	if(navigator.share) {
		document.getElementById("share").innerHTML= `Click here to share the link to this message!`
	}
}
function toggleDisplay(e) {
    var e = document.getElementById(e);
    if (e.style.display === "none") {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  }
function shareLink() {
	paperBoatURL = window.location.href
	if (navigator.share) {
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
        textArea.value = window.location.href;
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

function init() {
    applyVerText()
    applyShareText()
    
    var msg = window.location.hash
    msg = msg.substr(1);
    try {
         msg = CryptoJS.AES.decrypt(msg, "pb-0909");
    } catch (ex) {
        console.log(ex)
    }
    function determineMsg() {
        toggleDisplay("l")
        function prepareShare() {
            document.getElementById("hidden").innerHTML = window.location.href;
        }
        function noMsg() {
            document.getElementById("f-msg").innerHTML = `No message here :(`;
            toggleDisplay('hopesanddreams')
            toggleDisplay('pending-msg')
            toggleDisplay('pending-msg-div')
            toggleDisplay('share')
        }
        
        if(window.location.hash.length < 1) return noMsg()
        document.getElementById("f-msg").innerHTML = `${msg.toString(CryptoJS.enc.Utf8)}`;
    }
    determineMsg()
    
    
    
  //  document.getElementById("share").a=`${window.location.href}`;
}

//#U2FsdGVkX1/6dRIlXfQvI/YzDh9ATYNdZXLjxOPH2lk=