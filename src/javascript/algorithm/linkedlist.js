


function put(value, linkedlist) {
  let list = {
    'value':value,
    'prev':linkedlist[linkedlist.length-1],
    'next':linkedlist[0]
  }
  if (linkedlist.length > 0) {
    linkedlist[linkedlist.length-1].next = list;
  }
  linkedlist.push(list);
  linkedlist[0].prev = linkedlist[linkedlist.length-1];
  return linkedlist;
}

let list = [];
list = put(2,list);
list = put(6,list);
list = put('helo',list);

list.filter(node => node.next !== undefined).forEach(node=> console.log(node.next.value));
console.log(list);
