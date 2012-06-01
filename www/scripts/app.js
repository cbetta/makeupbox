// function onSuccess(imageURI) {
//     alert(imageURI);
// }
//
// function onFail(message) {
//     alert('Failed because: ' + message);
// }
//
// function captureMyImage() {
//     navigator.camera.getPicture(onSuccess, onFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM });
// }

$(document).bind('pageinit', function(){
  ko.applyBindings(appModel);
  // populateLists();
  // detectCategory();
  // populateFields();
});

// function populateLists() {
//   $(".ui-listview").each(function(){
//     populateList($(this));
//   });
// }
//
// function populateList(list) {
//   source = eval(list.data("source"));
//   for (var i=0; i < source.length; i++) {
//     addElementTo(list, source[i]);
//   };
// }
//
// function detectCategory() {
//   $("*[data-category]").live("click", function(){
//     category = $(this).data("category");
//   });
// }
//
// function populateFields() {
//   contents = $("*[data-content]").each(function(){
//     value = $(this).data("content");
//     $(this).text(eval(value));
//   });
// }
//
// function addElementTo(list, element) {
//   li = $("<li><a href='#'><img src='images/icons/"+element.category+".png' alt='"+element.title+"' class='ui-li-icon ui-li-thumb'>"+element.title+"</a></li>");
//   list.append(li);
//   list.listview('refresh');
// }
//


