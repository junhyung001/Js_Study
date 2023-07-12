// in dynamicType.js
const dynamicType = {
    value: undefined,
    type: undefined,

    put: function(input){
        if (this.type === undefined){
            this.value = input;
        }
    },

    change: function(input){
        if (this.type === undefined){
            this.type = input
            switch(input){
                case 'String':
                    this.value = String(this.value);
                    break;
                case 'Number':
                    this.value = Number(this.value);
                    break
                case 'Object':
                    this.value = {data : this.value};
                    break;
                case 'Array':
                    this.value = [this.value];
                    break;
                default:
                    break;
            }
        }
    },

    printType: function(input){
        console.log(this.value, typeof this.value);
    },
}

dynamicType.put('42');
dynamicType.change('String');
dynamicType.printType(); // 42, String