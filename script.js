document.getElementById('massForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const atomicNumber = parseInt(document.getElementById('atomicNumber').value);
    const neutrons = parseInt(document.getElementById('neutrons').value);
    
    if (isNaN(atomicNumber) || isNaN(neutrons)) {
        document.getElementById('result').textContent = 'Por favor, introduce números válidos.';
        return;
    }

    if (atomicNumber < 1 || neutrons < 0) {
        document.getElementById('result').textContent = 'El número atómico debe ser mayor que 0 y el número de neutrones debe ser no negativo.';
        return;
    }

    const massNumber = atomicNumber + neutrons;

    document.getElementById('result').textContent = `La masa del isótopo con número atómico ${atomicNumber} y ${neutrons} neutrones es ${massNumber} (u).`;
});
