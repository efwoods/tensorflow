// const shape = [4,2];

// const data = tf.tensor([4,6,5,9,13,25,1,57],shape);

// //set variables
// const data2 = tf.variable(tf.zeros([8]));

// //print the data
// data2.print();

// // this is where we assign new values with 1 dimension (1 row)
// data2.assign(tf.tensor1d([4,12,5,6,56,3,45,3]));
// data2.print();

// const data3 = tf.tensor1d([4,6,5,9]);
// const data4 = tf.tensor1d([5,4,23,45]);

// data3.print();
// data4.print();

// // add and multiplies and prints
// data3.add(data4).print();
// data3.mul(data4).print();


// define my function
function simpleAdd(input1, input2) {
    // tidy is used to free up GPU memory once 
    // the function returns
    return tf.tidy(()=> {
        const x1 = input1;
        const x2 = input2;
        const y = x1.add(x2);
        return y;
    });
}

const data5 = tf.tensor1d([4,6,5,9]);
const data6 = tf.tensor1d([5,4,34,21]);

// using the model to do some input
const result = simpleAdd(data5, data6);

// printing the result
result.print();

// sequential model
const model = tf.sequential();
model.add(
    tf.layers.simpleRNN({
        // only needed first layer
        inputShape: [20, 4],
        // the number of units or neurons
        units: 20,
        // weight
        recurrentInitializer: 'GlorotNormal',
    })
);

