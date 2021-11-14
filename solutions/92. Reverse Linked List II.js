        head=head.next;
        
    }
    [begin,middle,end]
        .filter((el)=>{return el!=null})
        .forEach((el)=>{
            result=insertListIntoList(result,el);
            
        });
    return result;
};
let insertListIntoList=(head,list)=>{
    if (head==null){
        return list;
    }
    let current = head;
    while(current.next != null){
        current = current.next;
    }
    current.next = list;
    return head; 
}
let insertValIntoList=(head,val)=>{
    if (head==null){
        return new ListNode(val);
    }
    
    let current = head;
    while(current.next != null){
        current = current.next;
    }
    
    current.next = new ListNode(val);
    return head;
}
