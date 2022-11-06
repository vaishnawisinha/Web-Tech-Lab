// Question 1
function myfunction(a) {
    console.log(a);
    let myarray = a.split(" ");
    const lengths = [];
    myarray.forEach(function (item) {
      lengths.push(item.length);
    });
    lengths.sort();
    document.getElementById("short").innerHTML = "Shortest : " + lengths[0];
    document.getElementById("long").innerHTML =
      "Longest : " + lengths[lengths.length - 1];
  }
  // Question 2
  function calculate() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    const bmi = weight / (height * height);
    document.getElementById("score").innerHTML = bmi;
    if (bmi < 18) {
      document.getElementById("type").innerHTML = "Underweight";
    } else if (bmi >= 18 && bmi < 25) {
      document.getElementById("type").innerHTML = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
      document.getElementById("type").innerHTML = "Overweight";
    } else if (bmi >= 30) {
      document.getElementById("type").innerHTML = "Overweight";
    } else {
      document.getElementById("type").innerHTML = "Invaid Input";
    }
  }
  // Question 3
  function grow() {
    var r = parseInt(document.getElementById("row").value);
    var c = parseInt(document.getElementById("column").value);
    var list = [
      "https://m.media-amazon.com/images/I/513SGvOptJL.jpg",
      "https://healthiersteps.com/wp-content/uploads/2021/12/green-apple-benefits.jpeg",
      "https://healthjade.com/wp-content/uploads/2017/10/orange-fruit.jpg",
    ];
    document.getElementById("garden").innerHTML = null;
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        var rand = Math.floor(Math.random() * 3);
        var im = "<img src=" + list[rand] + " width = 150 height = 150 ></img>";
        document.getElementById("garden").innerHTML += im;
      }
      document.getElementById("garden").innerHTML += "<br>";
    }
  }
  function convert() {
    let v1 = document.getElementById("from").value;
    console.log(v1);
    let v2 = document.getElementById("to").value;
    console.log(v2);
    let inputvalue = parseFloat(document.getElementById("inputvalue").value);
    if (v1 == "Rupee" && v2 == "USD") {
      let value = inputvalue / 80;
      document.getElementById("value").innerHTML = "Value in USD is : " + value;
    } else if (v1 == "USD" && v2 == "Rupee") {
      let value = inputvalue * 80;
      document.getElementById("value").innerHTML = "Value in INR is : " + value;
    } else {
      document.getElementById("value").innerHTML = "Invalid Option. Try Again!";
    }
  }
  
  function flip() {
    let list = [
      "https://www.pngitem.com/pimgs/m/123-1232373_coin-png-pic-heads-and-tails-indian-coin.png",
      "https://www.pngitem.com/pimgs/m/391-3913308_2-finger-rupee-indian-2-rs-coin-hd.png",
    ];
    var img1 = document.getElementById("coin");
    var head = document.getElementById("tc");
    var tail = document.getElementById("hc");
    var h = parseInt(head.innerHTML);
    var t = parseInt(tail.innerHTML);
  
    //     var l = ["Head.jpg", "Tail.jpg"];
    var s = Math.floor(Math.random() * 2);
    if (s == 0) {
      img1.src = list[1];
      head.innerHTML = h + 1;
    } else {
      img1.src = list[0];
      tail.innerHTML = t + 1;
    }
  }
  function reset() {
    var head = document.getElementById("tc");
    var tail = document.getElementById("hc");
    head.innerHTML = 0;
    tail.innerHTML = 0;
  }
  
  function TotalBill() {
    let winput = document.getElementById("cakeweight").value;
    console.log(winput);
    let cinput = document.getElementById("cake").value;
    let tipinput = parseInt(document.getElementById("tip").value);
    let c = 100;
    let Cost = c * winput;
    let tax = 9;
    let costwtax = Cost + (tax * Cost) / 100;
    let TotalCost = costwtax + (tipinput * costwtax) / 100;
    if (cinput == "True") {
      document.getElementById("invalid").innerHTML =
        "=>Please select your preference !!";
    } else {
      document.getElementById("bill").textContent =
        "Name = " +
        `${cinput}` +
        "\nWeight = " +
        `${winput}` +
        "\nTip =" +
        `${tipinput}` +
        "\nTax = " +
        `${tax}` +
        "\n\n Total Cost = " +
        `${TotalCost}`;
      document.getElementById("bill").innerHTML = document
        .getElementById("bill")
        .innerHTML.replace(/\n\r?/g, "<br />");
    }
  }