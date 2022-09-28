var typed =new Typed(".typing",{
    strings:[,"Front-end Developer","Computer Science Student"],
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: true
})

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection= document.querySelectorAll(".section"),
    totalSection = allSection.length
    for(let i = 0; i<totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
           for(let  j=0;j<totalNavList;j++){
            //    if(navList[j],this.querySelector("a").classList.contains("active")){
            //         allSection[i].classList.add("back-section");
            //    }
            navList[j].querySelector("a").classList.remove("active");
           }
           this.classList.add("active")
            showSection(this);
        })
    }

    function showSection(element){
        for(let i =0; i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" +target).classList.add("active")
    }
