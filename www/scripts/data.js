var appModel = {
  items: [
    {
  		brand: "Chanel",
  		category: "eye shadow",
  		title: "Ombre Essentielle",
  		color: "52 Beige",
  		image: ko.observable("images/no-image.png"),
  		rating: 3,
    },
    {
      brand: "Chanel",
      category: "lipstick",
      title: "Rouge Coco",
      color: "21 Rivoli",
      image: ko.observable("images/no-image.png"),
      rating: 4
    }
  ],

  brands: all_brands,
  products: all_products,

  selectedCategory: null,
  selectedItem: null,

  setSelectedCategory: function(cat) {
    this.selectedCategory = cat;
  },

  setSelectedItem: function(index) {
    this.selectedItem = index();
  },

  iconFor: function(cat) {
    return "images/icons/"+cat+".png"
  },

  imageFor: function(rating) {
    return "images/ratings/"+rating+".png"
  },

  currentItem: function() {
    if (this.selectedItem == null)
      return {title: null, category: null, image: null, color: null, brand: null, rating: 3 };
    else
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








