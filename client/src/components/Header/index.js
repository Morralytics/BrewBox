import React from 'react'

export default function Header() {
    return (
        <header class="header">
            <div class="nav-box">
                <input id="toggle" type="checkbox" />
                <label for="toggle" class="hamburger">
                    <div class="top-bun"></div>
                    <div class="meat"></div>
                    <div class="bottom-bun"></div>
                </label>
                <div class="nav">
                    <div class="nav-wrapper">
                        <div class="links">
                            <ul>
                                <li><a href="home">HOME</a></li>
                                <li><a href="brews">BREWS</a></li>
                                <li><a href="aboutus">ABOUT US</a></li>
                                <li><a href="contactus">CONTACT US</a></li>
                                <li><a href="login">LOGIN</a></li>
                                <li><button class="btn">CART</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
