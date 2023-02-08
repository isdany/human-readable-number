module.exports = function toReadable (number) {
    let n1='one';
    let n2='two';
    let n3='three';
    let n4='four';
    let n5='five';
    let n6='six';
    let n7='seven';
    let n8='eight';
    let n9='nine';
    let n10='ten';
    let n11='eleven';
    let n12='twelve';
    let n13='thirteen';
    let n14='fourteen';
    let n15='fifteen';
    let n16='sixteen';
    let n17='seventeen';
    let n18='eighteen';
    let n19='nineteen';
    let n20='twenty';
    let n30='thirty';
    let n40='forty';
    let n50='fifty';
    let n60='sixty';
    let n70='seventy';
    let n80='eighty';
    let n90='ninety';
    let n100='hundred';
    if(number<10){
            if(number==0) number='zero';
            if(number==1)  number=n1;
            if(number==2) number=n2;
            if(number==3) number=n3;
            if(number==4) number=n4;
            if(number==5) number=n5;
            if(number==6) number=n6;
            if(number==7) number=n7;
            if(number==8) number=n8;
            if(number==9) number=n9;
    }
    else if(number>9 && number<100){
    number= getTodigit();
    }
    else if(number>99 && number<1000){
        if(number%100>10&&number%100<20){
            number=getfirstSymbol()+' hundred ' + getsecondSymbol()
        }
        else if(number%100==0){
            number=getfirstSymbol()+' hundred'
        }
        else if(number%10==0&&number%100!=0){
        number=getfirstSymbol()+' hundred ' + getsecondSymbol()
        }
        else if(parseInt(number/10)%10==0){
            number=getfirstSymbol()+' hundred '+getexcess()
        }
        else{
        number=getfirstSymbol()+' hundred ' + getsecondSymbol()+ ' ' + getexcess();
        }

    }


    function getTodigit(){
         if(parseInt(number/10)==1){
            if(number%10==0) number=n10;
            if((number%10)==1) number=n11;
            if((number%10)==2) number=n12;
            if((number%10)==3) number=n13;
            if((number%10)==4) number=n14;
            if((number%10)==5) number=n15;
            if((number%10)==6) number=n16;
            if((number%10)==7) number=n17;
            if((number%10)==8) number=n18;
            if((number%10)==9) number=n19;
        }
        if(parseInt(number/10)==2){
         if(number%10==0) {
             number=n20;
         }
         else{
         number='twenty '+ getexcess();
         }
         }
         if(parseInt(number/10)==3){
             if(number%10==0) {
                 number=n30;
             }
             else{
             number='thirty '+ getexcess();
             }
             }
             if(parseInt(number/10)==4){
                 if(number%10==0) {
                     number=n40;
                 }
                 else{
                 number='forty '+ getexcess();
                 }
                 }
                 if(parseInt(number/10)==5){
                     if(number%10==0) {
                         number=n50;
                     }
                     else{
                     number='fifty '+ getexcess();
                     }
                     }
                     if(parseInt(number/10)==6){
                         if(number%10==0) {
                             number=n60;
                         }
                         else{
                         number='sixty '+ getexcess();
                         }
                         }
                         if(parseInt(number/10)==7){
                             if(number%10==0) {
                                 number=n70;
                             }
                             else{
                             number='seventy '+ getexcess();
                             }
                             }
                             if(parseInt(number/10)==8){
                                 if(number%10==0) {
                                     number=n80;
                                 }
                                 else{
                                 number='eighty '+ getexcess();
                                 }
                                 }
                                 if(parseInt(number/10)==9){
                                     if(number%10==0) {
                                         number=n90;
                                     }
                                     else{
                                     number='ninety '+ getexcess();
                                     }
                                 }
                                 return number;
                             }
                             function getexcess(){
                                let excess;
                                if((number%10)==1) excess=n1;
                                if((number%10)==2) excess=n2;
                                if((number%10)==3) excess=n3;
                                if((number%10)==4) excess=n4;
                                if((number%10)==5) excess=n5;
                                if((number%10)==6) excess=n6;
                                if((number%10)==7) excess=n7;
                                if((number%10)==8) excess=n8;
                                if((number%10)==9) excess=n9;
                                if((number%10)==0) excess='';
                                return excess;
                            }
                            function getfirstSymbol(){
                                let firstsymbol;
                                if(number>99&&number<200) firstsymbol=n1
                                if(parseInt(number/100)==2) firstsymbol=n2
                                if(parseInt(number/100)==3) firstsymbol=n3
                                if(parseInt(number/100)==4) firstsymbol=n4
                                if(parseInt(number/100)==5) firstsymbol=n5
                                if(parseInt(number/100)==6) firstsymbol=n6
                                if(parseInt(number/100)==7) firstsymbol=n7
                                if(parseInt(number/100)==8) firstsymbol=n8
                                if(parseInt(number/100)==9) firstsymbol=n9
                                return firstsymbol;
                            }
                            function getsecondSymbol(){
                                let secondsymbol;
                                let newnumber=number%100;
                                if(parseInt(newnumber/10)==0) return ''
                                if(parseInt(newnumber/10)==1){
                                    if(newnumber%10==0) secondsymbol=n10;
                                    if((newnumber%10)==1) secondsymbol=n11;
                                    if((newnumber%10)==2) secondsymbol=n12;
                                    if((newnumber%10)==3) secondsymbol=n13;
                                    if((newnumber%10)==4) secondsymbol=n14;
                                    if((newnumber%10)==5) secondsymbol=n15;
                                    if((newnumber%10)==6) secondsymbol=n16;
                                    if((newnumber%10)==7) secondsymbol=n17;
                                    if((newnumber%10)==8) secondsymbol=n18;
                                    if((newnumber%10)==9) secondsymbol=n19;
                                }
                                if(parseInt(newnumber/10)==2) secondsymbol='twenty'
                                if(parseInt(newnumber/10)==3) secondsymbol='thirty'
                                if(parseInt(newnumber/10)==4) secondsymbol='forty'
                                if(parseInt(newnumber/10)==5) secondsymbol='fifty'
                                if(parseInt(newnumber/10)==6) secondsymbol='sixty'
                                if(parseInt(newnumber/10)==7) secondsymbol='seventy'
                                if(parseInt(newnumber/10)==8) secondsymbol='eighty'
                                if(parseInt(newnumber/10)==9) secondsymbol='ninety'
                                return secondsymbol;
                            }
                             return number;
         }