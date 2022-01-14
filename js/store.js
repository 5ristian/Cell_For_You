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
    }
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