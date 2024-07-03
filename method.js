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
    // Connect with div
    const itemCContainer = document.getElementById('item-container');
    items.forEach(item => {
        // Create a div
        const itemCard = document.createElement('div');
        itemCard.classList = `card card-compact bg-white w-full shadow-xl`;

        // Set innerHTML
        itemCard.innerHTML = `
            <figure>
                <img
                    src="${item.image}"
                    alt="Shoes"
                    class="item-image" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-gray-800">${item.title}</h2>
                <div class="card-actions justify-center my-4">
                    <button onclick="handleClick()" class="btn btn-primary ">View Details</button>
                </div>
            </div>
        `;

        // Append child
        itemCContainer.appendChild(itemCard);
    });
};

// HandleDetailsButton
const handleClick = () =>{
    console.log('button clicked');
}