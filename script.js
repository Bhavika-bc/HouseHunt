                                //lOGIN PAGE//
function toggleForm(type) {
    const loginF = document.getElementById('loginForm');
    const registerF = document.getElementById('registerForm');
    const loginT = document.getElementById('loginTab');
    const registerT = document.getElementById('registerTab');

if (type === 'register') {
    loginF.classList.add('hidden');
    registerF.classList.remove('hidden');
    registerT.classList.add('active');
    loginT.classList.remove('active');

    } else {
        registerF.classList.add('hidden');
        loginF.classList.remove('hidden');
        loginT.classList.add('active');
        registerT.classList.remove('active');
            }
 }

                                    //RENT BUY STUFF//

// REPLACEMENT FOR GOBACK
function goBack() {
    // Hide the Marketplace listings
    document.getElementById('listings-view').style.display = 'none';

    // Show the Home Page sections again
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.main-content').style.display = 'block';
    
    // Ensure the selection container is visible
    document.getElementById('selection-view').style.display = 'block';
}

// REPLACEMENT FOR SHOWLISTINGS (Tags removed)
function showListings(filter) {
    // Hide the landing page parts
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.main-content').style.display = 'none';
    document.getElementById('selection-view').style.display = 'none';

    // Show the Marketplace
    const listingsSection = document.getElementById('listings-view');
    listingsSection.style.display = 'block';
    
    document.getElementById('view-title').innerText = filter === 'buy' ? "Houses for Sale" : "Houses for Rent";

    const grid = document.getElementById('property-grid');
    const filtered = propertyData.filter(h => h.type === filter);
    
    // Inside your showListings function in script.js
grid.innerHTML = filtered.map(house => `
    <div class="house-column-card">
        <div class="card-img-box">
            <img src="${house.img}" alt="property">
        </div>
        <div class="p-3">
            <h3>${house.title}</h3>
            <p>📍 ${house.loc}</p>
            <div class="price-row">
                <p class="price"><strong>${house.price}</strong></p>
                <span class="type-tag">for ${house.type}</span>
            </div>
            <hr>
            <div class="owner-info" style="font-size: 0.8rem; color: #666;">
                <p>Owner: ${house.owner}</p>
                <p>${house.email}</p>
            </div>
            <button class="btn-primary" style="width:100%; margin-top:10px;">View Details</button>
        </div>
    </div>
`).join('');
}

    // 3 RENTALS
    const propertyData = [
    { 
        id: 1, 
        type: 'rent', 
        title: 'Serenity', 
        price: '₹45,000/mo', 
        loc: 'Laland, Indore', 
        img: 'images/image-2.jpg',
        owner: 'Bhavika', 
        email: 'bhavika@househunt.com' 
    },
    
    { 
        id: 2, 
        type: 'rent', 
        title: 'Shreik Park 2',
        price: '₹25,000/mo', 
        loc: 'River, Indore',
        img: 'images/image-3.jpg',
        owner: 'bhavika',
        email: 'bhavika@househunt.com'
    },

    { 
        id: 3,
        type: 'rent',
        title: 'ApolloCity',
        price: '₹35,000/mo',
        loc: 'Mania, Indore',
        img: 'images/image-4.avif',
        owner: 'Bhavika',
        email: 'bhavika@househunt.com'
    },
    
    // 3 BUY
    {
        id: 4,
        type: 'buy', 
        title: 'Mahima Smart City NX', 
        price: '₹1.8 Cr', 
        loc: 'Super Corridor, Indore', 
        img: 'images/house.jpg', 
        owner: 'Bhavika', 
        email: 'bbhavika@househunt.com' 
    },

    { 
        id: 5, 
        type: 'buy', 
        title: 'Skilly Town', 
        price: '₹95 Lac', 
        loc: 'Long Road, Indore', 
        img: 'images/image-2.jpg',
        owner: 'Bhavika', 
        email: 'bhavika@househunt.com' 
    },

    {
        id: 6, 
        type: 'buy', 
        title: 'Exotica', 
        price: '₹2.2 Cr', 
        loc: 'Cat nip, Indore', 
        img: 'images/image-3.jpg', 
        owner: 'Bhavika', 
        email: 'bhavika@househunt.com'
    }
];

function showListings(filter) {
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.main-content').style.display = 'none';
    document.getElementById('selection-view').style.display = 'none';

    const listingsSection = document.getElementById('listings-view');
    listingsSection.style.display = 'block';
    
    document.getElementById('view-title').innerText = filter === 'buy' ? "Houses for Sale" : "Houses for Rent";

    const grid = document.getElementById('property-grid');
    const filtered = propertyData.filter(h => h.type === filter);
    
    grid.innerHTML = filtered.map(house => `
        <div class="horizontal-card">
            <div class="card-img-box">
                <img src="${house.img}" alt="property">
                <span class="tag">FEATURED</span>
            </div>
            <div class="card-content">
                <h3>${house.title}</h3>
                <p class="location">📍 ${house.loc}</p>
                <div class="price-row">
                    <span class="price-val">${house.price}</span>
                    <span class="type-text">for ${house.type}</span>
                </div>
                <div class="owner-section">
                    <p><strong>Owner:</strong> ${house.owner}</p>
                    <p><strong>Email:</strong> ${house.email}</p>
                </div>
            </div>
        </div>
    `).join('');
}
