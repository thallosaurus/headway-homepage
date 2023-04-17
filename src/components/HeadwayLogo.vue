<template>
    <!--     <h1>
        HEADWAY
    </h1> -->
    <!--     <img :src="'logo.jpg'"> -->
    <!-- <h1 class="logo">HEADWAY</h1> -->
    <div class="shade">
        <svg viewBox="0 0 139 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <text class='logo-text' x="0" y="15">HEADWAY</text>
        </svg>
        <!--     <img src="/logo.svg"> -->
            <img :src="'glow.jpg'" class="glow">

    </div>
    <p class="subtext">- WE ARE THE NEXT LEVEL -</p>
</template>

<style>
@keyframes initAnim {
    0% {
        opacity: 0;
        transform: scale(0.5) rotate(45deg);
    }
    
    35% {
        transform: rotate(0deg);
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1);
    }
}
</style>

<style scoped>
@media (pointer: coarse) or (max-width: 786px) {

    .glow {
        top: -80% !important;
    }
}

.shade {
    position: relative;
    //background: url(glow.jpg);
}
.glow {
    position: absolute;
    width: 100%;
    object-fit:contain;
    height: auto;
    left: 0;
    top: -100%;
    z-index: -999;

    animation-name: initAnim;
    animation-duration: 10s;
    animation-iteration-count: 1;
}
.logo {
    font-family: Syncopate;
    font-weight: 100;
    letter-spacing: .4em;
    font-size: 100px;
    margin: 0;
}

.shade::after {
    display: none;
    content: " ";
    //background: black;
    //background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    width: 100%;
    height: 139px;
    position: relative;
    top: -139px;
    clip-path: url(#logoSvg);
}

h1 {
    text-align: center;
    margin-top: 0;
}

img {
    width: 100%;
}

.subtext {
    text-align: center;
    font-family: Syncopate;
}

svg {
    /* width: 100%; */
    /* border: 1px solid white; */
    margin: 1em;
}

.logo-text {
    font-family: Syncopate;
    letter-spacing: .4em;
    fill: white;
}
</style>