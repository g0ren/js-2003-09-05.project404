class RoadContent {
    constructor(array) {
        if(array !== undefined)
        {
            this.array = array;
        }
        else
        {
            this.array = [];
            for(let i= 0; i < 10; i++){
                this.array[i] = Math.floor(Math.random() * 3);
            }
        }
    }

    get content(){
        return this.array
    }

    get move()
    {
        let array = this.array;
        array.shift();
        array[array.length] = Math.floor(Math.random() * 3);
        return new RoadContent(array)
    }
}
export default RoadContent