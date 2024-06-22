function calculate() {
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);

    const determinant = (a11 * a22) - (a12 * a21);

    document.getElementById('result').innerText = `Determinan: ${determinant}`;
}