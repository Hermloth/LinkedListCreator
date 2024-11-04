import './style.css';


function LinkedList (){
    return Object.create(LinkedListProto, {
        value: {
            head: null,
            size: 0
        }
    })
}

const LinkedListProto = {
    testfunction (){
        console.log(`Test Function Called on ${this.value}!`)
    },

// Add First Element (Not working right)
    AddFirstElement(value, next = null){
        this.head = Object.create({
            value: {
                value: value,
                next: next
            }
        })
        this.size++;
    },

// Add Last Element
    AddLastElement(value){
        let current;
        if (!this.head){
            this.head = Object.create({
                value: {
                    value: value,
                    next: null
                }
            })
        } else {
            let node = Object.create({
                value: {
                    value: value,
                    next: null
                }
            })
            //////// Currently adds next property to head, needs to add to last created object
            this.head.next = node;
            this.size++;
        }
    },
// Return Size
    ReturnSize(){
        console.log(this.size);
    },
// Return Head Node

// Return Tail Node

// Return Node at Index

// Remove Last Element

// Check if value exists (True / False)

//find index of value that exists

// Return list Object as a String
    returnlist (){
        let current = this.head;
/*        while (current) {
            console.log(current.value);
            console.log(current.next);
        }        
  */      
        console.log(this);
    }
}

const ll = LinkedList();

ll.AddFirstElement(`TestObject1`);
ll.AddFirstElement(`TestObject2`);
//ll.AddLastElement(`TestObject3`);
//console.log(ll);
ll.returnlist();
//const testVar = LinkedList(`TestObject`);
//testVar.returnlist();
//console.log(testVar)



