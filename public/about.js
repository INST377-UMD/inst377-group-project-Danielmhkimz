const chart_container = document.getElementById("chart-container")
const api_id = '029eac24'
const api_key = '5a9dfed8e63d369e64ef5043a1b417ba'

document.getElementById('chart-container').style.display = 'none';


function chartSalary() {
    document.getElementById('chart-container').style.display = '';
    let state = document.getElementById('state').value
    console.log(state)

    fetch(`https://api.adzuna.com/v1/api/jobs/us/history?app_id=${api_id}&app_key=${api_key}&location0=US&location1=${state}&months=12`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        chart_data = sortData(data.month)
        console.log(chart_data)

        let dates = Object.keys(chart_data);
        let salaries = Object.values(chart_data);

        if (window.salaryChart) {
            window.salaryChart.destroy();
        }

        const ctx = document.getElementById('salary-chart');

        document.getElementById('chart-container').style.display = '';

        window.salaryChart = new Chart(
            ctx,
            {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: '($) Historical Salary',
                            data: salaries,
                            borderColor: 'rgb(50, 205, 50)'
                        }
                    ]
                }
            }
        )
    })
}

function sortData(test_obj) {
    let all_keys = Object.keys(test_obj);

    all_keys.sort();
    console.log(all_keys)

    let temp_obj = {}
    for (let key of all_keys) {
        temp_obj[key] = test_obj[key]
    }
        return temp_obj;
}

