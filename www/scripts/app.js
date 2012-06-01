function onSuccess(imageURI) {
    alert(imageURI);
}

function onFail(message) {
    alert('Failed because: ' + message);
}
//
// function captureMyImage() {
//     navigator.camera.getPicture(onSuccess, onFail, { quality: 100, destinationType: Camera.DestinationType.FILE_URI, sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM });
// }