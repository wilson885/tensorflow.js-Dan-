//this is the model
const model = tf.sequential();

//create the hidden layer
const hidden = tf.layers.dense({ //dense is full connected layer
    units:4, //number of nodes
    inputShape:[2], //input shape
    activation:'sigmoid'
});

model.add(hidden);

//add the layer
const output = tf.layers.dense({
    units:1,
    // shape inferred from the previous layer
    activation:'sigmoid'
});

model.add(output);

const sgdOpt = tf.train.sgd(0.1);

model.compile({
    optimizer: sgdOpt,
    loss: 'meanSquaredError'
});

const xs = tf.tensor2d([
    [0,0],
    [0.5,0.5],
    [1,1] 
]);

const ys =tf.tensor2d([
    [1],
    [0.5],
    [0]
]);

/*const config={
    epochs:100  
}*/
train().then (()=>{
    console.log("training complete")
    let outputs=model.predict(xs);
    outputs.print(); 
});

async function train(){
    for(let i=0; i<100; i++){
        const conifg = {
            shuffle: true,
            epochs: 10
        } 

        const response = await model.fit(xs,ys);
        console.log(response.history.loss[0]);
    }
}

//model.fit(xs,ys).then((response) => console.log(response.history.loss[0])) ;

/*
let outputs = model.predict(inputs);
outputs.print();*/


