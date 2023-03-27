class Node {
    constructor(_value){
        this.value = _value;
        this.node = document.createElement('button');
        this.node.innerHTML = this.value;

    }
    displayNode(){
        console.log(this.node);
        return this.node;
    }
}
class letter extends Node{

}
class character extends Node{
    // constructor() {
        
    // }
}
class deleteNode extends Node{

}
class spaceNode extends Node {
    // constructor(_value){
    //     this.value = _value;
    //     this.node = document.createElement('button');
    //     this.node.innerHTML = " ";

    // }
}
class enterNode extends Node{

}
class capslockNode extends Node{

}
class switchLetter extends Node{

}
class switchCharacter extends Node{
   
}
class sendNode extends Node {

}
