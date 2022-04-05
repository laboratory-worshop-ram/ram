document.addEventListener('DOMContentLoaded', () => {

    const dropdownItem1 = document.querySelectorAll('.dropdown-item1');
    const dropdownItem2 = document.querySelectorAll('.dropdown-item2');
    const ramItems = document.querySelectorAll('.ram');
    const btnWarning = document.querySelector('.btn-warning');

    for (const item of dropdownItem1) {
        item.addEventListener('click', () => {
            dropdownItem1.forEach(item1 => {
                if (item === item1) {
                    item1.classList.add('active');
                } else {
                    item1.classList.remove('active');
                }
            })
        })
    }

    for (const item of dropdownItem2) {
        item.addEventListener('click', () => {
            dropdownItem2.forEach(item1 => {
                if (item === item1) {
                    item1.classList.add('active');
                } else {
                    item1.classList.remove('active');
                }
            })
        })
    }

    for (const ram of ramItems) {
        btnWarning.addEventListener('click', () => {
            dropdownItem1.forEach(item => {
                if (!item.classList.contains('active') && (ram.id === item.id)) {
                    ram.classList.add('hidden');
                } else if (item.classList.contains('active') && (ram.id === item.id)) {
                    ram.classList.remove('hidden');
                }
            })
        })
    }

});