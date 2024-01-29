/* Question:
1. A user enter the text
2. Total Charaters start counting the user text
3. The reaminging, we set maxlength 50, so the remaining start to minus */

/* Solution:
1. getElementById
2. addEventListener to textbook by using keyup(when the key is released)
3. crate function countupdate:
    - to get length in textbox
    - use getattribute to get maxlength and minus textbox to get remain.
*/

const textboxEl = document.getElementById('textbox');
const totalEl = document.getElementById('total');
const remainingEl = document.getElementById('remaining');

countUpdate();

textboxEl.addEventListener("keyup", () => {
    countUpdate();
});

function countUpdate() {
    totalEl.innerText = textboxEl.value.length;
    remainingEl.innerText = textboxEl.getAttribute("maxlength") - textboxEl.value.length
}





