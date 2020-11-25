const carList = document.querySelector('.carList');

const carsTemplateText = document.querySelector('.carsTemplate').innerHTML;

const carsTem = Handlebars.compile(carsTemplateText);

axios
.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(result){
    carList.innerHTML = carsTem({
        cars : result.data
    })
})

// axios
// .get('http://api-tutor.herokuapp.com/v1/cars/color')
// .then(function(makes){
//     colorList.innerHTML = colorTem({
//         colors : makes.data
    
// })
// })