let Username = prompt("как вас зовут").trim()

if (Username === "Alex" || Username === "alex") {
    alert("Пользователь найден")

    let account = +prompt("Ваш номер счёта?").trim()

    if (account === 7777) {
        alert("Правильный номер счёта")

        let money = +prompt("Сколбко обналичить ?").trim()

        if (money <= 10000) {
            alert("Всё отлично")
        } else {
            alert("У вас не достаточно средст")
        }
        let totalbalnce = 10000
        let balance = totalbalnce - money
        alert("Вы снали со счёта" + money)
        alert("Ваш баланс остался" + balance)


    } else {
        alert("Пользователь не найден досведули")
    }

} else {
    alert("Пользователь не найден досведули")
}

let userName = prompt("What is your name")

if (userName[0] === "A" || userName[0] === "a") {
    alert("Go")


    let age = + prompt("How old are tou")


    if (age >= 20 && age <= 40) {
        alert("Вам можно")

        let money = +prompt("Сколько у вас на шету $ ?")

        if (money >= 100) {
            alert("У вас достаточно денег зайдите")


            let people = +prompt("Сколко вас ?")
            alert("ок")


        } else {
            alert("У вас не достаточно $")
        }
    } else {
        alert(" Вам нельзя вы либо сторы для этого сайта или ещё малтнкий для этого сайта")
    }
} else {
    alert("Stop")
}