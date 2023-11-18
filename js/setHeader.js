
document.querySelector("body").insertAdjacentHTML(
    'afterbegin',
    `<header class="header_wrapper">
        <div class="logo_wrap">
            <img src="styles/images/logo.svg" width="50px" height="50px"/>
            <a href="index.html" class="logo">Dog Hotel</a>
        </div>
        
        <nav>
            <div class="wrap_a">
                <a href="index.html">Services</a>
                <div class="underline"></div>
            </div>
            <div class="wrap_a">
                <a href="content.html">Content</a>
                <div class="underline"></div>
            </div>
            <div class="wrap_a">
                <a href="test/index_test.html">Test</a>
                <div class="underline"></div>
            </div>
            <div class="wrap_a">
                <a href="about_us.html">About us</a>
                <div class="underline"></div>
            </div>
        </nav>
    </header>`
);