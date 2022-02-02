console.log("js working");
const availabilityFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const day1 = document.querySelector('#day1').checked;
    const day2 = document.querySelector('#day2').checked;
    const day3 = document.querySelector('#day3').checked;
    const day4 = document.querySelector('#day4').checked;
    const day5 = document.querySelector('#day5').checked;
    const day6 = document.querySelector('#day6').checked;
    const day7 = document.querySelector('#day7').checked;
    const day8 = document.querySelector('#day8').checked;
    const day9 = document.querySelector('#day9').checked;
    const day10 = document.querySelector('#day10').checked;
    const day11 = document.querySelector('#day11').checked;
    const day12 = document.querySelector('#day12').checked;
    const day13 = document.querySelector('#day13').checked;
    const day14 = document.querySelector('#day14').checked;
    
    if (firstName && lastName) {
        console.log("working");
        const response = await fetch('/api/calendar', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12, day13, day14 }),
            headers: { 'Content-Type': 'application/json' },
        });

        // if (response.ok) {
        //     document.location.replace('/');
        // } else {
        //     alert('Failed to sign up.');
        // }
    }
};


document
    .querySelector('#formSubmit')
    .addEventListener('submit', availabilityFormHandler);