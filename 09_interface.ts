interface IProduct {
    id:number;
    name:string;
    description?:string;
    price:number  // declartion only in interface.
  
}

var objProduct : IProduct = {
    id : 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000 // I have given implementation for IProduct interface
}

// interface IAndroid {
//     id : number;
//     name : string;
//     version? : number;
//     price : number;
// }

let objAndriod : IProduct ={
    id : 1245,
    name : "samsung",
    // version : 4515,
    price : 7800,
}
