const availabilityFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const day1 = document.querySelector('#day1').value.trim();
    const day2 = document.querySelector('#day2').value.trim();
    const day3 = document.querySelector('#day3').value.trim();
    const day4 = document.querySelector('#day4').value.trim();
    const day5 = document.querySelector('#day5').value.trim();
    const day6 = document.querySelector('#day6').value.trim();
    const day7 = document.querySelector('#day7').value.trim();
    const day8 = document.querySelector('#day8').value.trim();
    const day9 = document.querySelector('#day9').value.trim();
    const day10 = document.querySelector('#day10').value.trim();
    const day11 = document.querySelector('#day11').value.trim();
    const day12 = document.querySelector('#day12').value.trim();
    const day13 = document.querySelector('#day13').value.trim();
    const day14 = document.querySelector('#day14').value.trim();

    if (firstName && lastName && day1 && day2 && day3 && day4 && day5 && day6 && day7 && day8 && day9 && day10 && day11 && day12 && day13 && day14) {
        const response = await fetch('/api/calendars', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14 }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};


document
    .querySelector('.signup-form')
    .addEventListener('submit', availabilityFormHandler);