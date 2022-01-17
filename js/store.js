 Vue.component('products-list', {
     props:['products'],
     template: `<ul>
     <li v-for="product in products">
         <img :src="product.image">
         <h1>{{product.name}}</h1>
         <p>{{product.description}}</p>
         <p>{{product.price}} $</p>
         <button id="addToBag" @click="$emit('add-to-bag-event', product)">Add to bag</button>
     </li>
   </ul>`
 }

 )
 
 new Vue({
  el:'#products',
  data: {
      productsArray: [{
          "id":"1",
          "name": "Iphone 11",
          "price": "779",
          "description": "Iphone 11 Black, 64 GB",
          "image":"images/Apple/Iphone/Iphone11-y.png",
      },
      {
          "id":"2",
          "name": "Iphone 12",
          "price": "789",
          "description": "Iphone 12 Purple, 64 GB",
          "image":"images/Apple/Iphone/Iphone12-p.png",
      },
      {
          "id":"3",
          "name": "Iphone 13",
          "price": "1100",
          "description": "Iphone 13 Pink, 256 GB",
          "image":"images/Apple/Iphone/Iphone13-p.png",
      },
      {
        "id":"4",
        "name": "Iphone 13 Pro",
        "price": "1299",
        "description": "Iphone 13 Pro Blue, 256 GB",
        "image":"images/Apple/Iphone/Iphone13-pro.png",
    }, 
    {
        "id":"5",
        "name": "Samsung Galaxy Z Fold 3",
        "price": "1299",
        "description": "Samsung Galaxy Z Fold 3 5G",
        "image":"images/Samsung/samsung-z-fold-3.png",
    },
    {
        "id":"6",
        "name": "Xiaomi Mi 11 Ultra",
        "price": "1119",
        "description": "Mi 11 Ultra 128 GB Ceramic Black",
        "image":"images/Xiaomi/xiaomi-mi-11-ultra.png",
    }, 
    {
        "id":"7",
        "name": "Xiaomi Mi 11",
        "price": "959",
        "description": "Mi 11 5G 128 GB Midnight Grey",
        "image":"images/Xiaomi/xiaomi-mi-11.png",
    }, 
    {
        "id":"8",
        "name": "Xiaomi 10 Pro",
        "price": "829",
        "description": "Mi 10 Pro 128 GB Solstice Grey",
        "image":"images/Xiaomi/xiaomi-10-pro.png",
    }, 
    {
        "id":"9",
        "name": "Iphone 11",
        "price": "659",
        "description": "Iphone 11 Black, 128 GB",
        "image":"images/Apple/Iphone/iphone11-bl.png",
    }, 
    {
        "id":"10",
        "name": "Iphone 11",
        "price": "699",
        "description": "Iphone 11 Green, 128 GB",
        "image":"images/Apple/Iphone/iphone11-gr.png",
    }, 
    {
        "id":"11",
        "name": "Iphone 11",
        "price": "729",
        "description": "Iphone 11 White, 128 GB",
        "image":"images/Apple/Iphone/iphone11-wh.png",
    }, 
    {
        "id":"12",
        "name": "Iphone 12",
        "price": "799",
        "description": "Iphone 12 Black, 128 GB",
        "image":"images/Apple/Iphone/iphone12-bk.png",
    }, 
    {
        "id":"13",
        "name": "Iphone 12",
        "price": "879",
        "description": "Iphone 11 Red, 128 GB",
        "image":"images/Apple/Iphone/iphone12-red.png",
    }, 
    {
        "id":"14",
        "name": "Iphone 11",
        "price": "969",
        "description": "Iphone 11 White, 128 GB",
        "image":"images/Apple/Iphone/iphone12-wh.png",
    }, 
    {
        "id":"15",
        "name": "Iphone 13 Pro",
        "price": "1299",
        "description": "Iphone 13 Pro Pink, 128 GB",
        "image":"images/Apple/Iphone/iphone13-pro-p.png",
    }, 
      ],
      value: 0,
      totalBagValue: [],
      productsSearch:""
  },
  methods: {
    addToBag(product){
        return this.totalBagValue.push(product)
    },
    searchProducts(product){ 
        return this.productsArray.push(product)
    }
  },
  computed: {
      filter(){
          return this.productsArray.filter(item => Number(item.price) < this.value)
      },
      filterProductsByName(){
          if (this.productsSearch.length > 3){
            return this.productsArray.filter(product => product.name.toLowerCase().includes(this.productsSearch.toLowerCase()))
          }else {
            return this.productsArray.filter(item => Number(item.price) < this.value)

          } 
      },
      numberOfProducts(){
          return this.filter.length ? 'Show ' + this.filter.length + ' products' : 'No products find'
      },
      totalBagAmount() {
          return this.totalBagValue.reduce((inc,item) => inc + Number(item.price), 0)
      }

  }
})