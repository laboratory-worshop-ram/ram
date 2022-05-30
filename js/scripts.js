const initSimultaneousAccessModel = () => {
  const prefix = "SA";
  const getElementById = (id) => document.getElementById(`${prefix}_${id}`);

  const button = getElementById("submit");
  const random = getElementById("random");

  const initInputs = (prefix) => (callback) => {
    const col = getElementById(`${prefix}-col`);
    const row = getElementById(`${prefix}-row`);
    let value = [0, 0];
    col.value = 0;
    row.value = 0;
    col.addEventListener("input", (e) => {
      value[0] = Math.min(7, Math.max(0, Number(e.target.value ?? 0)));
      e.target.value = value[0];
      callback(value);
    });
    row.addEventListener("input", (e) => {
      value[1] = Math.min(7, Math.max(0, Number(e.target.value ?? 0)));
      e.target.value = value[1];
      callback(value);
    });
  };

  const renderCell = (x, y, width, namespace, value) => {
    const newCell = document.createElementNS(namespace, "rect");
    newCell.setAttribute("x", x);
    newCell.setAttribute("y", y);
    newCell.setAttribute("width", width);
    newCell.setAttribute("height", width);
    newCell.setAttribute("class", "bufferCell");
    newCell.style.stroke = "#4D4D60";
    newCell.style.strokeWidth = "1";
    newCell.style.fill = value ? "#FE7276" : "#ffffff";
    return newCell;
  };

  const initWriteBuffer = (callback) => {
    const buffer = getElementById("write-buffer");
    const group = getElementById("write-buffer-group");
    var namespace = buffer.namespaceURI;

    const createCell = (x, y, width, callback) => {
      let value = false;
      const newCell = renderCell(x, y, width, namespace, value);
      newCell.addEventListener("click", (e) => {
        value = !value;
        e.target.style.fill = value ? "#FE7276" : "#ffffff";
        callback?.(value);
      });
      group.appendChild(newCell);
    };

    const width = buffer.width.baseVal.value / 8;
    const x = buffer.x.baseVal.value;
    const y = buffer.y.baseVal.value;

    const callValues = [...Array(8)].fill(false);

    callValues.forEach((_, index) => {
      createCell(x + index * width, y, width, (cellValue) => {
        callValues[index] = cellValue;
        callback(callValues);
      });
    });
  };

  const createRandomMemory = () => {
    const createMemoryBank = () => {
      return [...Array(8)].map(() =>
        [...Array(8)].map(() => Math.floor(Math.random() * 2) == 1)
      );
    };
    return [...Array(8)].map(createMemoryBank);
  };
  let memory = createRandomMemory();
  const readMemoryCell = (bank, x, y) => memory[bank][x][y];
  const writeMemoryCell = (bank, x, y, value) => (memory[bank][x][y] = value);

  const writeColorHighlight = "#1B4079";
  const readColorHighlight = "#000000";

  const isMatchingAddress = (a, b) => a[0] == b[0] && a[1] == b[1];

  const renderMemoryCells = (readAddres, writeAddres) => {
    const bankgroup = getElementById("bankgroup");
    const banks = Array.from(bankgroup.querySelectorAll(".bank1"));
    const namespace = bankgroup.namespaceURI;
    const cellClassName = `${prefix}-bank-cell`;
    const existingCells = Array.from(
      bankgroup.querySelector("." + cellClassName) ?? []
    );
    existingCells.forEach((cell) => cell.remove());

    banks.forEach((bank, index) => {
      const width = bank.width.baseVal.value / 8;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const memoryvalue = readMemoryCell(index, i, j);
          newCell = document.createElementNS(namespace, "rect");
          newCell.setAttribute("x", bank.x.baseVal.value + i * width);
          newCell.setAttribute("y", bank.y.baseVal.value + j * width);
          newCell.setAttribute("width", width);
          newCell.setAttribute("height", width);
          newCell.setAttribute("class", cellClassName);
          newCell.style.stroke = "#4D4D60";
          newCell.style.strokeWidth = "1";
          if (isMatchingAddress([i, j], readAddres)) {
            newCell.style.stroke = readColorHighlight;
            newCell.style.strokeWidth = "3";
            newCell.style.zIndex = 100;
          }
          if (isMatchingAddress([i, j], writeAddres)) {
            newCell.style.stroke = writeColorHighlight;
            newCell.style.strokeWidth = "3";
            newCell.style.zIndex = 100;
          }

          newCell.style.fill = memoryvalue ? "#FE7276" : "#FFF";

          bankgroup.appendChild(newCell);
        }
      }
    });
  };

  const renderReadBuffer = (data = [...Array(8)].fill(false)) => {
    const buffer = getElementById("read-buffer");
    const group = getElementById("read-buffer-group");
    var namespace = buffer.namespaceURI;
    const width = buffer.width.baseVal.value / 8;
    const x = buffer.x.baseVal.value;
    const y = buffer.y.baseVal.value;
    data.forEach((value, index) => {
      const cell = renderCell(x + index * width, y, width, namespace, value);
      group.appendChild(cell);
    });
  };

  const initReadInputs = initInputs("read");
  const initWriteInputs = initInputs("write");

  let writeAddres = [0, 0];
  let readAddres = [0, 0];
  let writeBuffer = [...Array(8)].fill(0);

  initWriteBuffer((value) => (writeBuffer = [...value]));
  initReadInputs((value) => {
    readAddres = [...value];
    renderMemoryCells(writeAddres, readAddres);
  });
  initWriteInputs((value) => {
    writeAddres = [...value];
    renderMemoryCells(writeAddres, readAddres);
  });

  const readToBuffer = () =>
    [...Array(8)].map((_, index) =>
      readMemoryCell(index, readAddres[0], readAddres[1])
    );
  const writeFromBuffer = () =>
    [...writeBuffer]
      .reverse()
      .forEach((value, index) =>
        writeMemoryCell(index, writeAddres[0], writeAddres[1], value)
      );
  renderMemoryCells(writeAddres, readAddres);
  renderReadBuffer();

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (isMatchingAddress(readAddres, writeAddres)) {
      // alert("Так нельзя! 😡");
      return;
    }

    writeFromBuffer();
    const readBuffer = readToBuffer();
    renderReadBuffer(readBuffer);
    renderMemoryCells(writeAddres, readAddres);
  });

  random.addEventListener("click", (e) => {
    e.preventDefault();
    memory = createRandomMemory();
    renderMemoryCells(writeAddres, readAddres);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initSimultaneousAccessModel();

  const dropdownItem1 = document.querySelectorAll(".dropdown-item1");
  const dropdownItem2 = document.querySelectorAll(".dropdown-item2");
  const dropdownItem3 = document.querySelectorAll(".dropdown-item3");
  const ramItems = document.querySelectorAll(".ram");
  const btnWarning = document.querySelector(".btn-warning");
  const varItems = document.querySelectorAll(".vari");
  const dropdown1 = document.querySelector(".dropdown1");
  const dropdownMenuButton1 = document.querySelector("#dropdownMenuButton1");
  const dropdownMenuButton2 = document.querySelector("#dropdownMenuButton2");

  const btnRandom = document.querySelector("#random");

  const bankGroup = document.querySelector(".bankGroup");
  const bankGroup1 = document.querySelector(".bankGroup1");
  const bankItems = document.querySelectorAll(".bank");
  const bankItems1 = document.querySelectorAll(".bank1");
  const formDiv = document.querySelector(".rowcol");
  const formDiv1 = document.querySelector(".rowcol1");
  const row = document.querySelector("#row");
  const col = document.querySelector("#col");
  const row1 = document.querySelector("#row1");
  const col1 = document.querySelector("#col1");
  const buffer = document.querySelector(".buffer");
  const buffer1 = document.querySelector(".buffer1");
  const chartBox = document.querySelector(".chartBox");

  for (const item of dropdownItem1) {
    item.addEventListener("click", () => {
      dropdownItem1.forEach((item1) => {
        if (item === item1) {
          item1.classList.add("active");
          dropdownMenuButton1.textContent = item1.textContent;
        } else {
          item1.classList.remove("active");
        }
      });
    });
  }

  for (const item of dropdownItem2) {
    item.addEventListener("click", () => {
      dropdownItem2.forEach((item2) => {
        if (item === item2) {
          item2.classList.add("active");
          dropdownMenuButton2.textContent = item2.textContent;
          if (item2.dataset.op !== "o") {
            dropdown1.classList.add("hidden");
          } else {
            dropdown1.classList.remove("hidden");
          }
        } else {
          item2.classList.remove("active");
        }
      });
    });
  }

  for (const item of dropdownItem3) {
    item.addEventListener("click", () => {
      dropdownItem3.forEach((item1) => {
        if (item === item1) {
          item1.classList.add("active");
        } else {
          item1.classList.remove("active");
        }
      });
    });
  }

  btnWarning.addEventListener("click", () => {
    for (const ram of ramItems) {
      ram.classList.add("hidden");
      dropdownItem2.forEach((item2) => {
        if (
          !item2.classList.contains("active") &&
          ram.dataset.op === item2.dataset.op
        ) {
          ram.classList.add("hidden");
        } else if (
          item2.classList.contains("active") &&
          ram.dataset.op === item2.dataset.op
        ) {
          if (item2.dataset.op !== "o" && item2.dataset.op !== "s" && item2.dataset.op !== "l") {
            chartBox.classList.add("hidden");
          } else {
            chartBox.classList.remove("hidden");
          }
          if (item2.dataset.op !== "o") {
            ram.classList.remove("hidden");
          } else {
            dropdownItem1.forEach((item1) => {
              if (
                !item1.classList.contains("active") &&
                ram.dataset.module === item1.dataset.module
              ) {
                ram.classList.add("hidden");
              } else if (
                item1.classList.contains("active") &&
                ram.dataset.module === item1.dataset.module
              ) {
                ram.classList.remove("hidden");
              }
            });
          }
        }
      });
    }

    for (const vari of varItems) {
      vari.classList.add("hidden");
      dropdownItem3.forEach((item3) => {
        if (
          !item3.classList.contains("active") &&
          vari.dataset.vari === item3.dataset.vari
        ) {
          vari.classList.add("hidden");
        } else if (
          item3.classList.contains("active") &&
          vari.dataset.vari === item3.dataset.vari
        ) {
          vari.classList.remove("hidden");
        }
      });
    }
  });

  btnRandom.addEventListener("click", () => {
    let arr;
    if (bankGroup.classList.contains("empty")) {
      bankGroup.classList.remove("empty");
      var svgNS = bankGroup.namespaceURI;
      var newCell;
      var width = bankItems[0].width.baseVal.value / 8;
      formDiv.classList.remove("hidden");

      for (let x = 0; x < 8; x++) {
        arr = new Array();
        for (let i = 0; i < 8; i++) {
          arr[i] = new Array();
          for (let j = 0; j < 8; j++) {
            arr[i][j] = Math.floor(Math.random() * 2);
            newCell = document.createElementNS(svgNS, "rect");
            newCell.setAttribute("x", bankItems[x].x.baseVal.value + i * width);
            newCell.setAttribute("y", bankItems[x].y.baseVal.value + j * width);
            newCell.setAttribute("width", width);
            newCell.setAttribute("height", width);
            newCell.setAttribute("class", "cell " + x + "" + i + "" + j);
            newCell.style.stroke = "#4D4D60";
            newCell.style.strokeWidth = "1";
            if (arr[i][j] === 0) {
              newCell.style.fill = "#FFF";
            } else {
              newCell.style.fill = "#FE7276";
            }
            bankGroup.appendChild(newCell);
          }
        }
      }
    } else {
      var cell;
      for (let x = 0; x < 8; x++) {
        arr = new Array();
        for (let i = 0; i < 8; i++) {
          arr[i] = new Array();
          for (let j = 0; j < 8; j++) {
            arr[i][j] = Math.floor(Math.random() * 2);
            cell = document.getElementsByClassName(
              "cell " + x + "" + i + "" + j
            )[0];
            if (arr[i][j] === 0) {
              cell.style.fill = "#FFF";
            } else {
              cell.style.fill = "#FE7276";
            }
          }
        }
      }
    }
  });

  const form = document.querySelector(".needs-validation");
  form.addEventListener(
    "submit",
    (event) => {
      var cell;
      var cells = [];
      if (
        row.value >= 0 &&
        row.value <= 7 &&
        col.value >= 0 &&
        col.value <= 7
      ) {
        for (let item of document.getElementsByClassName("cell")) {
          item.style.stroke = "#4D4D60";
          item.style.strokeWidth = "1";
        }
        for (let i = 0; i < 8; i++) {
          cell = document.getElementsByClassName(
            "cell " + i + "" + row.value + "" + col.value
          )[0];
          cell.style.stroke = "rgb(255, 205, 86)";
          cell.style.strokeWidth = "3";
          cells.push(cell);
        }
        var svgNS = bankGroup.namespaceURI;
        var newCell;
        var width = buffer.width.baseVal.value / 8;
        if (buffer.classList.contains("empty")) {
          buffer.classList.remove("empty");
          for (let i = 0; i < 8; i++) {
            newCell = document.createElementNS(svgNS, "rect");
            newCell.setAttribute("x", buffer.x.baseVal.value + i * width);
            newCell.setAttribute("y", buffer.y.baseVal.value);
            newCell.setAttribute("width", width);
            newCell.setAttribute("height", width);
            newCell.setAttribute("class", "bufferCell");
            newCell.style.stroke = "#4D4D60";
            newCell.style.strokeWidth = "1";
            newCell.style.fill = cells[i].style.fill;
            bankGroup.appendChild(newCell);
          }
        } else {
          var bufferCell;
          for (let i = 0; i < 8; i++) {
            bufferCell = document.getElementsByClassName("bufferCell")[i];
            bufferCell.style.fill = cells[i].style.fill;
          }
        }
      } else {
        alert("Введите значение от 0 до 7!");
      }
      event.preventDefault();
      event.stopPropagation();
      form.classList.add("was-validated");
    },
    false
  );

  const groupItems = document.querySelectorAll(".group");
  const detailed = document.querySelectorAll(".detailed");
  detailed.forEach((detail) => {
    for (let item of groupItems) {
      item.addEventListener("click", () => {
        detail.classList.remove("hidden");
      });
    }
  });
  const groupItemsSA = document.querySelectorAll(".SA_group");
  const detailedSA = document.getElementById("SA_container");
  
    for (let item of groupItemsSA) {
      item.addEventListener("click", () => {
        detailedSA.classList.remove("hidden");
      });
    }


  const detailform = document.querySelector(".detailform");
  const detailcells = document.querySelectorAll(".detailcell");
  const detailcells2 = document.querySelectorAll(".detailcell2");
  detailform.addEventListener(
    "submit",
    (event) => {
      if (bits.checkValidity()) {
        for (let i = 0; i < 16; i++) {
          if (bits.value[i] === "1") {
            detailcells2[i].setAttribute("href", "img/zerocell.png");
            detailcells2[i].style.opacity = 0;
          } else {
            detailcells2[i].setAttribute("href", "img/zerocell.png");
            detailcells2[i].style.opacity = 1;
          }
        }
      } else {
        alert("Введите бинарную строку длиной 16 бит!");
      }
      event.preventDefault();
      event.stopPropagation();
      detailform.classList.add("was-validated");
    },
    false
  );

  const recharge = document.querySelector("#recharge");
  const databits = document.querySelector("#bits");
  recharge.addEventListener("click", () => {
    if (databits.value.length < 16) {
      alert("Сначала запишите данные!");
    } else {
      for (let i = 0; i < 16; i++) {
        if (databits.value[i] === "1") {
          detailcells2[i].setAttribute("href", "img/recharge.png");
          detailcells2[i].style.opacity = 1;
        }
      }
    }
  });
});
