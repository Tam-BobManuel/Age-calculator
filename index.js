// User's day, month and year input elements declared here
const dayInput = $('#day');
const monthInput = $('#month');
const yearInput = $('#year');
const hourInput = $('#hour');

    // error messages under inputs
const errorDay = $('.error-day');
const errorMonth = $('.error-month');
const errorYear = $('.error-year');

    // submit button
const submit = $('#submitBtn');


    // results
let yearResults = $('#years-result');
let monthResults = $('#months-result');
let dayResults = $('#days-result');
let hourResults = $('#hours-result');

submit.click(function(event) {
    event.preventDefault(); // prevent default form submission behavior
    var currentYear = new Date().getFullYear();
        // Handles day calculation
    if (dayInput.val() > 31 || dayInput.val() == '' || monthInput.val() > 12 || monthInput.val() == '' || yearInput.val() > currentYear || yearInput.val() == '') {
        if (dayInput.val() > 31 || dayInput.val() == '') {
            errorDay.css('display', 'block'); // display error message
        }
        if (monthInput.val() > 12 || monthInput.val() == '') {
            errorMonth.css('display', 'block'); // display error message
        } 
        if (yearInput.val() > currentYear || yearInput.val() == '') {
            errorYear.css('display', 'block'); // display error message
        }
    } else {
        const today = new Date();
        const year = Math.max(0,today.getFullYear() - yearInput.val());
        const month = Math.max(0,String(today.getMonth() +1) - monthInput.val());
        const day = Math.max(0,String(today.getDate()) - dayInput.val());
        const hour = Math.max(0,String(today.getHours()) - 24);
    
        dayResults.html(day);
        monthResults.html(month);
        yearResults.html(year);
        hourResults.html(hour);
    
    
            // Set the date to tomorrow
        const now = new Date(); // get the current date and time
        const tomorrow = new Date();
        tomorrow.setDate(now.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
            // Calculate the difference in hours
        const diffInMs = tomorrow - now; // get the difference between now and midnight tomorrow
        const diffInHours = diffInMs / (1000 * 60 * 60); // convert the difference to hours
        
        const hoursPassed = 24 - diffInHours; // calculate the number of hours that have already passed
        hourResults.html(hoursPassed.toFixed(1)); // display the result rounded to 1 decimal place in an HTML element with the ID 'hourResults'
            
    }
        

  });