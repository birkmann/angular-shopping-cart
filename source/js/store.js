function store() {

    this.products = [
        
        new product(
            "PlayStation-4-Console",
            "PlayStation 4 Console",
            "PlayStation 4 is the best place to play with dynamic, connected gaming, powerful graphics and speed, intelligent personalization, deeply integrated social capabilities, and innovative second-screen features. Combining unparalleled content, immersive gaming experiences, all of your favorite digital entertainment apps, and PlayStation exclusives, PS4 centers on gamers, enabling them to play when, where and how they want. PS4 enables the greatest game developers in the world to unlock their creativity and push the boundaries of play through a system that is tuned specifically to their needs.",
             399.99,
             "Sony"),
        new product(
            "Xbox-One-Assassins-Creed-Unity-Bundle",
            "Xbox One Assassin's Creed Unity Bundle",
            "Xbox One brings together the best exclusive games, the most advanced multiplayer, and entertainment experiences you won't find anywhere else.",
            348.37,
            "Microsoft"),
        new product(
            "Samsung-UN48H6350-48-Inch-1080p-120Hz",
            "Samsung UN48H6350 48-Inch 1080p 120Hz Smart LED TV",
            "The new Samsung Smart Ultra-Slim TV H6350 lets you conveniently navigate your entire entertainment world on a central menu with five simple panels: On TV, On-Demand, your photos and music, social media and Smart TV apps. This allows you to effortlessly connect to the content you love, without having to aimlessly channel surf. Enjoy a fluid browsing experience, switch between content, stream and multitask faster and easier than ever before. Want to share videos from your phone to your TV? Or use your phone to watch what's on TV? With the H6350, you can enjoy a seamless viewing experience across all your smart devices, from anywhere, indoors and out. Discover how the H6350 can quickly cut through the clutter to get you to the things you love to watch.",
            847.99,
            "Samsung"),
        new product(
            "Mediabridge-ULTRA-HDMI-Cable-Feet",
            "Mediabridge ULTRA Series HDMI Cable (25 Feet) - High-Speed Supports Ethernet, 3D and Audio Return [Newest Standard]",
            "Connects a Blu-Ray player, computer, Apple TV, Roku, cable box, PS3, Xbox 360 or other HDMI-compatible device to your HDTV/display source. It combines HD audio & video (up to 2160p) into 1 cable for many home theater needs. Durably built for clear signals & minimal interference/physical strain, this heavy-duty 28AWG cable is triple-shielded with solid copper conductors & corrosion-resistant gold-plated solid metal-shielding. ULTRA Series cables are made from premium materials for a pro-grade output. It allows for a shared internet connection among compatible devices, without extra wiring. Unique color-coded molds & backwards compatibility ensure easy installs.",
            13.99,
            "Mediabridge")

    ];

}

store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}