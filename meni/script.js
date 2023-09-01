const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "images/item-1.jpeg",
      desc: `Fluffy pancakes made with buttermilk that melt in your mouth `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "images/item-2.jpeg",
      desc: `Delicious diner double, made with double the portions`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "dessert",
      price: 6.99,
      img: "images/item-3.jpeg",
      desc: `A huge milkshake filled with strawberries, a doughnut, vanilla, sprinkles and whipped cream`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "images/item-4.jpeg",
      desc: `American way breakfast, with toasted eggs and cheese`,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "images/item-5.jpeg",
      desc: `Delicious beef burger filled with tomatoes salad burger sauce and eggs!`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "dessert",
      price: 18.99,
      img: "images/item-6.jpeg",
      desc: `Delicious milkshake made from oreos, dark chocolate, nutella and a strawberry`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "images/item-7.jpeg",
      desc: `English style burger with tomatoes, eggs, cheese, salad and bacon`,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "images/item-8.jpeg",
      desc: `Yours favourite american burger, just like McDonalds but better!`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "dessert",
      price: 16.99,
      img: "images/item-9.jpeg",
      desc: `Milkshake made for two with vanilla cream, ice, coffe and whipped cream`,
    },
    {
        id: 10,
        title: "Steak dinner",
        category: "dinner",
        price: 34.99,
        img: "images/item-10.jpeg",
        desc: `Delicious medium rare cow steak with crispy french fries and our secret sauce`,
      },
  ]; 

const sectoinCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')



window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu)
    displayMenuButtons()
})

// window.onload(displayMenuItems(menu))

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="menuitem">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join("")
    sectoinCenter.innerHTML = displayMenu
}

function displayMenuButtons(){
  
  const categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
        values.push(item.category)
    }
        return values
    },['all'])
    const categoryBtns = categories.map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
      }).join("")
      container.innerHTML = categoryBtns
      const filterBtns = document.querySelectorAll('.filter-btn')
      filterBtns.forEach(function(btn){
        btn.addEventListener('click', function (e) {
            const category = e.target.dataset.id
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem
                }
            })
            if(category === 'all'){
                displayMenuItems(menu)
            }else{
                displayMenuItems(menuCategory)
            }
          })
    })
}