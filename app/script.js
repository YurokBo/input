document.addEventListener('keydown', e => {

    if (e.keyCode === 13) {
        const inputText = document.querySelector('.input'),
            div = document.createElement('div');
        div.style.font = '25px';
        div.style.fontWeight = 'bold';
        div.style.fontFamily = 'sans-serif';
        div.style.margin = '5px';
        div.innerHTML = inputText.value;
        inputText.value = '';

        document.body.append(div);

    }
})


