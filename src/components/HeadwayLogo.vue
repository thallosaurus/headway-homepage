<script>
export default {
    props: {
        showAnim: Boolean
    },
    data() {
        return {
            animation: 'grow'
        }
    },
    mounted() {
        if (this.showAnim) {
            // alert("show anim");
            let glow = document.querySelector("#logoglow");
            glow.addEventListener("animationend", (ev) => {
                console.log("animend", ev);
                // this.breathing = true;
                this.animation = "pulsating";
            });
            // this.$el.addEventListener('click', this.onClick);
        }
        // alert("mounted");
    }
}
</script>

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
        <img id="logoglow" :src="'glow.jpg'" class="glow" :class="{ 'anim': showAnim }, animation ">

    </div>
    <p class="subtext">- WE ARE THE NEXT LEVEL -</p>
</template>

<style>
@keyframes initAnim {
    0% {
        opacity: 0;
        transform: scale(0.5) rotate(45deg);
    }
    
    100% {
        transform: rotate(0deg);
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes pulsating {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
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
}

.glow {
    position: absolute;
    width: 100%;
    object-fit: contain;
    height: auto;
    left: 0;
    top: -100%;
    z-index: -999;
}

#logoglow {
    overflow:hidden;
}

.glow.grow {
    animation-name: initAnim;
    animation-duration: 5s;
    animation-iteration-count: 1;
}
.glow.pulsating {
    animation-name: pulsating;
    animation-duration: 10s;
    animation-iteration-count: infinite;
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
    background: black;
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
}</style>