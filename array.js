function onClickIncludes(){
    var ar = ["apple", "banana", "lemmon"];
    let fruit = "bananas";

    if (ar.includes(fruit)){
        alert(`tem ${fruit}`);
    }
    else{
        alert(`não tem ${fruit}`);
    }


}

function onClickShift(){
    var f = ["apple", "banana", "lemmon"];
    var a = f.shift(f);
    var msg =  `The first item in array is ${a}`;
    alert(msg);

}

function onClickUnShift(){
    var num = [1,2,3,4];
    num.unshift(0);
    num.forEach(element => {
       alert(element) 
    });
}
function onSplice_replace(){
    var a = ['A','L','A','S','K','A'];
    console.log("Before Splice:");
    a.forEach(n => console.log(n));
    a.splice(3,2,'B','M','A');
    console.log("After Splice:");
    a.forEach(n => console.log(n));
    alert("Veja o resultado no console");

}

function onJoin(){
    var f = ["apple", "banana", "lemmon"];
    var m = `The fruits are: ${f.join(" and ")}`;
    alert(m);
}

function onSeta1(){
    var fr=[];
    var f=[];
    f.name="apple";
    f.price=10;
    fr.push(f);

    f=[];
    f.name = "banana";
    f.price= 2;
    fr.push(f);

    let nameOf = (item) => {return item.name};
    let priceOf = (item) => {return item.price};

    let msg = `the first name is ${nameOf(fr[0])} \r\n the first price is ${priceOf(fr[0])} `;
    alert(msg);

    msg = `the second name is ${nameOf(fr[1])} \r\n the second price is ${priceOf(fr[1])} `;
    alert(msg);
}

function onMap(){
    let num=[
        1,2,3
    ].map((n) => {
        return n * 2
    });

    alert(num);

}

function onReduce(){
    let num = [1,2,3];
    let r = num.reduce((s, n) => {
        return s + n ;
    },100 )
    alert(r);
}

