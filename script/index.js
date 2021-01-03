const menuToggle = document.querySelector('.toggle')
const banner = document.querySelector('.banner')

const timer = document.querySelector('.timer h2')
const interval = setInterval(getTime, 1000);

const toggleMenu = () => {
    menuToggle.classList.toggle('active')
    banner.classList.toggle('active')
}

const listeditems = () => {
    // Maak alle nav ul li a bereikbaar met een foorloop (het weghalen van het hamburger menu)
    for (let i = 0; i < document.querySelectorAll('.listed-item').length; i++) {
      document
        .querySelectorAll('.listed-item')
        [i].addEventListener('click', toggleMenu)
    }
  }
  listeditems()

  
  
  
  
  function getTime () {
      const date = new Date();
      let curr_hour = date.getHours();
      let curr_min = date.getMinutes();
      let curr_sec = date.getSeconds();
  
      if (curr_sec < 10) {
          curr_sec = `0${curr_sec}`
      } 
      if ( curr_min < 10) {
          curr_min = `0${curr_min}`
      } 
      if (curr_hour < 10 ){
          curr_hour = `0${curr_hour}`
      }
  
      timer.innerHTML = `${curr_hour}:${curr_min}:${curr_sec}`
  }


menuToggle.addEventListener('click', toggleMenu)


const logo = document.querySelectorAll('#logo path')

for (i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
}


const toggle = () => {
    const menu = document.querySelector('.toggle')
    const navigation = document.querySelector('.navigation')

    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}

document.querySelector('.toggle').addEventListener('click', toggle)