
const products = [
    { name: "Laptop", price: 200000, category: "Electronics" },
    { name: "Phone", price: 150000, category: "Electronics" },
    { name: "Table", price: 10000, category: "Furniture" },
    { name: "Chair", price: 1000, category: "Furniture" },
    { name: "Headphones", price: 15000, category: "Electronics" },
    { name: "Shoes", price: 25000, category: "Clothing" },
    { name: "Jacket", price: 12000, category: "Clothing" },
    { name: "Watch", price: 5000, category: "Accessories" },
    { name: "Bottle", price: 3000, category: "Accessories" },
    { name: "Sofa", price: 60000, category: "Furniture" }
  ];
  
  
  products.push({name:"Desk", price:30000, category:"furniture"});
  console.log("products:", products);
  
  
  const productsNamee= products.find(products=>products.name==="watch");
  console.log("productsNamee:", productsNamee);
  
  
  const productsName= products.map(products=>products.name);
  console.log("productsName:",productsName);
  
  
  const productsPrice= products.filter(products=>products.price>100);
  console.log("ProductsPrice:", productsPrice);
  
  
  products.forEach(product => {
    console.log(`Product: ${product.name}, Price: ${product.price}`);
  });
  
  
  const Totalcost= products.reduce((sum, products)=>sum+products.price,0);
  console.log("Totalcost:", Totalcost);