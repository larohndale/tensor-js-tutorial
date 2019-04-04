console.log('Hello TensorFlow');

//  Get the car data reduced to jsut the variables we are interested in and cleaned of the missing data.

async function getData() {
    const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataReq.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.horsepower != null));

    return cleaned;
}

async function run() {
    // Load and plot the original input data that we are going to train on.
    const data = await getData();
    const values = data.map(d => ({
        x: d.horsepower,
        y: d.mpg,
    }));

    tfvis.render.scatterplot(
        {name: 'Horsepower v MPG'},
        {values},
    {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
        height: 300
    }
    );
}

function createModel() {
    // Create a sequential model
    const model = tf.sequential();

    // Add a single hidden layer
    model.add(tf.layter)
}

    document.addEventListener('DOMContentLoaded', run);