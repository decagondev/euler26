var glrc = function(mn){
    var ln = 1;
    var lcs = 1;
    
    for(var cn = ln + 1; cn <= mn; cn++){
        var cs = getcs(cn);
      
        if(cs > lcs){
            lcs = cs;
            ln = cn;
        }
    }
    
    return ln ;
};

var getcs = function(num){
    var numerator = 1;
    var numerators = [];
    var numeratorDigits = [];
    
    while(!digitsInSequence){
        if(numerator == 0){
            return 0;
        }

        for(var i = 0; i < numerators.length; i++){
            if(numerator == numerators[i]){
                var digitsInSequence = 0;
                
                for(var j = i; j < numerators.length; j++){
                    digitsInSequence += numeratorDigits[j];
                }
                
                return digitsInSequence;
            }
        }

        numerators[numerators.length] = numerator;
        var digits = 1;
        while(num > numerator){
            numerator *= 10;
            digits++;
        }
        numeratorDigits[numeratorDigits.length] = digits;
    
        numerator = numerator % num;
    }
};

console.log(glrc(1000));
    
