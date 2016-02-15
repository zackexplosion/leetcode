/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

var compareVersion = function(version1, version2) {
    
    version1 = version1.split('.').map(function(v){ return parseInt(v) });
    version2 = version2.split('.').map(function(v){ return parseInt(v) });
    
    console.log('version1', version1);
    console.log('version2', version2);

    var length = (version1.length >= version2.length) ? version1.length : version2.length;
    

    var result;
    for(var i = 0;i <= length;i++){
        if(i >= length){
            break;
        }
        var v1 = (typeof version1[i] === 'undefined')? 0 : version1[i] ;
        var v2 = (typeof version2[i] === 'undefined')? 0 : version2[i] ;
    
        if( v1 > v2 ){
            result = 1;
            break;
        }else if( v1 < v2 ){
            result = -1;
            break;
        }else{
            result = 0;
        }        
    }

    return result;

};
