body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
}

#envelope {
    position: relative;
    height: 220px;
    /* Tăng kích thước */
    width: 350px;
    /* Tăng kích thước */
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    margin-left: auto;
    margin-right: auto;
    top: 40%;
    background-color: #ff2a22;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

#envelope:hover {
    cursor: pointer;
}

.front {
    position: absolute;
    width: 0;
    height: 0;
    z-index: 3;
}

.flap {
    border-top: 120px solid #ff2a22;
    /* Điều chỉnh */
    border-left: 175px solid transparent;
    /* Điều chỉnh (350/2) */
    border-right: 175px solid transparent;
    /* Điều chỉnh (350/2) */
    border-bottom: 100px solid transparent;
    /* Điều chỉnh */
    transform-origin: top;
}

.pocket {
    border-left: 175px solid #ff748d;
    /* Điều chỉnh (350/2) */
    border-right: 175px solid #ff748d;
    /* Điều chỉnh (350/2) */
    border-bottom: 110px solid #ff98a7;
    /* Điều chỉnh */
    border-top: 110px solid transparent;
    /* Điều chỉnh */
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.letter {
    position: relative;
    background-color: white;
    width: 90%;
    height: 90%;
    top: 5%;
    border-radius: 10px;
    box-shadow: 0 2px 26px rgba(0, 0, 0, .12);
    margin-left: auto;
    margin-right: auto;
}

.letter:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.words {
    position: absolute;
    left: 5%;
    /* Điều chỉnh để cân bằng với width */
    width: 90%;
    /* Tăng width từ 80% lên 90% để không bị xuống dòng */
    height: 10%;
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: black;
}

.line1 {
    top: 10%;
}

.line2 {
    top: 25%;
}

.line3 {
    top: 45%;
    text-align: center;
}

.line4 {
    top: 60%;
    text-align: center;
}

.open .flap {
    transform: rotatex(180deg);
    transition: transform 0.4s ease, z-index 0.6s;
    z-index: 1;
}

.close .flap {
    transform: rotatex(0deg);
    transition: transform 0.4s 0.6s ease, z-index 1s;
    z-index: 5;
}

.open .letter {
    transform: translatey(-150px);
    /* Tăng dịch chuyển */
    transition: transform 0.4s 0.6s ease, z-index 0.6s;
    z-index: 2;
}

.close .letter {
    transform: translatey(0deg);
    transition: transform 0.4s ease, z-index 1s;
    z-index: 1;
}


/* HIỆU ỨNG PHÁO BÔNG BẮT ĐẦU */

.fireworks {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 4;
    overflow: hidden;
}

.firework {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0);
    width: 12px;
    /* Tăng kích thước từ 8px lên 12px */
    height: 12px;
    /* Tăng kích thước từ 8px lên 12px */
    top: 50%;
    left: 50%;
}


/* Vị trí và màu sắc cố định của từng viên pháo bông */

.f1 {
    top: 40%;
    left: 30%;
    background-color: #ff6347;
}

.f2 {
    top: 55%;
    left: 65%;
    background-color: #4682b4;
}

.f3 {
    top: 35%;
    left: 55%;
    background-color: #32cd32;
}

.f4 {
    top: 60%;
    left: 35%;
    background-color: #da70d6;
}

.f5 {
    top: 50%;
    left: 45%;
    background-color: #ffa500;
}

.f6 {
    top: 45%;
    left: 60%;
    background-color: #ffb6c1;
}


/* Keyframes cho pháo bông */

@keyframes fireworkExplode1 {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0);
    }
    20% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-80px, -100px) scale(0);
    }
}

@keyframes fireworkExplode2 {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0);
    }
    20% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(90px, -70px) scale(0);
    }
}

@keyframes fireworkExplode3 {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0);
    }
    20% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(0px, -120px) scale(0);
    }
}

@keyframes fireworkExplode4 {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0);
    }
    20% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-70px, 90px) scale(0);
    }
}

@keyframes fireworkExplode5 {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0);
    }
    20% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(100px, 50px) scale(0);
    }
}

@keyframes fireworkExplode6 {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0);
    }
    20% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(-50px, 60px) scale(0);
    }
}


/* Áp dụng animation khi mở phong bì */

.open .f1 {
    animation: fireworkExplode1 1.2s ease-out forwards;
    animation-delay: 0.2s;
}

.open .f2 {
    animation: fireworkExplode2 1.2s ease-out forwards;
    animation-delay: 0.4s;
}

.open .f3 {
    animation: fireworkExplode3 1.2s ease-out forwards;
    animation-delay: 0.1s;
}

.open .f4 {
    animation: fireworkExplode4 1.2s ease-out forwards;
    animation-delay: 0.5s;
}

.open .f5 {
    animation: fireworkExplode5 1.2s ease-out forwards;
    animation-delay: 0.3s;
}

.open .f6 {
    animation: fireworkExplode6 1.2s ease-out forwards;
    animation-delay: 0.6s;
}


/* HIỆU ỨNG PHÁO BÔNG KẾT THÚC */

.hearts {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    z-index: 2;
}

.heart {
    position: absolute;
    bottom: 0;
    right: 10%;
}

.heart:before,
.heart:after {
    position: absolute;
    content: "";
    background: #d00000;
    width: 50px;
    height: 80px;
    left: 50px;
    top: 0;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
}

.heart:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
}

.close .heart {
    opacity: 0;
    animation: none;
}

.a1 {
    left: 20%;
    transform: scale(0.6);
    opacity: 1;
    animation: slideUp 4s linear 1, sideSway 2s ease-in-out 4 alternate;
    animation-fill-mode: forwards;
    animation-delay: 0.7s;
}

.a2 {
    left: 55%;
    transform: scale(1);
    opacity: 1;
    animation: slideUp 5s linear 1, sideSway 4s ease-in-out 2 alternate;
    animation-fill-mode: forwards;
    animation-delay: 0.7s;
}

.a3 {
    left: 10%;
    transform: scale(0.8);
    opacity: 1;
    animation: slideUp 7s linear 1, sideSway 2s ease-in-out 6 alternate;
    animation-fill-mode: forwards;
    animation-delay: 0.7s;
}

@keyframes slideUp {
    0% {
        top: 0;
    }
    100% {
        top: -600px;
    }
}

@keyframes sideSway {
    0% {
        margin-left: 0px;
    }
    100% {
        margin-left: 50px;
    }
}

.reset {
    text-align: center;
}

.reset button {
    font-weight: 800;
    font-style: normal;
    transition: all 0.1s linear;
    background-color: transparent;
    border: solid 2px #FF6863;
    border-radius: 4px;
    color: #FF6863;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    margin: 20px;
    margin-top: 110px;
    padding: 10px;
    line-height: 2em;
    text-decoration: none;
    min-width: 150px;
    outline: none;
}

.reset button:hover {
    background-color: #FF6863;
    cursor: pointer;
    color: white;
}

.valentine {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(20, 20, 20);
    font-size: 30px;
}
