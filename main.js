
var a = prompt('Birinchi sonni kiriting');
var b = prompt('Ikkinchi sonni kiriting');
var c = prompt('Uchinchi sonni kiriting');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("faqat son kiritilmadi!");
} else {
    a = +a;
    b = +b;
    c = +c;

    if (a === b && b === c) {
        alert("hamma son teng");
    } else {
        var numbers = [a, b, c];
        numbers.sort(function(x, y) {
            return x - y;
        });
        
        var middleNumber = numbers[1];

        alert("O'rtacha son : " + middleNumber);
    }
}
