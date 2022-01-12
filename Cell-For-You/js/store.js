var app = new Vue({
  el:'#products',
  data: {
      productsArray: [{
          "id":"1",
          "name": "Iphone 11",
          "price": "3699",
          "description": "Iphone 11 Black, 64 GB",
          "image":"images/Apple/Iphone11/iph11.png",
      },
      {
          "id":"2",
          "name": "Iphone 11",
          "price": "3999",
          "description": "Iphone 11 White, 64 GB",
          "image":"images/Apple/Iphone11/iph11-wh.png",
      },
      {
          "id":"3",
          "name": "Iphone 11",
          "price": "7599",
          "description": "Iphone 11 Yellow, 256 GB",
          "image":"images/Apple/Iphone11/iph11-y.png",
      }
      ],
      value: 0
  },
  computed: {
      filter(){
          this.products.filter(item => item.price < this.value)
      }
  }
})