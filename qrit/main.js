var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("text");
  
  console.log(elText.value.length)
  if (elText.value.length > 191) {
    elText.value = elText.value.substr(0,191);
    elText.focus();
    return;
  }
  
  qrcode.makeCode(elText.value);
  document.getElementById("btnQRDownload").href = document.getElementById("qr-gen").src; 
}

$(window).ready(function() { 
  makeCode();
});


$('#text').each(function() {
    var elem = $(this);
 
    // Save current value of element
    elem.data('oldVal', elem.val());
 
    // Look for changes in the value
    elem.bind("propertychange change click keyup input paste", function(event){
       // If value has changed...
       if (elem.data('oldVal') != elem.val()) {
        // Updated stored value
        elem.data('oldVal', elem.val());
 
        makeCode();
        
      }
    });
  });

$("#text").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });

  function changeInput(i) {
    document.getElementById("text").value = i;
    window.location.href ="#qrcode";
    makeCode();
  }
  async function emailCopied(a) {
    if(a) {
      copyEmailBtn = document.getElementById("copyEmail")
      copyEmailBtn.classList.add("emailCopySuccessful")
      await sleep(650)
      copyEmailBtn.classList.remove("emailCopySuccessful")
    } else {
      copyEmailBtn = document.getElementById("copyEmail")
      copyEmailBtn.classList.add("emailCopyUnsuccessful")
      await sleep(650)
      copyEmailBtn.classList.remove("emailCopyUnsuccessful")
    }
    
  }
  function shareEmail() {

    if(navigator.share) {
      // If WebShare API supported
      try {
        navigator.share({
          text: "skylarmccauley864@gmail.com"
        })
        emailCopied(true)
      } catch (ex) {
        console.log(ex)
        emailCopied(false)
      }
      
    } else {
      try {
        Clipboard.copy('skylarmccauley864@gmail.com')
        emailCopied(true)
      } catch (ex) {
        console.log(ex)
        emailCopied(false)
      }
      
    }
  }
  window.Clipboard = (function(window, document, navigator) {
    var textArea,
        copy;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text) {
        textArea = document.createElement('textArea');
        textArea.value = text;
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