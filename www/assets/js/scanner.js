/**
 * Created by Waldo on 08/05/2015.
 */

cordova.plugins.barcodeScanner.scan(
    function (result) {
        alert("We got a barcode\n" +
        "Result: " + result.text + "\n" +
        "Format: " + result.format + "\n" +
        "Cancelled: " + result.cancelled);
    },
    function (error) {
        alert("Scanning failed: " + error);
    }
);
