const colorList = document.querySelector('.colorList')
const colorTemList = document.querySelector('.colorTem').innerHTML;

const colorTem = Handlebars.compile(colorTemList);

axios
.get('http://api-tutor.herokuapp.com/v1/cars/color')
.then(function(result){
    colorList.innerHTML = colorTem({
        colors : result.data
    
})
})