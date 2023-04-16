// Error 404 Script
function errorText() {
    var errors = Array("PAGE_NOT_FOUND", "PAGE_DOES_NOT_EXIST", "PAGE_EXISTS_NULL", "PAGE_EXISTS_VIOLATION", "CANNOT_FIND_PAGE", "PAGE_NULL", "PAGE_404");

    var item = errors[Math.floor(Math.random()*errors.length)];
    
    document.write(`${item}`);
}
function errorHexStop() {
    var stopErrors = Array("000000ED", "000000AD", "000000ID", "000000OD", "000000UD", "000001AD", "000001BD", "000000BD", "0000002CD", "000014CC")
    
    var sE = stopErrors[Math.floor(Math.random()*stopErrors.length)];

    return document.write(sE)
}
function errorHexExtra() {
    var extraErrors = Array("80F128D0", "000009C", '00000000', "80D247F0", "71D042E2")
    var eE = extraErrors[Math.floor(Math.random()*extraErrors.length)];
    
    return document.write(eE)
}    
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            document.getElementById("restart").style.display = "block";
            window.location.href="https://skylarmccauley.com"
        }
    }, stepTime);
}

