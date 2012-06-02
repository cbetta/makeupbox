var appModel = {
  items: [
    {
    	brand: "Lancome",
    	category: "eye liner",
    	title: "Artliner",
    	color: "01 Noir",
    	image: ko.observable("images/products/lancome_artliner.png"),
    	rating: 4
    },
    {
    	brand: "Dior",
    	category: "eye shadow",
    	title: "5 Couleurs",
    	color: "Tropical Light",
    	image: ko.observable("images/products/dior_tropicallight.png"),
    	rating: 4,
    	review: "Lovely colours, but a bit too shiny for during the day. Perfect for a going-out look though!",
    	notes: "Combine with Urban Decay gold eyeliner"
    },
    {
    	brand: "Illamasqua",
    	category: "eye shadow",
    	title: "Liquid Metal",
    	color: "Resolute",
    	image: ko.observable("images/products/illamasqua_resolute.png"),
    	rating: 2
    },
    {
    	brand: "Urban Decay",
    	category: "eye shadow",
    	title: "Palette",
    	color: "Naked",
    	image: ko.observable("images/products/urbandecay_gash.png"),
    	rating: 4
    },
    {
    	brand: "MAC",
    	category: "mascara",
    	title: "Zoom",
    	color: "Black",
    	image: ko.observable("images/products/mac_zoom.png"),
    	rating: 4
    }
  ],

  friends: [
    {
      name: "Sophia D.",
      image: ko.observable('images/friends/sophia.png'),
    },
    {
      name: "Isabella J.",
      image: ko.observable('images/friends/isabella.png'),
    },
    {
      name: "Emma K.",
      image: ko.observable('images/friends/emma.png'),
    },
    {
      name: "Ella V.",
      image: ko.observable('images/friends/ella.png'),
    },
  ],

  looks: [
    {
      name: "Over The Air 2012",
      image: ko.observable('images/looks/ota2012.png'),
    },
    {
      name: "Over The Air 2011",
      image: ko.observable('images/looks/ota2011.png'),
    },
    {
      name: "Wedding Trish",
      image: ko.observable('images/looks/wedding.png'),
    }
  ],

  brands: all_brands,
  products: all_products,

  selectedCategory: null,
  selectedItem: null,
  selectedFriend: null,

  setSelectedCategory: function(cat) {
    this.selectedCategory = cat;
  },

  setSelectedItem: function(index) {
    this.selectedItem = index();
  },

  setSelectedFriend: function(index) {
    this.selectedFriend = index();
  },

  iconFor: function(cat) {
    return "images/icons/"+cat+".png"
  },

  imageFor: function(rating) {
    return "images/ratings/"+rating+".png"
  },

  currentItem: function() {
    if (this.selectedItem == null) {
      this.items.push ({ title: null, category: null, image: ko.observable("images/no-image.png"), color: null, brand: null, rating: 3 });
      this.selectedItem = this.items.length-1;
    }
    return this.items[this.selectedItem];
  },

  setImage: function(data_url) {
    this.currentItem().image(data_url);
  }
}

function onImageSuccess(imageURI) {
    appModel.setImage("data:image/jpeg;base64,"+imageURI);
}

function onImageFail(message) {
    alert('Failed because: ' + message);
}

function captureItemImage() {
    navigator.camera.getPicture(onImageSuccess, onImageFail, {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      encodingType: Camera.EncodingType.JPEG,
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      targetWidth: 80,
      targetHeight: 80
    });
}








