const exid = {
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

exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.up();
exid.down();
exid.up();
exid.up();
exid.down();
exid.showCount();