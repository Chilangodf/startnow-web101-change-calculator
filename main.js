// Write your JavaScript here
$( '#calculate-change' ).click(function change() {
    const owed = document.getElementById('amount-due').value;
    const paid = document.getElementById('amount-received').value;
    let cents = (paid - owed).toFixed(2) * 100;
    console.log('owed: ' + owed);
    console.log('Paid: ' + paid);
    console.log('cents: ' + cents);



        var twenties = 0;
        var tens = 0;
        var fives = 0;
        var dollars = 0;
        var quarters = 0;
        var dimes = 0;
        var nickels = 0;
        var pennies = 0;
        var Cambio= 0;
        
        // twenties = Math.floor(cents / 2000);
        // cents = cents % 2000;
        // document.getElementById('twenties-output').innerHTML = twenties;
        // console.log('twenties: ' + twenties);

        // tens = Math.floor(cents / 1000);
        // cents = cents % 1000;
        // document.getElementById('tens-output').innerHTML = tens;
        // console.log('tens: ' + tens);

        // fives = Math.floor(cents / 500);
        // cents = cents % 500;
        // document.getElementById('fives-output').innerHTML = fives;
        // console.log('fives: ' + fives);
    
        dollars = Math.floor(cents / 100);
        cents = cents % 100;
        document.getElementById('dollars-output').innerHTML = dollars;
        console.log('dollars: ' + dollars);

        quarters = Math.floor(cents / 25);
        cents = cents % 25;
        document.getElementById('quarters-output').innerHTML = quarters;
        console.log('quarters: ' + quarters);

        dimes = Math.floor(cents / 10);
        cents = cents % 10;
        document.getElementById('dimes-output').innerHTML = dimes;
        console.log('dimes: ' + dimes);

        nickels = Math.floor(cents / 5);
        cents = cents % 5;
        document.getElementById('nickels-output').innerHTML = nickels;
        console.log('nickels: ' + nickels);
        
        pennies = Math.round(cents / 1);
        cents = cents % 1;
        document.getElementById('pennies-output').innerHTML = pennies;
        console.log('pennies: ' + pennies);
        
        Cambio = (paid - owed).toFixed(2);
        document.getElementById('change').innerHTML = Cambio;
        console.log('change: ' + Cambio);
})
