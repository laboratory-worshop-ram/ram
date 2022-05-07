document.addEventListener('DOMContentLoaded', () => {

    const dropdownItem1 = document.querySelectorAll('.dropdown-item1');
    const dropdownItem2 = document.querySelectorAll('.dropdown-item2');
    const dropdownItem3 = document.querySelectorAll('.dropdown-item3');
    const ramItems = document.querySelectorAll('.ram');
    const btnWarning = document.querySelector('.btn-warning');
    const varItems = document.querySelectorAll('.vari');

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

    for (const item of dropdownItem3) {
        item.addEventListener('click', () => {
            dropdownItem3.forEach(item1 => {
                if (item === item1) {
                    item1.classList.add('active');
                } else {
                    item1.classList.remove('active');
                }
            })
        })
    }


    btnWarning.addEventListener('click', () => {
        for (const ram of ramItems) {
            ram.classList.add('hidden');
            dropdownItem1.forEach(item1 => {
                if (!item1.classList.contains('active') && (ram.dataset.module === item1.dataset.module)) {
                    ram.classList.add('hidden');
                } else if (item1.classList.contains('active') && (ram.dataset.module === item1.dataset.module)) {
                    dropdownItem2.forEach(item2 => {
                        if (!item2.classList.contains('active') && (ram.dataset.op === item2.dataset.op)) {
                            ram.classList.add('hidden');
                        } else if (item2.classList.contains('active') && (ram.dataset.op === item2.dataset.op)) {
                            ram.classList.remove('hidden');
                        }
                    })
                }
            })
        }

        for (const vari of varItems) {
            vari.classList.add('hidden');
            dropdownItem3.forEach(item3 => {
                if (!item3.classList.contains('active') && (vari.dataset.vari === item3.dataset.vari)) {
                    vari.classList.add('hidden');
                } else if (item3.classList.contains('active') && (vari.dataset.vari === item3.dataset.vari)) {
                    vari.classList.remove('hidden');
                }
            })
        }
    })

});
