console.log('ml5 version:', ml5.version);

function setup(){
    noCanvas();
    /*const data =tf.tensor([1, 2, 3, 4]);
    data.print();
    console.log(data);*/
    const values = [];
    const values2 = [];
    const values3 = [];
    const values4 = [];
    for(let i =0; i<30; i++)
    {
        values[i]=random(0,100);
        values2[i]=random(0,100);
    }
    for(let i =0; i<15; i++)
    {
        values3[i]=random(0,100);
        values4[i]=random(0,100);
    }
    const shape =[2,5,3];
    const tense =tf.tensor(values,shape,'int32');
    //console.log(tense.toString()) ;
    console.log(tense.get(0));
    console.log(tense.dataSync());
   /* tense.data().then(function(stuff){
        console.log(stuff);
    })*/ //就是這個console.log(tense.dataSync);的意思

    /*const a=tf.tensor(values,shape,'int32');
    const b=tf.tensor(values2,shape,'int32');

    const c=a.add(b);
    console.log(c.toString());*/ //operation矩陣的加法

    const shapeA=[5,3];
    const shapeB=[3,5];

    const a=tf.tensor(values3,shapeA,'int32');
    const b=tf.tensor(values4,shapeB,'int32');

    const c=tf.matMul(a,b);

    console.log(c.toString());
/* 或者可以用這個方式transpose
    const shape=[5,3];

    const a=tf.tensor(values,shape,'int32');
    const b=tf.tensor(values2,shape,'int32');
    const bb=b.transpose;

    const c=tf.matMul(a,b);
    console.log(c.toString());

    */

}