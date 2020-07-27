let reverseList = function (head) {
  let box = null;
  let next = null;
  while (head !== null) {
    //head 가 null 이 아니면
    //new ListNode 를 하나 생성해서 head에 담겨있는 [1,2,3,4,5] 값을 하나씨 순차적으로 넣어준다 1,2,3,4,5 이렇게
    box = new ListNode(head.val);
    box.next = next;
    //next 변수에 있는 값을 box.next 에 넣어준다
    //즉, box.next 나 next 나 같은 값이 나온다  next 가 null 이면 box.next 도 null ~
    next = box;
    //box 에 있는 값을 next 에 넣어준다
    head = head.next;
    //그리고 head.next 에 있는값을 다시 ㅗ
  }
  return box;
};
