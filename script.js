const card = document.querySelector('.card')

const user_input = document.getElementById('user-input').addEventListener('input', function (e) {
    card.style.transform = "scaleY(1.0)"
    try {
        const val = parseInt(e.target.value);
        let grams = e.target.value * 1000;
        document.getElementById('gramOutput').innerHTML = `${grams}g`;

        let pounds = e.target.value * 2.205;
        document.getElementById('poundsOutput').innerHTML = `${pounds}lbs`;

        let ounces = e.target.value * 35.274;
        document.getElementById('ouncesOutput').innerHTML = `${ounces}oz`;
    } catch (error) {
        alert('Only numbers are allowed');
    }
})



