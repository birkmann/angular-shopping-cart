//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {

    this.products = [
        
        new product("PlayStation-4-Console", "PlayStation 4 Console", "PlayStation 4 is the best place to play with dynamic, connected gaming, powerful graphics and speed, intelligent personalization, deeply integrated social capabilities, and innovative second-screen features. Combining unparalleled content, immersive gaming experiences, all of your favorite digital entertainment apps, and PlayStation exclusives, PS4 centers on gamers, enabling them to play when, where and how they want. PS4 enables the greatest game developers in the world to unlock their creativity and push the boundaries of play through a system that is tuned specifically to their needs.", 399.99, 90, 0, 2, 0, 1, 2),
        new product("Xbox-One-Assassins-Creed-Unity-Bundle", "Xbox One Assassin's Creed Unity Bundle", "Xbox One brings together the best exclusive games, the most advanced multiplayer, and entertainment experiences you won't find anywhere else.", 348.37, 90, 0, 2, 0, 1, 2),
        new product("Samsung-UN48H6350-48-Inch-1080p-120Hz", "Samsung UN48H6350 48-Inch 1080p 120Hz Smart LED TV", "The new Samsung Smart Ultra-Slim TV H6350 lets you conveniently navigate your entire entertainment world on a central menu with five simple panels: On TV, On-Demand, your photos and music, social media and Smart TV apps. This allows you to effortlessly connect to the content you love, without having to aimlessly channel surf. Enjoy a fluid browsing experience, switch between content, stream and multitask faster and easier than ever before. Want to share videos from your phone to your TV? Or use your phone to watch what's on TV? With the H6350, you can enjoy a seamless viewing experience across all your smart devices, from anywhere, indoors and out. Discover how the H6350 can quickly cut through the clutter to get you to the things you love to watch.", 847.99, 90, 0, 2, 0, 1, 2),
        new product("Mediabridge-ULTRA-HDMI-Cable-Feet", "Mediabridge ULTRA Series HDMI Cable (25 Feet) - High-Speed Supports Ethernet, 3D and Audio Return [Newest Standard]", "Connects a Blu-Ray player, computer, Apple TV, Roku, cable box, PS3, Xbox 360 or other HDMI-compatible device to your HDTV/display source. It combines HD audio & video (up to 2160p) into 1 cable for many home theater needs. Durably built for clear signals & minimal interference/physical strain, this heavy-duty 28AWG cable is triple-shielded with solid copper conductors & corrosion-resistant gold-plated solid metal-shielding. ULTRA Series cables are made from premium materials for a pro-grade output. It allows for a shared internet connection among compatible devices, without extra wiring. Unique color-coded molds & backwards compatibility ensure easy installs.", 13.99, 90, 0, 2, 0, 1, 2),
        
        /*
        new product("APL", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 1, 2),
        new product("AVC", "Avocado", "Guacamole anyone?", 16, 90, 0, 1, 1, 1, 2),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 2, 2),
        new product("CTP", "Cantaloupe", "Delicious and refreshing.", 3, 50, 4, 4, 1, 2, 0),
        new product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 10, 100, 0, 0, 0, 1, 2),
        new product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 11, 50, 4, 4, 1, 1, 1),
        new product("GRP", "Grape", "Wine is great, but grapes are even better.", 8, 100, 0, 3, 0, 1, 1),
        new product("GUA", "Guava", "Exotic, fragrant, tasty!", 8, 50, 4, 4, 0, 1, 2),
        new product("KIW", "Kiwi", "These come from New Zealand.", 14, 90, 1, 4, 0, 2, 2),
        new product("LYC", "Lychee", "Unusual and highly addictive!", 18, 125, 1, 4, 0, 2, 2),
        new product("MAN", "Mango", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 1, 1),
        new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 1, 4, 2, 1, 2),
        new product("PAP", "Papaya", "Super-popular for breakfast.", 5, 60, 3, 4, 2, 2, 2),
        new product("PCH", "Peach", "Add some cream and enjoy.", 19, 70, 1, 2, 0, 1, 2),
        new product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, 0, 2, 0, 1, 2),
        new product("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 19, 110, 0, 2, 0, 2, 0),
        new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 0, 1),
        new product("PSM", "Persimmon", "Believe it or not, they are berries!", 6, 120, 4, 3, 0, 1, 3),
        new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7, 40, 0, 4, 1, 1, 2),
        new product("TNG", "Tangerine", "Easier to peel than oranges!", 8, 50, 3, 4, 1, 1, 2),
        new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4, 90, 4, 4, 0, 1, 1)
        */

    ];

    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];

    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];

}

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}