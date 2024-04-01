## Contributing

Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great.

## Issues and PRs

If you have suggestions for how this project could be improved, or want to report a bug, open an issue! We'd love all and any contributions. If you have questions, too, we'd love to hear them.

We'd also love PRs. If you're thinking of a large PR, we advise opening up an issue first to talk about it

> [!IMPORTANT]  
> - Do NOT add PR's to **main** branch.
> - Add PR's ONLY to **develop** branch.

## Folder Structure

1. root
   - assets
     - js
       - > add section name and then dash then name as you want 'home-foo.js'
     - css
       - > add section name and then dash then name as you want 'home-foo.css'
     - media
       - home
       - post
       - > make your section folder here for media
   - header-footer
       - footer.html
       - header.html
   - HTML's

> [!NOTE]  
> Theme should be using ![#2b1055](https://placehold.co/5/2b1055/2b1055.png) `#2b1055` to ![#7597de](https://placehold.co/1/7597de/7597de.png) `#7597de` and it shades only.


## Basic Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script src="assets/js/jq-loader.js"></script>
    <link rel="stylesheet" href="assets/css/YOUR-CSS.css">
    <script src="assets/js/header-footer.js"></script>

</head>
<body>
    <div id="header"></div>

    <!-- YOUR CODE GOES HERE -->

    <div id="footer"></div>
</body>
</html>
```