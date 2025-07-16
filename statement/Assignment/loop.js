let data = ["Seyi","Wale", "Ade"];
    data = [{name:'Seyi', age:30}, {name:'Wale', age:50},{name:'Ola', age:40}]
for (let i=0; i <data.length; i++){
    // show.innerHTML = data
    show.innerHTML = `My name is ${data[i].name } and My age is ${data[i].age} years` 
}