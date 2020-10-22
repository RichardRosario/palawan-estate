import React from 'react';

const navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div class="container">
                <a class="navbar-brand" href="/">PalEstate</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mobile-nav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><a class="nav-link" href="/about"> About Us</a></li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="/signup">Sign Up</a></li>
                        <li class="nav-item"><a class="nav-link" href="/signin">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar
