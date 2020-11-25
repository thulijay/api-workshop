const carList = document.querySelector('.carList');
const carsTemplateText = document.querySelector('.carsTemplate').innerHTML;
const carsTem = Handlebars.compile(carsTemplateText);

const makeList = document.querySelector('.makesList');
const makeTemTxt = document.querySelector('.makeTem').innerHTML;
const makeTxt = Handlebars.compile(makeTemTxt);

const colorList = document.querySelector('.colorList');
const colorTemList = document.querySelector('.colorTem').innerHTML;
const colorTem = Handlebars.compile(colorTemList);


axios
.get('http://api-tutor.herokuapp.com/v1/cars')
.then(function(result){
    carList.innerHTML = carsTem({
        cars : result.data
    })
})

axios
.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(result){
    makeList.innerHTML = makeTxt({
        brands : result.data
    })
})

axios
.get('http://api-tutor.herokuapp.com/v1/colors')
.then(function(result){
    colorList.innerHTML = colorTem({
        colors : result.data
    
})
})