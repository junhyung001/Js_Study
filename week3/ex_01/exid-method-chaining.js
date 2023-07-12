const exidMethodChaining = {
    count: 0,
    up(){
        this.count++;
        return this;
    },
    down(){
        this.count--;
        return this;
    },
    showCount(){ 
        console.log('Count:', this.count);
        return this;
    }
};
  
exidMethodChaining.up().down().up().up().down().up().down().up().up().down().showCount()