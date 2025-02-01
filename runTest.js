const XLSX = require('xlsx');
const { execSync } = require('child_process');

const readExcelData = (filePath) => {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet);
    return jsonData;
};
const FilePath = 'C:/Users/msundarraj/Desktop/Ezsub/data.xlsx';
const excelData = readExcelData(FilePath);
const rowCount = excelData.length;
console.log(excelData);
console.log(`Found ${rowCount} rows in the Excel file.`);

for (let i = 0; i < rowCount; i++) {
    console.log(`Running test for iteration ${i + 1}`);
    

    try {
        execSync('npm test', { stdio: 'inherit' });
    } catch (error) {
        console.error(`Test iteration failed`, error);
    }
}
