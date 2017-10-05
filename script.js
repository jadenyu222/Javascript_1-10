/**
 * Created by h205p3 on 9/26/17.
 */
//Problem 1
function sleep_in(x, y){
    var weekDay = x;
    var holiday = y;
    if(holiday == true){
        return true;
    }else{
        if(weekDay == false){
            return true;
        }else{
            return false;
        }
    }

}

//Problem 2
    function monkeyTrouble(param1, param2) {
        var a_Smile = param1;
        var b_Smile = param2;
        if(a_Smile == b_Smile){
            return true;
        }else{
            return false;
        }

    }

    //Problem 3
    function string_times(string, num){
        var result = "";
        for(var i = 0; i < num; i ++){
            result += string;
        }
        return result;
    }


    //problem 4
function front_times(string, num){
    var word = "";
    var total = "";
    for(var i = 0; i < num; i ++){
        word += string[i];
    }
    for(var b = 0; b < num; b++){
        total += word;
    }
    return total;
}

//Problem 5
function string_bits(string){
    var word = string;
    var result = "";
    var length = string.length;
    for(var i = 0; i < length; i++){
        if((i % 2) == 0){
            result += word[i];
        }
    }
    return result;
}

//problem 6
function caughtSpeeding(speed, bday){
    var value = 0;
    if(bday == true){
        if(speed <= 65){
            return value;
        }else{
            if((speed >=66) == (speed <= 85)){
                value++;
                return value;
            }else{
                if((speed >= 86)){
                    value += 2;
                    return value;
                }
            }
        }
    }else{
        if(speed <= 60){
            return value;
        }else{
            if((speed >=61) == (speed <= 80)){
                value++;
                return value;
            }else{
                if((speed >= 81)){
                    value += 2;
                    return value;
                }
            }
        }
    }

}

// Problem 7
function fizz_buzz(num){
    var result = "";
    if(((num % 3) == 0) && ((num % 5) == 0)) {
        result += "FizzBuzz";
        return result;
    }else {
        if ((num % 3) == 0) {
            result += "Fizz";
            return result;
        } else {
            if ((num % 5) == 0) {
                result += "Buzz"
                return result;
            }else{
                result += num + "!";
                return result;
            }
        }
    }

}

//problem 8
function teaParty(tea, candy){
    var value = 0;
    if((tea< 5) || (candy < 5)){
        return value;
    }else{
        if((tea>= 5) && (candy >= 5)){
            if((tea >= (candy * 2) || (candy >= (tea * 2)))){
                value += 2;
                return value;

            }else{
                value++;
                return value;
            }
        }
    }
}


//problem 9
function blackjack(a, b) {
    var j = 0;
    if((a == b) && (b == a)){
        if(a <= 21){
            j += a;
            return j;
        }else{
            return j;
        }
    }else{
        if((a > b) && (a <= 21)){
            j += a;
            return j;
        }else{
            if(b <= 21){
                j += b;
                return j;
            }else{
                if((b > a) && (b <= 21)) {
                    j += b;
                    return j;
                } else{
                    if(a <= 21){
                        j += a;
                        return j;
                    }else{
                        return j;
                    }
                }
            }
        }
    }
}

//problem 10
function loneSum(a, b, c){
    var sum = 0;
    if((a == b) && (b == c) && (c == a)){
        return sum;
    }else{
        if((a == b) && (b == a)){
            sum += c;
            return sum;
        }else{
            if((a == c) && (c == a)){
                sum += b;
                return sum;
            }else{
                if((c == b) && (b == c)){
                    sum += a;
                    return sum;
                }else{
                    if((a != b) && (b != c) && (c != a)){
                        sum += a;
                        sum += b;
                        sum += c;
                        return sum;
                    }

                }
            }
        }

    }
}


function tester() {

    //document.getElementById("output").innerHTML = sleep_in(true, false);
    //document.getElementById("output").innerHTML = monkeyTrouble(true, false);
    //test third method, etc
    //document.getElementById("output").innerHTML = string_times("hi", 5);
    //document.getElementById("output").innerHTML = front_times("abcdefg", 7);
    //document.getElementById("output").innerHTML = string_bits("banana");
    //document.getElementById("output").innerHTML = caughtSpeeding(85, true);
    //document.getElementById("output").innerHTML = fizz_buzz(35);
    //document.getElementById("output").innerHTML = teaParty(5, 10)
    //document.getElementById("output").innerHTML = blackjack(5, 67);
    //document.getElementById("output").innerHTML = loneSum(4, 6, 4);
}

