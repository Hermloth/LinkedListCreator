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

// Add First Element
    AddFirstElement(value, next = this.head){
        this.head = Object.create({
            data: {
                value: value,
                next: next
            }
        })
        this.size = this.size+1;
    },

// Add Last Element (Not yet working)
    AddLastElement(value){
        var currentnode = this.head["data"]
        if (!this.head){
            this.head = Object.create({
                data: {
                    value: value,
                    next: null
                }
            })
        } else {
            let newnode = Object.create({
                value: {
                    value: value,
                    next: null
                }
                
            })
            console.log("DEBUG " + currentnode.next)
            //this.head["data"].next
            while (currentnode.next){
                currentnode = currentnode.next
                console.log("DEBUG2" + currentnode.next)
            }
            currentnode.next = newnode
            this.size++;
        }
        this.size = this.size+1;
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
ll.AddLastElement(`TestObject3`);
//console.log(ll);
ll.returnlist();
//const testVar = LinkedList(`TestObject`);
//testVar.returnlist();
//console.log(testVar)



