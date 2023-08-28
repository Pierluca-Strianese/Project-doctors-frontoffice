<script>
export default {

}
</script>

<template>
    <footer>
        <div class="container_responsive px-5">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <img src="img/logo.png" alt="">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam repellendus sunt praesentium
                            aspernatur iure molestias.</p>
                        <h3>We Accept</h3>
                        <div class="card-area">
                            <i class="fa fa-cc-visa"></i>
                            <i class="fa fa-credit-card"></i>
                            <i class="fa fa-cc-mastercard"></i>
                            <i class="fa fa-cc-paypal"></i>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Hosting</h2>
                        <ul>
                            <li><a href="#">Web Hosting</a></li>
                            <li><a href="#">Cloud Hosting</a></li>
                            <li><a href="#">CMS Hosting</a></li>
                            <li><a href="#">WordPress Hosting</a></li>
                            <li><a href="#">Email Hosting</a></li>
                            <li><a href="#">VPS Hosting</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Domain</h2>
                        <ul>
                            <li><a href="#">Web Domain</a></li>
                            <li><a href="#">Cloud Domain</a></li>
                            <li><a href="#">CMS Domain</a></li>
                            <li><a href="#">WordPress Domain</a></li>
                            <li><a href="#">Email Domain</a></li>
                            <li><a href="#">VPS Domain</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-box">
                        <h2>Newsletter</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque earum
                            similique
                            fugiat nobis. Facere?</p>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username"
                                aria-label="Enter your Email ..." aria-describedby="basic-addon2">
                            <span class="input-group-text" id="basic-addon2"><i class="fa fa-long-arrow-right"></i></span>
                        </div>
                        <h2>Follow us on</h2>
                        <p class="socials">
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-dribbble"></i>
                            <i class="fa fa-pinterest"></i>
                            <i class="fa fa-twitter"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/js/bootstrap.min.js">
    <!-- END OF FOOTER -->
</template>

<style lang="scss" scoped>
/* STYLES SPECIFIC TO FOOTER  */

@media (min-width: 1000px) {
    footer .container_responsive {
        display: flex;
    }
}

.container_responsive {
    display: none;
    align-items: center;
    width: 100%;
    position: relative;
    height: 20rem;
    background-color: #070617;
    font-size: .8rem;
}

.single-content {
    text-align: center;
    padding: 1rem 0;
}

.single-box p {
    color: #fff;
    line-height: 1.9;
}

.single-box h3 {
    font-size: 16px;
    font-weight: 700;
    color: #fff;
}

.single-box .card-area i {
    color: #ffffff;
    font-size: 20px;
    margin-right: 10px;
}

.single-box ul {
    list-style: none;
    padding: 0;
}

.single-box ul li a {
    text-decoration: none;
    color: #fff;
    line-height: 2.5;
    font-weight: 100;
}

.single-box h2 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
}

#basic-addon2 {
    background: #fe1e4f;
    color: #fff;
}

.socials i {
    font-size: 18px;
    margin-right: 15px;
}

@media (max-width: 767px) {
    .single-box {
        margin-bottom: 50px;
    }
}

@media (min-width: 768px) and (max-width: 991px) {
    .single-box {
        margin-bottom: 50px;
    }
}
</style>