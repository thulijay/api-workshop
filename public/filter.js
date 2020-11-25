const totalCars = document.querySelector('.carsFilter').innerHTML;
const colourFilter = document.querySelector('.colourFilter').innerHTML;
const brandFilter = document.querySelector('.brandFilter').innerHTML;
const filters = document.querySelector('.filterBtn')

const allCars = Handlebars.compile(totalCars);
const colours = Handlebars.compile(colourFilter);
const brands = Handlebars.compile(brandFilter);

const colourLists = document.querySelector('.selectColours')
const brandsList = document.querySelector('.selectBrands')
const allLists = document.querySelector('.dropDown')

axios
.get('http://api-tutor.herokuapp.com/v1/colors')
.then(function(result){
    colourLists.innerHTML = colours({
        colors : result.data   
    })
})

axios
.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(result){
    brandsList.innerHTML = brands({
        brands : result.data
    })
})

filters.addEventListener('click', () => {
const colourType = colourLists.value;
const brandType = brandsList.value;


if(colourType !== '' && brandType === ''){

    axios
.get('http://api-tutor.herokuapp.com/v1/cars/color/' + colourType)
.then(function(result){
    console.log(result.data);
    
    allLists.innerHTML = allCars({
        cars : result.data   
    })
})

}else if(brandType !== '' && colourType === ''){

    axios
    .get('http://api-tutor.herokuapp.com/v1/cars/make/' + brandType  )
    .then(function(result){
        console.log(result.data);

        allLists.innerHTML = allCars({
            cars : result.data
        })
    })
} else{
    axios
    .get('http://api-tutor.herokuapp.com/v1/cars/make/' + brandType + '/color/' + colourType  )
    .then(function(result){
        allLists.innerHTML = allCars({
            cars : result.data
        })
    })
    
}
})