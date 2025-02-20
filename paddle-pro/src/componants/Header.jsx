import React from "react";

const Header = () =>{
    return(
        <>
            <div class="container">
                <header class="d-flex justify-content-center py-3 fixed-top bg-white">
                        <ul class="nav nav-pills">
                            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">LeadBoard</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">Gaming Rules</a></li>
                            <li class="nav-item"><a href="#" class="nav-link">About US</a></li>
                        </ul>
                </header>
            </div>

        </>
    )
}

export default Header;
