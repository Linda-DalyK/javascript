var autoCaps = (function(str)

{
    var str = 'what a wonderful world'
    var fromCharCode = String.fromCharCode;
    return function(str){
        str.replace(/\b[a-z]|\B[A-Z]/g, function(x){
            return fromCharCode(x.charCodeAt(0)^32);
        });
    }
})();