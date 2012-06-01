var appModel = {
  category: "",
  items: [
    {
      title: "Awesome lipstick #1",
      category: "lipstick",
    },
    {
      title: "Awesome lipstick #2",
      category: "lipstick"
    }
  ],
  selectedItem: null,

  setCategory: function(cat) {
    this.category = cat;
  },

  setSelectedItem: function(index) {
    console.log(index);
    this.selectedItem = index;
  },

  iconFor: function(cat) {
    return "images/icons/"+cat+".png"
  },

  currentItem: function() {
    if (this.selectedItem == null)
      return {title: null, category: null};
    else
      return this.items[this.selectedItem];
  }
}



