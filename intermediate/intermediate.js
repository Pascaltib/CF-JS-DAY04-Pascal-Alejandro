
class Hotel {
    hotelName;
    numberOfNights;
    address;
    image;
    constructor(name, address, img, nights = Math.floor(Math.random()*10)+1) {
        this.hotelName = name;
        this.numberOfNights = nights;
        this.address = address;
        this.image = img;
    }
    showAvailability(x) {
        if (this.numberOfNights >= x) {
            console.log("Available");
        }
        else {
            console.log("Not Available");
        }
    }
}




var hotelA = new Hotel("Hillton", "Fakestreet 123", "<insert image>");
var hotelB = new Hotel("CodeFactory", "Nowhere 321", "<insert image>");
var hotelC = new Hotel("Windows", "There", "<insert image>");

document.getElementById('name1').innerHTML = hotelA.hotelName;
document.getElementById('name2').innerHTML = hotelB.hotelName;
document.getElementById('name3').innerHTML = hotelC.hotelName;
document.getElementById('address1').innerHTML = hotelA.address;
document.getElementById('address2').innerHTML = hotelB.address;
document.getElementById('address3').innerHTML = hotelC.address;

document.getElementById('btn1').addEventListener('click', function(){hotelA.showAvailability(4);}, false);
document.getElementById('btn2').addEventListener('click', function(){hotelB.showAvailability(4);}, false);
document.getElementById('btn3').addEventListener('click', function(){hotelC.showAvailability(4);}, false);
