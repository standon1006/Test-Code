 // javascript
d3.csv("Testdate.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].RpYr);
        console.log(data[i].RpWk);
    }
});
