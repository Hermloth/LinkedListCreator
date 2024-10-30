import './style.css';

const LinkedListProto = {
    testfunction (){
        console.log(`Test Function Called on ${this.name}!`)
    }

// implement proto methods

}

function CreateListItem (name){
    return Object.create(LinkedListProto, {
        name: {
            value: name
        }
    })
}

const testVar = CreateListItem(`TestObject`);

testVar.testfunction()



