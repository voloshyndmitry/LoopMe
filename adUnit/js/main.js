var rain = {
	// arbitrary number of images
		images: ["images/raindrop_1.png",
				"images/raindrop_2.png",
				"images/raindrop_3.png",
				"images/raindrop_4.png"],
		minSizeRaine: 10,
		maxSizeRaine: 50,
		minQuantityRain: 10,
		maxQuantityRain: 20},
	textImages = ["images/T_Text1.png",
				"images/T_Text2.png",
				"images/T_Text3.png",
				"images/T_Text4.png"],

newAds = new Ads(rain, textImages);
	
newAds.start();