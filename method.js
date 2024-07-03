console.log('connected successfully');

// Define the displayItem function first


// GET ALL DATA BY FETCH
const allData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const items = data;
        displayItem(items); // Now displayItem is defined
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

allData();



const displayItem = items => {

    // 01   connect with div 
    const itemCContainer = document.getElementById('item-container')
    items.forEach(item =>{
        
    //  02  create a div 

    const itemCard = document.createElement('div')
    itemCard.classList = `card card-compact bg-base-100 w-96 shadow-xl`

    //   03 set innterHTML

    itemCard.innerHTML = `
    <figure>
     <img
         src="${item.image}"
         alt="Shoes" />
     </figure>
     <div class="card-body">
         <h2 class="card-title">Shoes!</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
     <div class="card-actions justify-end">
     <button class="btn btn-primary">Buy Now</button>
     </div>
     </div>
 `;

        //  04  appendChild
        itemCContainer.appendChild(itemCard)

    })
}