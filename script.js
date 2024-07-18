const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const inputInvalid = document.getElementById('input-invalid');
const itemList = document.getElementById('item-list');

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', onClickItem);

function addItem(e) {
    const newItem = itemInput.value;
    e.preventDefault();

    // Validate Input start
    if (newItem == '') {
        inputInvalid.innerText = 'لطفا متن مورد نظر را وارد کنید';
        return;
    } 
    // Validate Input end

    const li = document.createElement('li');
    li.textContent = newItem;
    li.className = 'list-item';
    const icon = document.createElement('i');
    icon.className = 'fa fa-user-times';
    li.appendChild(icon);
    itemList.appendChild(li);
    itemInput.value = '';
}

function onClickItem(e) {
    e.target.parentElement.remove();   
}

// event listeners ------

// -----------------------------------------
// aaaaaaaaaaaaaaaaaaaa
// i am in puya & change  cccccccccccccccccccccccc puya puya puya
// i am in puya & change  cccccccccccccccccccccccc puya2 puya2 puya2
