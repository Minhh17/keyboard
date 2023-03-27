class Buffer {
    constructor() {
        this.content = '';
    }
    addToBuffer(addItem) {
        this.content += addItem;
        console.log(this.addItem);
        let inputBuffer = document.getElementById('buffer');
        inputBuffer.value = this.content;
    }
}