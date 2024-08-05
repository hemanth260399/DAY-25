<h1>Day-25 Shopping Cart task</h1>
<ul>
  <li>I have created the shopping Cart in this task and i use react router to split in different url and in home page it shows all the product details and add to cart button and top left corner there is cart button when you add the product in the cart the count will increase </li>
  <li>When you click the cart link it show the product added in the cart in there it show product image,name,description and qty input and remove button and price</li>
  <li>In this task i mainly used context api to avoid propsdrilling i created the create context in app.jsx and set value in provider and send the data to all the child and grand child  </li>
  <li>In create context api i send values like add to cart function,remove from cart function and product data added in the cart and it shored in usestate that usestate data also shared to show the content in the cart page </li>
  <li>Add to cart and remove from cart are used in product page and usestate data and remove from cart function is used in cart page i mainly not use propsdrilling</li>
  <li>In the i used another function to increase the product it will automatically change the qty price and total price for this i have used usestate and store a id pf the product with qty piece incraese by getting e.target.value by this i can specify the product qty and then i have created caltotal function and pass the whole product data and speperate the product id and use as index value to find the which product in the qtypiece  and then i get product price from the value getting data then i multiple the price and qty and i shown in the price place if the input is not changed means the value is 1 i have set default</li>
  <li>For total i have use reduce function add price in this if usestate redener the total execute and calcualte the total i set inital vaue as 0 caltotal function execute and all product will get all price of product will added and shown in the total area </li>
</ul>
