document.addEventListener('DOMContentLoaded', () => {

    const dropdownItem1 = document.querySelectorAll('.dropdown-item1');
    const dropdownItem2 = document.querySelectorAll('.dropdown-item2');
    const dropdownItem3 = document.querySelectorAll('.dropdown-item3');
    const ramItems = document.querySelectorAll('.ram');
    const btnWarning = document.querySelector('.btn-warning');
    const varItems = document.querySelectorAll('.vari');

    const btnRandom = document.querySelector('#random');
    const bankGroup = document.querySelector('.bankGroup');
    const bankItems = document.querySelectorAll('.bank');

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

    btnRandom.addEventListener('click', () => {
        var svgNS = bankGroup.namespaceURI;
        var newCell;
        var width = bankItems[0].width.baseVal.value/8;

        for (let bank of bankItems) {
            let arr = new Array();
            for (let i=0; i < 8; i++) {
              arr[i] = new Array();
              for (let j=0; j < 8; j++){
                arr[i][j]=Math.floor(Math.random()*2);
                newCell = document.createElementNS(svgNS,'rect');
                newCell.setAttribute('x', bank.x.baseVal.value+i*width);
                newCell.setAttribute('y', bank.y.baseVal.value+j*width);
                newCell.setAttribute('width', width);
                newCell.setAttribute('height', width);
                newCell.style.stroke = '#4D4D60';
                newCell.style.strokeWidth = '1';
                if (arr[i][j] === 0) {
                    newCell.style.fill = 'rgb(54, 162, 235)';
                } else {
                    newCell.style.fill = 'rgb(255, 99, 132)';
                }
                bankGroup.appendChild(newCell);
              }
            }
        }

    })

});
