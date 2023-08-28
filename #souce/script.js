// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// const langBtn = document.querySelector(".curent");
// const langBtnText = document.querySelector(".curent p");
// const langList = document.querySelector(".lang_list");
// const listElems = document.querySelectorAll(".lang_list li");
// const threeangle = document.querySelector(".curent span");
// let text = document.querySelector(".text");
// let startBtn = document.querySelector(".btn");
// let moneyNum = document.querySelector(".input p span");
// let minusBtn = document.querySelector(".minus");
// let plusBtn = document.querySelector(".plus");
// let modal = document.querySelector(".modal");
// let modalText1 = document.querySelector(".modal p:nth-child(1)");
// let modalText2 = document.querySelector(".modal p:nth-child(2)");
// let modalText3 = document.querySelector(".modal p:nth-child(3)");
// let modalBtn = document.querySelector(".modal a");
// let container = document.querySelector(".container");
// let betting = document.querySelectorAll(".betting");
// let clickCount = 1;
// let gameCount = 0;

// langBtn.addEventListener('click', ()=> {
//     if(clickCount % 2 == 0) {
//         langList.classList.remove('active');
//         threeangle.classList.remove('active');
//     } else {
//         langList.classList.add('active');
//         threeangle.classList.add('active');
//     }
//     clickCount++;
// });

// listElems.forEach(listElem => {
//     listElem.addEventListener('click', (e) => {
//         let value = e.target.textContent;
//         langBtnText.innerHTML = value;

//         if(listElem.textContent == 'hi') {
//             modalText1.innerHTML = 'स्वागत बोनस';
//             modalText2.innerHTML = 'पहली तीन जमाओं पर 375% प्राप्त करें';
//             modalText3.innerHTML = '₹36,000 तक';
//             modalBtn.innerHTML = 'अभी पकड़ो';
//             text.innerHTML = 'एविएटर पायलट से अपना बोनस प्राप्त करें';
//             startBtn.innerHTML ='बोनस प्राप्त करें';
//         } else {
//             modalText1.innerHTML = 'Welcome Bonus';
//             modalText2.innerHTML = 'Get 375% on first 3 deposits';
//             modalText3.innerHTML = 'Up to ₹36,000';
//             modalBtn.innerHTML = 'Grab now';
//             text.innerHTML = 'GET YOUR BONUS FROM AVIATOR PILOT';
//             startBtn.innerHTML ='GET BONUS';
//         }

//         langList.classList.remove('active');
//         threeangle.classList.remove('active');
//         clickCount++;
//     });
// });

// function calculateY(x) {
//     return (0.5 * x * x) / 2;
// };

// function calculateIntegral(a, b, n) {
//     var dx = (b - a) / n;
//     var integral = 0;

//     for (var i = 0; i < n; i++) {
//         var xLeft = a + i * dx;
//         var y = calculateY(xLeft);
//         integral += y * dx;
//     }

//     return integral;
// };

// const canvasWidth = 1000;
// const canvasHeight = 550;
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;
// const scaleX = canvasWidth / 1000;
// const scaleY = canvasHeight / 250000;

// let animationStartTime;
// const animationDuration = 10000; // 10 секунд
// let progress = 0;
// const integralThreshold = 10000; // Значення інтегралу, при якому лінію буде замальовуватися

// function integrate(x) {
//     return calculateIntegral(0, x, 1000); // 1000 - кількість відрізків для інтегрування
// };

// function shouldStopAnimation() {
//     const currentTime = performance.now();
//     const elapsedTime = currentTime - animationStartTime;

//     if (elapsedTime >= 3000 && elapsedTime <= 9000) {
//         return Math.random() < 0.005;
//     }

//     if (elapsedTime > 9000) {
//         return true;
//     }

//     return false;
// };

// function formatProgress(progress) {
//     return (progress * 20).toFixed(2);
// };

// function animate(timestamp) {
//     if (!animationStartTime) {
//         animationStartTime = timestamp;
//     }

//     const elapsedTime = timestamp - animationStartTime;
//     progress = elapsedTime / animationDuration;
    
//     if (progress <= 1 && !shouldStopAnimation()) {
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//         ctx.beginPath();
//         ctx.moveTo(0, canvasHeight);
        
//         for (let x = 0; x <= 1000 * progress; x++) {
//             const y = calculateY(x);
//             ctx.lineTo(x * scaleX, canvasHeight - y * scaleY);
//         }
        
//         ctx.strokeStyle = "#ffffff";
//         ctx.lineWidth = 3;
//         ctx.stroke();

//         const integralValue = integrate(1000 * progress);
//         if (integralValue >= integralThreshold) {
//             ctx.lineTo(1000 * progress * scaleX, canvasHeight);
//             ctx.lineTo(0, canvasHeight);
//             ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//             ctx.fill();
//         }

//         const xForImage = 1000 * progress;
//         const yForImage = calculateY(xForImage);
//         const image = new Image();
//         image.src = "images/plain.webp";
//         const imageWidth = 130;
//         const imageHeight = 90;
//         ctx.save(); // Зберегти стан контексту
//         ctx.translate(xForImage * scaleX, canvasHeight - yForImage * scaleY);
//         ctx.rotate(progress * -Math.PI / 6); // Змінити кут нахилу в залежності від прогресу
//         ctx.drawImage(image, -imageWidth / 4.5, -imageHeight / 1.1, imageWidth, imageHeight); // Зображення центрується на заданій позиції
//         ctx.restore(); // Відновити початковий стан контексту
//         const progressText = `${formatProgress(progress)}x`; // Використовуємо форматований прогрес
//         ctx.fillStyle = "#ffffff";
//         ctx.font = "bold 70px CustomFont";
//         ctx.fillText(progressText, canvasWidth / 2.3, canvasHeight / 2.3);

//         requestAnimationFrame(animate);
//     } else {
//         setInterval(()=> {
//             modal.classList.add('opacity');
//         }, 2000)
//     }
// };

// function startAnimation() {
//     gameCount++;
//     requestAnimationFrame(animate);
//     if (gameCount > 0) {
//         startBtn.disabled = true;
//     };
//     modal.classList.add('active');
// };

// let num = 0;
// let modificateValue = 0;

// function plus() {
//     num + modificateValue++;
//     minusBtn.disabled = false;
//     moneyNum.innerHTML = num + modificateValue;
// }

// function minus() {
//     if (num + modificateValue > 0) {
//         num + modificateValue--;
//         moneyNum.innerHTML = num + modificateValue;
//     }
//     if (num + modificateValue <= 0) {
//         minusBtn.disabled = true;
//     }
// }

// betting.forEach(btn => {
//     btn.addEventListener('click', (e)=> {
//        let value = e.target.textContent;
//        modificateValue = parseInt(value.slice(0, value.length - 1));
//        moneyNum.innerHTML = modificateValue;
//     });
// });

// function adaptationElements() {
//     if(window.innerWidth/window.innerHeight >= 2) {
//         container.classList.add('modificate1');
//         container.classList.remove('modificate2');
//         container.classList.remove('modificate3');
//         container.classList.remove('modificate4');
//         modal.classList.remove('modificate4');
//         console.log('modificate1');
//     } else if (window.innerWidth/window.innerHeight < 2 && window.innerWidth/window.innerHeight >= 1.5) {
//         container.classList.add('modificate2');
//         container.classList.remove('modificate1');
//         container.classList.remove('modificate3');
//         container.classList.remove('modificate4');
//         modal.classList.remove('modificate4');
//         console.log('modificate2');
//     } else if(window.innerWidth/window.innerHeight < 1.5 && window.innerWidth/window.innerHeight > 1) {
//         container.classList.add('modificate3');
//         container.classList.remove('modificate1');
//         container.classList.remove('modificate2');
//         container.classList.remove('modificate4');
//         modal.classList.remove('modificate4');
//         console.log('modificate3');
//     } else if(window.innerWidth/window.innerHeight <= 1) {
//         container.classList.add('modificate4');
//         modal.classList.add('modificate4');
//         container.classList.remove('modificate1');
//         container.classList.remove('modificate2');
//         container.classList.remove('modificate3');
//         console.log('modificate4');
//     } else {
//         container.classList.remove('modificate1');
//         container.classList.remove('modificate2');
//         container.classList.remove('modificate3');
//         container.classList.remove('modificate4');
//         modal.classList.remove('modificate4');
//     }
// };

// adaptationElements();

// window.addEventListener('resize', adaptationElements);










// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// let langBtn = document.querySelector(".curent");
// let langBtnText = document.querySelector(".curent p");
// let langList = document.querySelector(".lang_list");
// let listElems = document.querySelectorAll(".lang_list li");
// let threeangle = document.querySelector(".curent span");
// let text = document.querySelector(".text");
// let startBtn = document.querySelector(".btn");
// let moneyNum = document.querySelector(".input p span");
// let minusBtn = document.querySelector(".minus");
// let plusBtn = document.querySelector(".plus");
// let modal = document.querySelector(".modal");
// let modalText1 = document.querySelector(".modal p:nth-child(1)");
// let modalText2 = document.querySelector(".modal p:nth-child(2)");
// let modalText3 = document.querySelector(".modal p:nth-child(3)");
// let modalBtn = document.querySelector(".modal a");
// let container = document.querySelector(".container");
// let betting = document.querySelectorAll(".betting");
// let clickCount = 1;
// let gameCount = 0;
// let num = 0;
// let modificateValue = 0;
// let animationRequestId = null;

// langBtn.addEventListener('click', ()=> {
//     langList.classList.toggle('active');
//     threeangle.classList.toggle('active');
// });

// listElems.forEach(listElem => {
//     listElem.addEventListener('click', (e) => {
//         let value = e.target.textContent;
//         langBtnText.innerHTML = value;

//         if(listElem.textContent == 'hi') {
//             modalText1.innerHTML = 'स्वागत बोनस';
//             modalText2.innerHTML = 'पहली तीन जमाओं पर 375% प्राप्त करें';
//             modalText3.innerHTML = '₹36,000 तक';
//             modalBtn.innerHTML = 'अभी पकड़ो';
//             text.innerHTML = 'एविएटर पायलट से अपना बोनस प्राप्त करें';
//             startBtn.innerHTML ='बोनस प्राप्त करें';
//         } else {
//             modalText1.innerHTML = 'Welcome Bonus';
//             modalText2.innerHTML = 'Get 375% on first 3 deposits';
//             modalText3.innerHTML = 'Up to ₹36,000';
//             modalBtn.innerHTML = 'Grab now';
//             text.innerHTML = 'GET YOUR BONUS FROM AVIATOR PILOT';
//             startBtn.innerHTML ='GET BONUS';
//         }

       
//             langList.classList.remove('active');
//             threeangle.classList.remove('active');
      
//     });
// });

// function calculateY(x) {
//     return (0.5 * x * x) / 2;
// }

// function calculateIntegral(a, b, n) {
//     var dx = (b - a) / n;
//     var integral = 0;

//     for (var i = 0; i < n; i++) {
//         var xLeft = a + i * dx;
//         var y = calculateY(xLeft);
//         integral += y * dx;
//     }

//     return integral;
// }

// const canvasWidth = 1000;
// const canvasHeight = 550;
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;
// const scaleX = canvasWidth / 1000;
// const scaleY = canvasHeight / 250000;

// let animationStartTime;
// const animationDuration = 10000; // 10 секунд
// let progress = 0;
// const integralThreshold = 10000; // Значення інтегралу, при якому лінію буде замальовуватися

// function integrate(x) {
//     return calculateIntegral(0, x, 1000); // 1000 - кількість відрізків для інтегрування
// }

// function shouldStopAnimation() {
//     const currentTime = performance.now();
//     const elapsedTime = currentTime - animationStartTime;

//     if (elapsedTime >= 3000 && elapsedTime <= 9000) {
//         return Math.random() < 0.005;
//     }

//     if (elapsedTime > 9000) {
//         return true;
//     }

//     return false;
// }

// function formatProgress(progress) {
//     return (progress * 20).toFixed(2);
// }

// function animate(timestamp) {
//     if (!animationStartTime) {
//         animationStartTime = timestamp;
//     }

//     const elapsedTime = timestamp - animationStartTime;
//     progress = elapsedTime / animationDuration;

//     if (progress <= 1 && !shouldStopAnimation()) {
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//         setInterval(()=> {
//             ctx.beginPath();
//         }, 1)
        
//         ctx.moveTo(0, canvasHeight);

//         for (let x = 0; x <= 1000 * progress; x++) {
//             const y = calculateY(x);
//             ctx.lineTo(x * scaleX, canvasHeight - y * scaleY);
//         }

//         ctx.strokeStyle = "#ffffff";
//         ctx.lineWidth = 3;
      
//             ctx.stroke();
    
        

//         const integralValue = integrate(1000 * progress);
//         if (integralValue >= integralThreshold) {
//             ctx.lineTo(1000 * progress * scaleX, canvasHeight);
//             ctx.lineTo(0, canvasHeight);
//             ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
           
//                 ctx.fill();
           
            
//         }

//         const xForImage = 1000 * progress;
//         const yForImage = calculateY(xForImage);
//         const image = new Image();
//         image.src = "images/plain.webp";
//         const imageWidth = 130;
//         const imageHeight = 90;
//         setInterval(()=> {
//             ctx.save();
//         }, 1)
        
        
//         ctx.translate(xForImage * scaleX, canvasHeight - yForImage * scaleY);
//         ctx.rotate(progress * -Math.PI / 6);
//         ctx.drawImage(image, -imageWidth / 4.5, -imageHeight / 1.1, imageWidth, imageHeight);
//         ctx.restore();
//         const progressText = `${formatProgress(progress)}x`;
//         ctx.fillStyle = "#ffffff";
//         ctx.font = "bold 70px CustomFont";
//         ctx.fillText(progressText, canvasWidth / 2.3, canvasHeight / 2.3);

//         animationRequestId = requestAnimationFrame(animate);
//     } else {
//         if (animationRequestId) {
//             cancelAnimationFrame(animationRequestId);
//         }
//         setTimeout(() => {
//             modal.classList.add('opacity');
//         }, 1500);
//     }
// }

// function startAnimation() {
//     gameCount++;
//     animationRequestId = requestAnimationFrame(animate);
//     startBtn.disabled = true;
//     modal.classList.add('active');
// }

// function updateMoneyNum() {
//     moneyNum.innerHTML = num + modificateValue;
// }

// function updateMinusBtnState() {
//     minusBtn.disabled = modificateValue <= 0;
// }

// function adaptationElements() {
//     if (window.innerWidth / window.innerHeight >= 2) {
//             container.classList.add('modificate1');
//             container.classList.remove('modificate2');
//             container.classList.remove('modificate3');
//             container.classList.remove('modificate4');
//             modal.classList.remove('modificate4');

        
//     } else if (window.innerWidth / window.innerHeight < 2 && window.innerWidth / window.innerHeight >= 1.5) {
     
//             container.classList.add('modificate2');
//             container.classList.remove('modificate1');
//             container.classList.remove('modificate3');
//             container.classList.remove('modificate4');
//             modal.classList.remove('modificate4');
    
        
//     } else if (window.innerWidth / window.innerHeight < 1.5 && window.innerWidth / window.innerHeight > 1) {
     
//             container.classList.add('modificate3');
//             container.classList.remove('modificate1');
//             container.classList.remove('modificate2');
//             container.classList.remove('modificate4');
//             modal.classList.remove('modificate4');
   
//     } else if (window.innerWidth / window.innerHeight <= 1) {
     
//             container.classList.add('modificate4');
//             modal.classList.add('modificate4');
//             container.classList.remove('modificate1');
//             container.classList.remove('modificate2');
//             container.classList.remove('modificate3');
 
        
//     } else {
        
//             container.classList.remove('modificate1');
//             container.classList.remove('modificate2');
//             container.classList.remove('modificate3');
//             container.classList.remove('modificate4');
//             modal.classList.remove('modificate4');
    
        
//     }
//     setInterval(()=> {
//         updateMoneyNum();
//     }, 1);
//     setInterval(()=> {
//         updateMinusBtnState();
//     }, 1);
// }

// adaptationElements();

// window.addEventListener('resize', adaptationElements);

// startBtn.addEventListener('click', startAnimation);
// plusBtn.addEventListener('click', plus);
// minusBtn.addEventListener('click', minus);

// function updateBetting(value) {
//     selectedBetting = parseInt(value);
//     modificateValue = selectedBetting;
//     setInterval(()=> {
//         updateMoneyNum();
//     }, 1)
//     setInterval(()=> {
//         updateMinusBtnState();
//     }, 1)
    
// }

// betting.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         updateBetting(e.target.textContent);
//     });
// });

// function plus() {
//     modificateValue += 1/2;
//     setInterval(()=> {
//         updateMoneyNum();
//     }, 1)
//     setInterval(()=> {
//         updateMinusBtnState();
//     }, 1)
// }

// function minus() {
//     if (modificateValue > 0) {
//         modificateValue -= 1/2;
//         setInterval(()=> {
//             updateMoneyNum();
//         }, 1)
//         setInterval(()=> {
//             updateMinusBtnState();
//         }, 1)
//     }
// }

// function updateMoneyNum() {
//     num = modificateValue;
//     moneyNum.innerHTML = num;
// }





// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// let langBtn = document.querySelector(".curent");
// let langBtnText = document.querySelector(".curent p");
// let langList = document.querySelector(".lang_list");
// let listElems = document.querySelectorAll(".lang_list li");
// let threeangle = document.querySelector(".curent span");
// let text = document.querySelector(".text");
// let startBtn = document.querySelector(".btn");
// let moneyNum = document.querySelector(".input p span");
// let minusBtn = document.querySelector(".minus");
// let plusBtn = document.querySelector(".plus");
// let modal = document.querySelector(".modal");
// let modalText1 = document.querySelector(".modal p:nth-child(1)");
// let modalText2 = document.querySelector(".modal p:nth-child(2)");
// let modalText3 = document.querySelector(".modal p:nth-child(3)");
// let modalBtn = document.querySelector(".modal a");
// let container = document.querySelector(".container");
// let betting = document.querySelectorAll(".betting");
// let animationRequestId = null;
// let num = 0;
// let modificateValue = 0;
// let selectedBetting = 0;
// let gameCount = 0;

// langBtn.addEventListener('click', () => {
//     langList.classList.toggle('active');
//     threeangle.classList.toggle('active');
// });

// listElems.forEach(listElem => {
//     listElem.addEventListener('click', (e) => {
//         let value = e.target.textContent;
//         langBtnText.innerHTML = value;

//         if (listElem.textContent == 'hi') {
//             modalText1.innerHTML = 'स्वागत बोनस';
//             modalText2.innerHTML = 'पहली तीन जमाओं पर 375% प्राप्त करें';
//             modalText3.innerHTML = '₹36,000 तक';
//             modalBtn.innerHTML = 'अभी पकड़ो';
//             text.innerHTML = 'एविएटर पायलट से अपना बोनस प्राप्त करें';
//             startBtn.innerHTML = 'बोनस प्राप्त करें';
//         } else {
//             modalText1.innerHTML = 'Welcome Bonus';
//             modalText2.innerHTML = 'Get 375% on first 3 deposits';
//             modalText3.innerHTML = 'Up to ₹36,000';
//             modalBtn.innerHTML = 'Grab now';
//             text.innerHTML = 'GET YOUR BONUS FROM AVIATOR PILOT';
//             startBtn.innerHTML = 'GET BONUS';
//         }

//         langList.classList.remove('active');
//         threeangle.classList.remove('active');
//     });
// });

// function calculateY(x) {
//     return (0.5 * x * x) / 2;
// }

// function calculateIntegral(a, b, n) {
//     const dx = (b - a) / n;
//     let integral = 0;

//     for (let i = 0; i < n; i++) {
//         const xLeft = a + i * dx;
//         const y = calculateY(xLeft);
//         integral += y * dx;
//     }

//     return integral;
// }

// const canvasWidth = 1000;
// const canvasHeight = 550;
// canvas.width = canvasWidth;
// canvas.height = canvasHeight;
// const scaleX = canvasWidth / 1000;
// const scaleY = canvasHeight / 250000;

// let animationStartTime;
// const animationDuration = 10000; // 10 секунд
// let progress = 0;
// const integralThreshold = 10000; // Значення інтегралу, при якому лінію буде замальовуватися

// function integrate(x) {
//     return calculateIntegral(0, x, 1000); // 1000 - кількість відрізків для інтегрування
// }

// function shouldStopAnimation() {
//     const currentTime = performance.now();
//     const elapsedTime = currentTime - animationStartTime;

//     if (elapsedTime >= 3000 && elapsedTime <= 9000) {
//         return Math.random() < 0.005;
//     }

//     if (elapsedTime > 9000) {
//         return true;
//     }

//     return false;
// }

// function formatProgress(progress) {
//     return (progress * 20).toFixed(2);
// }

// function animate(timestamp) {
//     if (!animationStartTime) {
//         animationStartTime = timestamp;
//     }

//     const elapsedTime = timestamp - animationStartTime;
//     progress = elapsedTime / animationDuration;

//     if (progress <= 1 && !shouldStopAnimation()) {
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//         ctx.beginPath();
//         ctx.moveTo(0, canvasHeight);

//         for (let x = 0; x <= 1000 * progress; x++) {
//             const y = calculateY(x);
//             ctx.lineTo(x * scaleX, canvasHeight - y * scaleY);
//         }

//         ctx.strokeStyle = "#ffffff";
//         ctx.lineWidth = 3;
//         ctx.stroke();

//         const integralValue = integrate(1000 * progress);
//         if (integralValue >= integralThreshold) {
//             ctx.lineTo(1000 * progress * scaleX, canvasHeight);
//             ctx.lineTo(0, canvasHeight);
//             ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
//             ctx.fill();
//         }

//         const xForImage = 1000 * progress;
//         const yForImage = calculateY(xForImage);
//         const image = new Image();
//         image.src = "images/plain.webp";
//         const imageWidth = 130;
//         const imageHeight = 90;
//         ctx.save();
//         ctx.translate(xForImage * scaleX, canvasHeight - yForImage * scaleY);
//         ctx.rotate(progress * -Math.PI / 6);
//         ctx.drawImage(image, -imageWidth / 4.5, -imageHeight / 1.1, imageWidth, imageHeight);
//         ctx.restore();
//         const progressText = `${formatProgress(progress)}x`;
//         ctx.fillStyle = "#ffffff";
//         ctx.font = "bold 70px CustomFont";
//         ctx.fillText(progressText, canvasWidth / 2.3, canvasHeight / 2.3);

//         animationRequestId = requestAnimationFrame(animate);
//     } else {
//         if (animationRequestId) {
//             cancelAnimationFrame(animationRequestId);
//         }
//         setTimeout(() => {
//             modal.classList.add('opacity');
//         }, 1500);
//     }
// }

// function startAnimation() {
//     gameCount++;
//     animationRequestId = requestAnimationFrame(animate);
//     startBtn.disabled = true;
//     modal.classList.add('active');
// }

// function updateMoneyNum() {
//     moneyNum.innerHTML = num + modificateValue;
//     updateMinusBtnState();
// }

// function updateMinusBtnState() {
//     minusBtn.disabled = modificateValue <= 0;
// }

// function adaptationElements() {
//     const aspectRatio = window.innerWidth / window.innerHeight;

//     if (aspectRatio >= 2) {
//         container.classList.add('modificate1');
//     } else if (aspectRatio < 2 && aspectRatio >= 1.5) {
//         container.classList.add('modificate2');
//     } else if (aspectRatio < 1.5 && aspectRatio > 1) {
//         container.classList.add('modificate3');
//     } else if (aspectRatio <= 1) {
//         container.classList.add('modificate4');
//         modal.classList.add('modificate4');
//     } else {
//         container.classList.remove('modificate1', 'modificate2', 'modificate3', 'modificate4');
//         modal.classList.remove('modificate4');
//     }

//     updateMoneyNum();
// }

// adaptationElements();

// window.addEventListener('resize', adaptationElements);

// startBtn.addEventListener('click', startAnimation);
// plusBtn.addEventListener('click', plus);
// minusBtn.addEventListener('click', minus);

// function updateBetting(value) {
//     selectedBetting = parseFloat(value);
//     modificateValue = selectedBetting;
//     updateMoneyNum();
// }

// betting.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         updateBetting(e.target.textContent);
//     });
// });

// function plus() {
//     modificateValue += 0.5;
//     updateMoneyNum();
// }

// function minus() {
//     if (modificateValue > 0) {
//         modificateValue -= 0.5;
//         updateMoneyNum();
//     }
// }



let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let langBtn = document.querySelector(".curent");
let langBtnText = document.querySelector(".curent p");
let langList = document.querySelector(".lang_list");
let threeangle = document.querySelector(".curent span");
let text = document.querySelector(".text");
let startBtn = document.querySelector(".btn");
let moneyNum = document.querySelector(".input p span");
let minusBtn = document.querySelector(".minus");
let plusBtn = document.querySelector(".plus");
let modal = document.querySelector(".modal");
let modalText1 = document.querySelector(".modal p:nth-child(1)");
let modalText2 = document.querySelector(".modal p:nth-child(2)");
let modalText3 = document.querySelector(".modal p:nth-child(3)");
let modalBtn = document.querySelector(".modal a");
let container = document.querySelector(".container");
let betting = document.querySelectorAll(".betting");
let listElems = document.querySelectorAll(".lang_list li");
let animationRequestId = null;
let num = 0;
let modificateValue = 0;
let selectedBetting = 0;
let gameCount = 0;

function calculateY(x) {
    return (0.5 * x * x) / 2;
}

function calculateIntegral(a, b, n) {
    const dx = (b - a) / n;
    let integral = 0;

    for (let i = 0; i < n; i++) {
        const xLeft = a + i * dx;
        const y = calculateY(xLeft);
        integral += y * dx;
    }

    return integral;
}

const canvasWidth = 1000;
const canvasHeight = 550;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const scaleX = canvasWidth / 1000;
const scaleY = canvasHeight / 250000;

let animationStartTime;
const animationDuration = 10000; // 10 секунд
let progress = 0;
const integralThreshold = 10000; // Значення інтегралу, при якому лінію буде замальовуватися

const image = new Image();
image.src = "images/plain.webp";
const imageWidth = 130;
const imageHeight = 90;

function integrate(x) {
    return calculateIntegral(0, x, 1000); // 1000 - кількість відрізків для інтегрування
}

function shouldStopAnimation(elapsedTime) {
    if (elapsedTime >= 3000 && elapsedTime <= 9000) {
        return Math.random() < 0.005;
    }

    return elapsedTime > 9000;
}

function formatProgress(progress) {
    return (progress * 20).toFixed(2);
}

function animate(timestamp) {
    if (!animationStartTime) {
        animationStartTime = timestamp;
    }

    const elapsedTime = timestamp - animationStartTime;
    progress = elapsedTime / animationDuration;

    if (progress <= 1 && !shouldStopAnimation(elapsedTime)) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.beginPath();
        ctx.moveTo(0, canvasHeight);

        const maxX = 1000 * progress;
        for (let x = 0; x <= maxX; x++) {
            const y = calculateY(x);
            ctx.lineTo(x * scaleX, canvasHeight - y * scaleY);
        }

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 3;
        ctx.stroke();

        const integralValue = integrate(maxX);
        if (integralValue >= integralThreshold) {
            ctx.lineTo(maxX * scaleX, canvasHeight);
            ctx.lineTo(0, canvasHeight);
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            ctx.fill();
        }

        const xForImage = maxX;
        const yForImage = calculateY(xForImage);
        ctx.save();
        ctx.translate(xForImage * scaleX, canvasHeight - yForImage * scaleY);
        ctx.rotate(progress * -Math.PI / 6);
        ctx.drawImage(image, -imageWidth / 4.5, -imageHeight / 1.1, imageWidth, imageHeight);
        ctx.restore();
        const progressText = `${formatProgress(progress)}x`;
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 70px CustomFont";
        ctx.fillText(progressText, canvasWidth / 2.3, canvasHeight / 2.3);

        animationRequestId = requestAnimationFrame(animate);
    } else {
        if (animationRequestId) {
            cancelAnimationFrame(animationRequestId);
        }
        setTimeout(() => {
            modal.classList.add('opacity');
        }, 1500);
    }
}

function startAnimation() {
    gameCount++;
    animationRequestId = requestAnimationFrame(animate);
    startBtn.disabled = true;
    modal.classList.add('active');
}

function updateMoneyNum() {
    moneyNum.innerHTML = num + modificateValue;
    updateMinusBtnState();
}

function updateMinusBtnState() {
    minusBtn.disabled = modificateValue <= 0;
}

function adaptationElements() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const aspectClass = aspectRatio >= 2
        ? 'modificate1'
        : aspectRatio >= 1.5
            ? 'modificate2'
            : aspectRatio > 1
                ? 'modificate3'
                : 'modificate4';

    container.className = `container ${aspectClass}`;
    modal.className = `modal ${aspectClass}`;
    updateMoneyNum();
}

adaptationElements();

window.addEventListener('resize', adaptationElements);

langBtn.addEventListener('click', () => {
    langList.classList.toggle('active');
    threeangle.classList.toggle('active');
});

listElems.forEach(listElem => {
    listElem.addEventListener('click', (e) => {
        const value = e.target.textContent;
        langBtnText.innerHTML = value;

        if (value === 'hi') {
            modalText1.innerHTML = 'स्वागत बोनस';
            modalText2.innerHTML = 'पहली तीन जमाओं पर 375% प्राप्त करें';
            modalText3.innerHTML = '₹36,000 तक';
            modalBtn.innerHTML = 'अभी पकड़ो';
            text.innerHTML = 'एविएटर पायलट से अपना बोनस प्राप्त करें';
            startBtn.innerHTML = 'बोनस प्राप्त करें';
        } else {
            modalText1.innerHTML = 'Welcome Bonus';
            modalText2.innerHTML = 'Get 375% on first 3 deposits';
            modalText3.innerHTML = 'Up to ₹36,000';
            modalBtn.innerHTML = 'Grab now';
            text.innerHTML = 'GET YOUR BONUS FROM AVIATOR PILOT';
            startBtn.innerHTML = 'GET BONUS';
        }

        langList.classList.remove('active');
        threeangle.classList.remove('active');
    });
});

function updateBetting(value) {
    selectedBetting = parseFloat(value);
    modificateValue = selectedBetting;
    updateMoneyNum();
}

betting.forEach(btn => {
    btn.addEventListener('click', (e) => {
        updateBetting(e.target.textContent);
    });
});

function plus() {
    modificateValue += 0.5;
    updateMoneyNum();
}

function minus() {
    if (modificateValue > 0) {
        modificateValue -= 0.5;
        updateMoneyNum();
    }
}

startBtn.addEventListener('click', startAnimation);
plusBtn.addEventListener('click', plus);
minusBtn.addEventListener('click', minus);

