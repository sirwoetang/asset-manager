/**
 * Created by Waldo on 08/05/2015.
 */

function startScan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var s = "Result: " + result.text + "<br/>" +
                "Format: " + result.format + "<br/>" +
                "Cancelled: " + result.cancelled;
            //resultDiv.innerHTML = s;
            return s
        },
        function (error) {
            alert("Scanning failed: " + error);
            var s = "error"
        }
    );
}