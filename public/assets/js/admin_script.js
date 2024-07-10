session_start();
function fetchSellerData() {
    $.ajax({
        url: 'assets/js/src/PharmacySession.php',
        method: 'GET',
        success: function (PharmacyResponse) {
            $('#SellerName').text(PharmacyResponse.PharmacyEmail);
        }
    });

}

function searchCustomers() {
    // Get input value
    var input = document.getElementById('searchInput').value.toUpperCase();
    var table = document.getElementById('customerTable');
    var tr = table.getElementsByTagName('tr');

    // Loop through all table rows, and hide those who don't match the search query
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName('td')[1]; // Search by name in this example
        if (td) {
            var txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}


// JavaScript for initializing the chart
const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'SALES',
            data: [12, 19, 3, 5, 2, 3, 10, 15, 20, 25, 30, 35],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Color of the legend text
                }
            }
        }
    }
});
