
let closeRighTNav = document.querySelector(".fa-times");

let openRighTNav = document.querySelectorAll(".fa-bars");


let RighTNav =document.querySelector(".nav-right");

let allScreenBlack = document.querySelector(".allScreenBlack");


closeRighTNav.onclick = () => {
  

    RighTNav.classList.add("classAnimation");
    setTimeout(function() {
        RighTNav.style.display="none";
        RighTNav.style.width="0px";
        allScreenBlack.style.display="none";
    },250);
   
}

allScreenBlack.onclick = closeRighTNav.onclick



openRighTNav[0].onclick = () => {
    RighTNav.style.display="block";
    RighTNav.style.width="300px";
    RighTNav.classList.remove("classAnimation");
    allScreenBlack.style.display="block";
}


openRighTNav[1].onclick = () => {
    RighTNav.style.display="block";
    RighTNav.style.width="300px";
    RighTNav.classList.remove("classAnimation");
    allScreenBlack.style.display="block";
}

//navbar
let nav = document.querySelector(".nav");

let nav2 = document.querySelector(".nav2");

let toTopBtn = document.querySelector(".toTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500) {
        nav.classList.add("navScrolled");

        toTopBtn.style.display="block";
    } else {
        nav.classList.remove("navScrolled");

        toTopBtn.style.display="none";
    }
   
});


window.addEventListener("scroll", () => {

    if(window.scrollY > 500) {
        nav2.classList.add("navScrolled");

        toTopBtn.style.display="block";
    } else {
        nav2.classList.remove("navScrolled");

        toTopBtn.style.display="none";
    }
   
});

toTopBtn.onclick = () => {
    document.documentElement.scrollTop = 0;
}
 
let navBtn = document.querySelectorAll(".list");


navBtn[0].onclick = () => {
    navBtn[0].classList.add("active");
    navBtn[1].classList.remove("active");
    navBtn[2].classList.remove("active");
    navBtn[3].classList.remove("active");
    navBtn[4].classList.remove("active");
    navBtn[5].classList.remove("active");
    navBtn[6].classList.remove("active");
    navBtn[7].classList.remove("active");
}


navBtn[1].onclick = () => {
    navBtn[1].classList.add("active");
    navBtn[0].classList.remove("active");
    navBtn[2].classList.remove("active");
    navBtn[3].classList.remove("active");
    navBtn[4].classList.remove("active");
    navBtn[5].classList.remove("active");
    navBtn[6].classList.remove("active");
    navBtn[7].classList.remove("active");
  
}


navBtn[2].onclick = () => {
    navBtn[2].classList.add("active");
    navBtn[1].classList.remove("active");
    navBtn[0].classList.remove("active");
    navBtn[3].classList.remove("active");
    navBtn[4].classList.remove("active");
    navBtn[5].classList.remove("active");
    navBtn[6].classList.remove("active");
    navBtn[7].classList.remove("active");
}

navBtn[3].onclick = () => {
    navBtn[3].classList.add("active");
    navBtn[0].classList.remove("active");
    navBtn[2].classList.remove("active");
    navBtn[1].classList.remove("active");
    navBtn[4].classList.remove("active");
    navBtn[5].classList.remove("active");
    navBtn[6].classList.remove("active");
    navBtn[7].classList.remove("active");
}

navBtn[4].onclick = () => {
    navBtn[4].classList.add("active");
    navBtn[0].classList.remove("active");
    navBtn[2].classList.remove("active");
    navBtn[3].classList.remove("active");
    navBtn[1].classList.remove("active");
    navBtn[5].classList.remove("active");
    navBtn[6].classList.remove("active");
    navBtn[7].classList.remove("active");

}

navBtn[5].onclick = () => {
    navBtn[5].classList.add("active");
    navBtn[0].classList.remove("active");
    navBtn[2].classList.remove("active");
    navBtn[3].classList.remove("active");
    navBtn[4].classList.remove("active");
    navBtn[1].classList.remove("active");
    navBtn[6].classList.remove("active");
    navBtn[7].classList.remove("active");

}

navBtn[7].onclick = () => {
    navBtn[7].classList.add("active");
    navBtn[0].classList.remove("active");
    navBtn[2].classList.remove("active");
    navBtn[3].classList.remove("active");
    navBtn[4].classList.remove("active");
    navBtn[5].classList.remove("active");
    navBtn[6].classList.remove("active");
    navBtn[1].classList.remove("active");

}

let numberField = document.querySelector(".number");
let numberField2 = document.querySelector(".number2");
let numberField3 = document.querySelector(".number3");
let numberField4 = document.querySelector(".number4");

function countF() {

    numberField.classList.add("zoomout");
    numberField.innerHTML =2544;

    setTimeout(function () {
        numberField2.classList.add("zoomout");
        numberField2.innerHTML =6548 ;
    }, 200);
    
    setTimeout(()=> {
        numberField3.classList.add("zoomout");
        numberField3.innerHTML =505;
    }, 300);
  
    setTimeout(()=> {
        numberField4.classList.add("zoomout");
        numberField4.innerHTML =85;
    }, 400);
    
    
}


let buttonsPortofolio = document.querySelectorAll(".buttonsPortofolio");

let cards = document.querySelectorAll(".card");

let aplications = document.querySelectorAll(".aplications");

let logo = document.querySelectorAll(".logo");

let webdesign = document.querySelectorAll(".webdesign");

buttonsPortofolio[0].onclick = () => {
    buttonsPortofolio[0].classList.add("activeBTNS");
    buttonsPortofolio[1].classList.remove("activeBTNS");
    buttonsPortofolio[2].classList.remove("activeBTNS");
    buttonsPortofolio[3].classList.remove("activeBTNS");
    for(let i=0; i< aplications.length; i++) {
        aplications[i].style.opacity="1";
        setTimeout(()=> {
            aplications[i].style.display="block";
        },300)

    }
    for(let i=0; i< logo.length; i++) {
        logo[i].style.opacity="1";
        setTimeout(()=> {
            logo[i].style.display="block";
        },300)
    }

    for(let i=0; i<   webdesign.length; i++) {
       webdesign[i].style.opacity="1";
        webdesign[i].style.display="block";
    }
  
}


buttonsPortofolio[1].onclick = () => {
    buttonsPortofolio[1].classList.add("activeBTNS");
    buttonsPortofolio[0].classList.remove("activeBTNS");
    buttonsPortofolio[2].classList.remove("activeBTNS");
    buttonsPortofolio[3].classList.remove("activeBTNS");
    for(let i=0; i< aplications.length; i++) {
        aplications[i].style.opacity="1";
        setTimeout(()=> {
            aplications[i].style.display="block";
        },300)

    }
    for(let i=0; i< logo.length; i++) {
        logo[i].style.opacity="0";
        setTimeout(()=> {
            logo[i].style.display="none";
        },300)
    }

    for(let i=0; i<   webdesign.length; i++) {
       webdesign[i].style.opacity="0";
        webdesign[i].style.display="none";
    }
  
}

buttonsPortofolio[2].onclick = () => {
    buttonsPortofolio[2].classList.add("activeBTNS");
    buttonsPortofolio[1].classList.remove("activeBTNS");
    buttonsPortofolio[0].classList.remove("activeBTNS");
    buttonsPortofolio[3].classList.remove("activeBTNS");
    for(let i=0; i< aplications.length; i++) {
        aplications[i].style.opacity="0";
        setTimeout(()=> {
            aplications[i].style.display="none";
        },300)

    }
    for(let i=0; i< logo.length; i++) {
        logo[i].style.opacity="1";
        setTimeout(()=> {
            logo[i].style.display="block";
        },300)
    }

    for(let i=0; i<   webdesign.length; i++) {
       webdesign[i].style.opacity="0";
        webdesign[i].style.display="none";
    }
  
}

buttonsPortofolio[3].onclick = () => {
    buttonsPortofolio[3].classList.add("activeBTNS");
    buttonsPortofolio[0].classList.remove("activeBTNS");
    buttonsPortofolio[2].classList.remove("activeBTNS");
    buttonsPortofolio[1].classList.remove("activeBTNS");
    for(let i=0; i< aplications.length; i++) {
        aplications[i].style.opacity="0";
        setTimeout(()=> {
            aplications[i].style.display="none";
        },300)

    }
    for(let i=0; i< logo.length; i++) {
        logo[i].style.opacity="0";
        setTimeout(()=> {
            logo[i].style.display="none";
        },300)
    }

    for(let i=0; i<   webdesign.length; i++) {
        setTimeout(()=> {
            webdesign[i].style.opacity="1";
        webdesign[i].style.display="block";
        },400)
      
    }
}




let allScreenBlack2 = document.querySelector(".allScreenBlack2");

let ImageNeedChanged = document.querySelector(".ImageNeedChanged");




allScreenBlack2.onclick= () => {
    allScreenBlack2.style.display="none";
    
}

function imageChange(param) {
    ImageNeedChanged.src=param;
    ImageNeedChanged.classList.add("zoomImage");
}

cards[0].onclick = () => {
    allScreenBlack2.style.display="block";
    
}

cards[1].onclick = () => {
    allScreenBlack2.style.display="block";
}

cards[2].onclick = () => {
    allScreenBlack2.style.display="block";
}

cards[3].onclick = () => {
    allScreenBlack2.style.display="block";
}

cards[4].onclick = () => {
    allScreenBlack2.style.display="block";
}

cards[5].onclick = () => {
    allScreenBlack2.style.display="block";
}





let plate = document.querySelectorAll(".plate");


plate[0].onmouseover = () => {
    plate[0].classList.add("activePlate");
    plate[1].classList.remove("activePlate");
    plate[2].classList.remove("activePlate");
    plate[3].classList.remove("activePlate");
    plate[4].classList.remove("activePlate");
    plate[5].classList.remove("activePlate");

}


plate[1].onmouseover = () => {
    plate[1].classList.add("activePlate");
    plate[0].classList.remove("activePlate");
    plate[2].classList.remove("activePlate");
    plate[3].classList.remove("activePlate");
    plate[4].classList.remove("activePlate");
    plate[5].classList.remove("activePlate");

}


plate[2].onmouseover = () => {
    plate[2].classList.add("activePlate");
    plate[1].classList.remove("activePlate");
    plate[0].classList.remove("activePlate");
    plate[3].classList.remove("activePlate");
    plate[4].classList.remove("activePlate");
    plate[5].classList.remove("activePlate");

}

plate[3].onmouseover = () => {
    plate[3].classList.add("activePlate");
    plate[1].classList.remove("activePlate");
    plate[0].classList.remove("activePlate");
    plate[2].classList.remove("activePlate");
    plate[4].classList.remove("activePlate");
    plate[5].classList.remove("activePlate");

}

plate[4].onmouseover = () => {
    plate[4].classList.add("activePlate");
    plate[1].classList.remove("activePlate");
    plate[0].classList.remove("activePlate");
    plate[3].classList.remove("activePlate");
    plate[2].classList.remove("activePlate");
    plate[5].classList.remove("activePlate");

}


plate[5].onmouseover = () => {
    plate[5].classList.add("activePlate");
    plate[1].classList.remove("activePlate");
    plate[0].classList.remove("activePlate");
    plate[3].classList.remove("activePlate");
    plate[4].classList.remove("activePlate");
    plate[2].classList.remove("activePlate");

}


let carousel = document.getElementById("slider");

let leftArrow = document.querySelector(".fa-arrow-left");

let rightArrow = document.querySelector(".fa-arrow-right");

let x = 0;

leftArrow.onclick = () => {

    if(x >0) {
        x = x - 1000;

       
   } else if(x<=0) {
        x=2000;
      
   }
   carousel.style.right = x + "px";
}



rightArrow.onclick = () => {

   if(x<2000) {
        x = x +1000;

        
   } else if(x>=2000) {
    x=0;
   }    
   carousel.style.right = x + "px";
}

//cookie


let cookieContainer = document.querySelector(".cookieContainer");

let cookieButton = document.getElementById("acceptCookie");

window.setTimeout(() =>{
    if(!localStorage.getItem("cookieWasDisplayed")) {
        cookieContainer.style.bottom="0px";
        cookieContainer.style.opacity="1";
    }
 
},2000);

cookieButton.addEventListener("click", () => {
    cookieContainer.style.display="none";
    localStorage.setItem("cookieWasDisplayed",true);
})



//cookie

var btnNight = document.getElementById("btnNight");

var btnLight = document.getElementById("btnLight");

var sectionButton = document.getElementById("sectionThemeButton");


btnNight.addEventListener("click", () => {
    localStorage.setItem("ColorTheme", "black");
    localStorage.setItem("ElementDisplayed", "btnNight");
    localStorage.setItem("BtnNightDisplay", "none");
    localStorage.setItem("BtnLightDisplay", "block");
    btnNight.style.display=  localStorage.getItem("BtnNightDisplay");
    btnLight.style.display= localStorage.getItem("BtnLightDisplay");
    console.log("O sa reusesc !!!");
    document.body.style.backgroundColor = localStorage.getItem("ColorTheme");

})

btnLight.addEventListener("click", () => {
    localStorage.setItem("ColorTheme", "white");
    localStorage.setItem("ElementDisplayed", "btnLight");
    localStorage.setItem("BtnNightDisplay", "block");
    localStorage.setItem("BtnLightDisplay", "none");
    btnNight.style.display=  localStorage.getItem("BtnNightDisplay");
    btnLight.style.display= localStorage.getItem("BtnLightDisplay");
    console.log("O sa reusesc !!!");
    document.body.style.backgroundColor = localStorage.getItem("ColorTheme");
})


window.addEventListener('load', () => {
    document.body.style.backgroundColor = localStorage.getItem("ColorTheme");
    btnNight.style.display = localStorage.getItem("BtnNightDisplay");
    btnLight.style.display = localStorage.getItem("BtnLightDisplay");
  });
    



//form Remember

let nameForm = document.getElementById("NameForm");

let emailForm = document.getElementById("EmailForm");

let numberForm = document.getElementById("NumberForm");



function check()  {
    if(nameForm.value !== "") {
        localStorage.setItem("NameWrite", nameForm.value);
    } else if(nameForm.value == ""){
        nameForm.value = localStorage.getItem("NameWrite");

    }

    if(emailForm.value !== "") {
        localStorage.setItem("EmailWrite", emailForm.value);
    } else if(emailForm.value == ""){
        emailForm.value = localStorage.getItem("EmailWrite");

    }

    if(numberForm.value !== "") {
        localStorage.setItem("NumberWrite", numberForm.value);
    } else if(numberForm.value == ""){
        numberForm.value = localStorage.getItem("NumberWrite");

    }
}







window.reload(check());


//form Remember



