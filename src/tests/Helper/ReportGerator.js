// export function readJsonFile("C:/User/msundarraj/Desktop/Ezsub/test-results/cucumber-report.json"){
//     const reader = new FileReader();
//     reader.onload = (event) => {
//         const jsonData = JSON.parse(event.target.result);
//         this.convertJsonToHtml(jsonData);
//     };
//     reader.readAsText(file);
// }


export function convertJsonToHtml() {
    
    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cucumber Test Results</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                table, th, td {
                    border: 1px solid black;
                }
                th, td {
                    padding: 10px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
                .passed {
                    background-color: #d4edda;
                }
                .failed {
                    background-color: #f8d7da;
                }
                .skipped {
                    background-color: #fff3cd;
                }
                .summary {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Cucumber Test Scenario Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Scenario Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>`;

    // Loop through the JSON data to populate the table
    jsonData.forEach(feature => {
        feature.elements.forEach(scenario => {
            const scenarioName = scenario.name;
            const scenarioStatus = scenario.steps.some(step => step.result.status === 'failed') ? 'failed' : 'passed';

            htmlContent += `
                <tr class="${scenarioStatus}">
                    <td>${scenarioName}</td>
                    <td>${scenarioStatus.charAt(0).toUpperCase() + scenarioStatus.slice(1)}</td>
                </tr>`;
        });
    });

    // Add summary
    const totalScenarios = jsonData.reduce((acc, feature) => acc + feature.elements.length, 0);
    const passedScenarios = jsonData.reduce((acc, feature) => acc + feature.elements.filter(scenario => scenario.steps.every(step => step.result.status === 'passed')).length, 0);
    const failedScenarios = totalScenarios - passedScenarios;

    htmlContent += `
            </tbody>
        </table>
        <div class="summary">
            <h2>Summary</h2>
            <p><strong>Total Scenarios: ${totalScenarios}</strong></p>
            <p><strong>Passed: ${passedScenarios}</strong></p>
            <p><strong>Failed: ${failedScenarios}</strong></p>
        </div>
        </body>
        </html>`;

    // Create a Blob with the HTML content and offer it for download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'cucumber-test-results.html';
    link.click();
}