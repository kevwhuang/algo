// 3062 - Winner of the Linked List Game

function gameResult(head) {
    let even = 0, odd = 0;
    while (head) {
        head.val > head.next.val ? even++ : odd++;
        head = head.next.next;
    }
    return even === odd ? 'Tie' : even > odd ? 'Even' : 'Odd';
}
