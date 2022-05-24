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
    const formDiv = document.querySelector('.rowcol');
    const row = document.querySelector('#row');
    const col = document.querySelector('#col');
    const buffer = document.querySelector('.buffer');
    const chartBox = document.querySelector('.chartBox');

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
                            if (item2.dataset.op !== 'r') {
                                chartBox.classList.add('hidden');
                            } else {
                                chartBox.classList.remove('hidden');
                            }
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
        let arr;
        if (bankGroup.classList.contains('empty')) {
            bankGroup.classList.remove('empty');
            var svgNS = bankGroup.namespaceURI;
            var newCell;
            var width = bankItems[0].width.baseVal.value/8;
            formDiv.classList.remove('hidden');

            for (let x=0; x<8; x++) {
                arr = new Array();
                for (let i=0; i < 8; i++) {
                  arr[i] = new Array();
                  for (let j=0; j < 8; j++){
                    arr[i][j]=Math.floor(Math.random()*2);
                    newCell = document.createElementNS(svgNS,'rect');
                    newCell.setAttribute('x', bankItems[x].x.baseVal.value+i*width);
                    newCell.setAttribute('y', bankItems[x].y.baseVal.value+j*width);
                    newCell.setAttribute('width', width);
                    newCell.setAttribute('height', width);
                    newCell.setAttribute('class', 'cell ' + x + '' + i + '' + j);
                    newCell.style.stroke = '#4D4D60';
                    newCell.style.strokeWidth = '1';
                    if (arr[i][j] === 0) {
                        newCell.style.fill = '#37B6CE';
                    } else {
                        newCell.style.fill = '#FE7276';
                    }
                    bankGroup.appendChild(newCell);
                  }
                }
            }
        } else {
            var cell;
            for (let x=0; x<8; x++) {
                arr = new Array();
                for (let i=0; i < 8; i++) {
                  arr[i] = new Array();
                  for (let j=0; j < 8; j++){
                    arr[i][j]=Math.floor(Math.random()*2);
                    cell = document.getElementsByClassName('cell ' + x + '' + i + '' + j)[0];
                    if (arr[i][j] === 0) {
                        cell.style.fill = '#37B6CE';
                    } else {
                        cell.style.fill = '#FE7276';
                    }
                  }
                }
            }
        }
    })

    const form = document.querySelector('.needs-validation');
    form.addEventListener('submit', event => {
        var cell;
        var cells = [];
        if (row.value>=0 && row.value<=7 && col.value>=0 && col.value<=7) {
            for (let item of document.getElementsByClassName('cell')) {
                item.style.stroke = '#4D4D60';
                item.style.strokeWidth = '1';
            }
            for (let i = 0; i < 8; i++) {
                cell = document.getElementsByClassName('cell ' + i + '' + row.value + '' + col.value)[0];
                cell.style.stroke = 'rgb(255, 205, 86)';
                cell.style.strokeWidth = '3';
                cells.push(cell);
            }
            var svgNS = bankGroup.namespaceURI;
            var newCell;
            var width = buffer.width.baseVal.value/8;
            if (buffer.classList.contains('empty')) {
                buffer.classList.remove('empty');
                for (let i = 0; i < 8; i++) {
                    newCell = document.createElementNS(svgNS,'rect');
                    newCell.setAttribute('x', buffer.x.baseVal.value+i*width);
                    newCell.setAttribute('y', buffer.y.baseVal.value);
                    newCell.setAttribute('width', width);
                    newCell.setAttribute('height', width);
                    newCell.setAttribute('class', 'bufferCell');
                    newCell.style.stroke = '#4D4D60';
                    newCell.style.strokeWidth = '1';
                    newCell.style.fill = cells[i].style.fill;
                    bankGroup.appendChild(newCell);
                }
            } else {
                var bufferCell;
                for (let i = 0; i < 8; i++) {
                    bufferCell = document.getElementsByClassName('bufferCell')[i];
                    bufferCell.style.fill = cells[i].style.fill;
                }
            }
            
        } else {
            alert ('Введите значение от 0 до 7!')
        }
        event.preventDefault();
        event.stopPropagation();
        form.classList.add('was-validated')
    }, false);

    const groupItems = document.querySelectorAll('.group');
    const detailed = document.querySelector('.detailed');
    for (let item of groupItems) {
        item.addEventListener('click', () => {
            detailed.classList.remove('hidden');
        })
    }

    const detailform = document.querySelector('.detailform');
    const detailcells = document.querySelectorAll('.detailcell');
    detailform.addEventListener('submit', event => {
        if (bits.checkValidity()) {
            for (let i=0; i < 16; i++) {
                if (bits.value[i] === '1') {
                    detailcells[i].setAttribute('href', 'img/onecell.png');
                }
            }
        } else {
            alert ('Введите бинарную строку длиной 16 бит!')
        }
        event.preventDefault();
        event.stopPropagation();
    }, false);

});
