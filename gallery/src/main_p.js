const minID = 0
const maxID = 4
var fileStruct = "../src/hero-img/EX-"
var fileExt = ".jpeg"
var imgID = 0
var IDFind = new RegExp("\d+")


var desc = {
    "0":
        {
            "camera": "iPhone 13 Pro Max",
            "lens": "Wide Camera",
            "res": "4032 x 3024",
            "mp": "12",
            "mode": "Apple ProRAW",
            "format": "RAW DNG",
        },
    "1":
        {
            "camera": "iPhone XS Max",
            "lens": "Telephoto Camera",
            "res": "3024 x 4032",
            "mp": "12",
            "mode": "Apple Portrait Mode - Studio Light",
            "format": "HEIC",
        },
    "2":
        {
            "camera": "iPhone 11 Pro Max",
            "lens": "Wide Camera",
            "res": "3024 x 4032",
            "mp": "12",
            "mode": "Apple Portrait Mode - Studio Light",
            "format": "HEIC",
        },
    "3":
        {
            "camera": "iPhone 11 Pro Max",
            "lens": "Telephoto Camera",
            "res": "3024 x 4032",
            "mp": "12",
            "mode": "Apple Portrait Mode",
            "format": "HEIC",
        },
    "4":
    {
        "camera": "iPhone 11 Pro Max",
        "lens": "Wide Camera",
        "res": "3024 x 4032",
        "mp": "12",
        "mode": "Apple Night Mode",
        "format": "HEIC",
    }
}
$(document).ready(function() {
    loadDesc(0)
    $('#display_photo').attr('draggable', false)
})
function loadDesc(i) {
    document.getElementById('camera').innerHTML = (desc[Number(i)]).camera
            document.getElementById('lens').innerHTML = (desc[Number(i)]).lens
            document.getElementById('res').innerHTML = (desc[Number(i)]).res
            document.getElementById('mp').innerHTML = `${(desc[Number(i)]).mp}MP`
            document.getElementById('mode').innerHTML = (desc[Number(i)]).mode
            document.getElementById('format').innerHTML = (desc[Number(i)]).format
}
function nextPhoto(m) {
    const leftBtn = document.getElementById("left_btn");
    const rightBtn = document.getElementById("right_btn");
    switch(m) {
        case 0:
          //  console.log("Current Photo Loaded " + document.getElementById('display_photo').src)
            imgID = parseInt(document.getElementById('display_photo').src.replaceAll(fileExt,"").match(/[0-9]+$/)[0], 10)
            if (imgID - 1 >= minID && imgID - 1 <= maxID) {
            imgID = imgID - 1 // load prev image
            document.getElementById('display_photo').src = `${fileStruct}${imgID}${fileExt}`
            loadDesc(imgID)
            if (imgID < maxID) {
                document.getElementById("right_btn").classList.remove("inactive")
            }
            if(imgID == minID) {
                document.getElementById("left_btn").classList.add("inactive")
            }
        }
          break;
        case 1:
          //  console.log("Current Photo Loaded " + document.getElementById('display_photo').src)
          imgID = parseInt(document.getElementById('display_photo').src.replaceAll(fileExt,"").match(/[0-9]+$/)[0], 10)
            if (imgID + 1 >= minID && imgID + 1 <= maxID) {
                imgID = imgID + 1 // load next image
            document.getElementById('display_photo').src = `${fileStruct}${imgID}${fileExt}`
            console.log(String(desc[Number(imgID)].camera))
            loadDesc(imgID)
            }
            if (imgID > minID) {
                document.getElementById("left_btn").classList.remove("inactive")
            }
            if(imgID == maxID) {
                document.getElementById("right_btn").classList.add("inactive")
            }
            
            
            
          break;
      }
}