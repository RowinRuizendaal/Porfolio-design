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