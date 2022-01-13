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
          "image":"images/Apple/Iphone11/Iphone11-y.png",
      },
      {
          "id":"2",
          "name": "Iphone 12",
          "price": "789",
          "description": "Iphone 11 White, 64 GB",
          "image":"images/Apple/Iphone11/Iphone12-p.png",
      },
      {
          "id":"3",
          "name": "Iphone 13",
          "price": "900",
          "description": "Iphone 11 Yellow, 256 GB",
          "image":"images/Apple/Iphone11/Iphone13-p.png",
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