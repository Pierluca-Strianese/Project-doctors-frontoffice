<script></script>

<template>
    <div class="container d-flex justify-content-center">
        <div class="card mx-3 mt-5 mb-5">
            <div class="card__avatar mt-5">
                <img class="img-fluid" src="../assets/img/DocVincenzo.jpg" alt="">
            </div>
            <div class="card__title">Nome Dottore</div>
            <div class="card__subtitle">Specializzazione</div>
            <div class="card__wrapper">
                <button class="card__btn mx-1">Info</button>
                <button class="card__btn card__btn-solid mx-1">Contatta</button>
            </div>
        </div>

        <div class="card mx-3 mt-5 mb-5">
            <div class="card__avatar mt-5">
                <img class="img-fluid" src="../assets/img/DocVincenzo.jpg" alt="">
            </div>
            <div class="card__title">Nome Dottore</div>
            <div class="card__subtitle">Specializzazione</div>
            <div class="card__wrapper">
                <button class="card__btn mx-1">Info</button>
                <button class="card__btn card__btn-solid mx-1">Contatta</button>
            </div>
        </div>

        <div class="card mx-3 mt-5 mb-5">
            <div class="card__avatar mt-5">
                <img class="img-fluid" src="../assets/img/DocVincenzo.jpg" alt="">
            </div>
            <div class="card__title">Nome Dottore</div>
            <div class="card__subtitle">Specializzazione</div>
            <div class="card__wrapper">
                <button class="card__btn mx-1">Info</button>
                <button class="card__btn card__btn-solid mx-1">Contatta</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    --main-color: #01bdcc;
    --submain-color: #7ce2e0;
    --bg-color: #fff;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    width: 340px;
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    background: var(--bg-color);
}

.img-fluid {
    border-radius: 100%;
    width: 160px;
    height: 160px;
    object-fit: fill;
    object-position: center;
}

.card__avatar {
    // position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5%;
}

.card__avatar svg {
    width: 150px;
    height: 150px;
}

.card__title {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 18px;
    // color: var(--main-color);
}

.card__subtitle {
    margin-top: 10px;
    font-weight: 400;
    font-size: 15px;
    // color: var(--submain-color);
}

.card__btn {
    margin-top: 1rem;
    width: 5rem;
    height: 2rem;
    border: 2px solid var(--main-color);
    border-radius: 4px;
    font-weight: 600;
    font-size: 11px;
    color: var(--main-color);
    background: var(--bg-color);
    text-transform: uppercase;
    transition: all 0.3s;
}

.card__btn-solid {
    background: var(--main-color);
    color: var(--bg-color);
}

.card__btn:hover {
    background: var(--main-color);
    color: var(--bg-color);
}

.card__btn-solid:hover {
    background: var(--bg-color);
    color: var(--main-color);
}
</style>