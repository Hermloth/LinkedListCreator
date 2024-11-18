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

// Return Head Node

// Return Tail Node

// Remove Last Element

// Return Node at Index

// Check if value exists (True / False)

//find index of value that exists

}


function LinkedList2 (){
    return Object.create(LinkedListProto2, {
        list:{
            head: null,
            size: 0
        }
    })
}

const LinkedListProto2 = {
    testfunction (){
        console.log(`Test Function Called on ${this.list}!`)
    },

// Add First Element
    AddFirstElement(value, next = this.head){
        this.head = Object.create({
            datapoint: {
                value: value,
                next: next
            }
        })
        if(this.size){
            this.size = this.size + 1;
        } else {
            this.size = 1
        }
        },

        // Add Last Element (Not yet working)
    AddLastElement(value){
        console.log("Add Last Element Called");
        let current;
        let currentnode = this.head.datapoint;
        console.log(currentnode);
        console.log("------")
        if (!currentnode){
            this.head = Object.create({
                datapoint: {
                    value: value,
                    next: null
                }
            })
        } else {
            let newnode = Object.create({
                datapoint: {
                    value: value,
                    next: null
                }
            })
            while (currentnode.next?.datapoint){
                currentnode = currentnode.next.datapoint;
            }
            currentnode.next = newnode;
            //console.log("Last Element Add Test")
            //console.log(currentnode.next.datapoint)
        }
        if(this.size){
            this.size = this.size + 1;
        } else {
            this.size = 1
        }
    },
    
    // Return Size
    ReturnSize(){
        console.log(`Array Length: ${this.size}`);
    },

        // Return list Object as a String
    returnlist(){
        console.log("Return List Function Called");
        let current = this.head.datapoint;
        let itteration = 0
        let finalOutputString = "";
        //console.log(current.data.next);
        while (current) {
            //console.log("--------")
            //console.log(`VALUE INPUT ${itteration}`)
            //console.log(current.value);
            if (finalOutputString == ""){
                finalOutputString = `${itteration}: ${current.value}`
            } else {
                finalOutputString = finalOutputString + `, ${itteration}: ${current.value}`
            }

            //console.log(current.next?.datapoint);
            current = current.next?.datapoint
            itteration++;
        }
        
        //console.log("Final output:");
        console.log(finalOutputString);

        //console.log(this);
    }

    }

    // Manual Tests
    const ll2 = LinkedList2();
    ll2.AddFirstElement("TestValue3")
    ll2.AddFirstElement("TestValue2")
    ll2.AddFirstElement("TestValue1")
    ll2.AddLastElement("TestValue4")
    ll2.returnlist();
    ll2.ReturnSize();
    //console.log(ll2.head)
    //console.log(ll2)