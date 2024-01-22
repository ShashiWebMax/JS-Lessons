# Generating QR Codes

In this lesson, we will learn how to generate QR codes. We will use the [qrcode.js](https://davidshimjs.github.io/qrcodejs/) library to generate QR codes.

## Steps

- Go to [qrcode.js](https://davidshimjs.github.io/qrcodejs/) website and download the library.
- Create a new folder and add the `qrcode.min.js` file to the folder.
- Create a new HTML file and add the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>QR Code Generator</title>
</head>
<body>
    <div id="qrcode"></div>
    <script src="qrcode.min.js"></script>
    <script>
        new QRCode(document.getElementById("qrcode"), "https://www.google.com");
    </script>
</body>
</html>
```

- Open the HTML file in the browser. You should see a QR code that links to Google.
- Change the URL in the JavaScript code to your website URL.
- Open the HTML file in the browser. You should see a QR code that links to your website.
- You can use the `makeCode` method to generate QR codes dynamically. The `makeCode` method takes a string as an argument. The string is the URL that you want to generate the QR code for.
- Add the following code to the JavaScript code:

```js
let url = "https://www.google.com";
let qrCode = new QRCode(document.getElementById("qrcode"), url);

function generateQRCode() {
    let url = document.getElementById("url").value;
    qrCode.makeCode(url);
}
```