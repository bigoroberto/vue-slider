const root = new Vue({

  el:'#root',
  

  data:{

    counterSlide:0,
    slider:[
      'assets/img/image1.jpg',
      'assets/img/image2.jpg',
      'assets/img/image3.jpg',
      'assets/img/image4.jpg'
    ]
  },
  methods:{
    nextSlide(){
      this.counterSlide++;
      if(this.counterSlide === slider.length) this.counterSlide= 0;
    },
    prevSlide(){
      this.counterSlide--;
      //quando il contatore imamgini è minore di 0 ritorna dall'ultima in su
      if(this.counterSlide < 0) this.counterSlide = immagini.length;
    }
  }

});