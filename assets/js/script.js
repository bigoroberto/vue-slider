const root = new Vue({

  el:'#root',
  

  data:{

    counterSlide:0,
    slider:[
      'assets/img/image1.jpg', // 0
      'assets/img/image2.jpg', // 1
      'assets/img/image3.jpg', // 2
      'assets/img/image4.jpg'  // 3
    ]
    //length: 4
  },
  methods:{
    nextSlide(){
      this.counterSlide++;
      if(this.counterSlide === this.slider.length) this.counterSlide = 0;
      console.log(this.slider.length);
    },
    prevSlide(){
      this.counterSlide--;
      //quando il contatore immagini è minore di 0 ritorna dall'ultima in su
      if(this.counterSlide < 0) this.counterSlide = this.slider.length -1;
      console.log(this.slider.length)
    }
  }

});