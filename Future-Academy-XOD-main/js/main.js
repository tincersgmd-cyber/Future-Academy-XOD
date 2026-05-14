const kidsBtn = document.getElementById('kidsSwitcher');
const teensBtn = document.getElementById('teensSwitcher');
const adultsBtn = document.getElementById('adultsSwitcher');

const kids = document.getElementById('kids');
const teens = document.getElementById('teens');
const adults = document.getElementById('adults');

kidsBtn.addEventListener('click', () => {
    kids.classList.remove('hidden');
    kids.classList.add('loaded');
    teens.classList.add('hidden');
    adults.classList.add('hidden');

    kidsBtn.classList.add('colorfulBorderBottom');
    teensBtn.classList.remove('colorfulBorderBottom');
    adultsBtn.classList.remove('colorfulBorderBottom');
});

teensBtn.addEventListener('click', () => {
    kids.classList.add('hidden');
    teens.classList.remove('hidden');
    teens.classList.add('loaded');
    adults.classList.add('hidden');

    kidsBtn.classList.remove('colorfulBorderBottom');
    teensBtn.classList.add('colorfulBorderBottom');
    adultsBtn.classList.remove('colorfulBorderBottom');
});

adultsBtn.addEventListener('click', () => {
    kids.classList.add('hidden');
    teens.classList.add('hidden');
    adults.classList.remove('hidden');
    adults.classList.add('loaded');

    kidsBtn.classList.remove('colorfulBorderBottom');
    teensBtn.classList.remove('colorfulBorderBottom');
    adultsBtn.classList.add('colorfulBorderBottom');
});