var a = ['january', 'march', 'may', 'july', 'august', 'october', 'december']
var b = ['april', 'june', 'september', 'november']
var c = ['february']

function getValue() {
    var input = document.getElementById("month").value.toLowerCase();
    var text;
    
    if (a.indexOf(input) > -1) {
        text = "The number of days in " + input + ", " + 2020 + " is " + 31;
    } else if (b.indexOf(input) > -1) {
        text = "The number of days in " + input + ", " + 2020 + " is " + 30;
    } else {
        text = "The number of days in " + input + ", " + 2020 + " is " + 29;
    }
    document.getElementById("view").innerHTML = text
}