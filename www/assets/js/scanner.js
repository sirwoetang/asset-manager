/**
 * Created by Waldo on 08/05/2015.
 */

function startScan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var s = "Result: " + result.text + "<br/>" +
                "Format: " + result.format + "<br/>" +
                "Cancelled: " + result.cancelled;
            window.localStorage.setItem("last_scan_result", result.text);
            window.localStorage.setItem("last_scan_format", result.format);
            window.localStorage.setItem("last_scan_cancel_reason", result.cancelled);
            window.localStorage.setItem("last_scan", s);
            return s
        },
        function (error) {
            alert("Scanning failed: " + error);
            window.localStorage.setItem("last_scan_result", 'error');
            window.localStorage.setItem("last_scan_format", 'error');
            window.localStorage.setItem("last_scan_cancel_reason", error);
            window.localStorage.setItem("last_scan", 'error');
        }
    );
}