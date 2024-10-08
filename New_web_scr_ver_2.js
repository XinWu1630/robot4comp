let x, y, z, roll, pitch, yaw;
var motiontype = "";
let angles = [0, 0, 0, 0, 0];
var speed_data = 0;
let acce_data, vel_data;
let vel_data_percent, acce_data_percent;
var increment = 0.0000; // Bước tăng
let continous = false;
var url = "";
let jointVelocityLimit, angularAccelerationLimit, linearAccelerationLimit, axisVelocityLimit, PortValue;
let jointVelocityValue, angularAccelerationValue, linearAccelerationValue, axisVelocityValue;
let baseurl = 'http://127.0.0.1:5000';
const axisvel = document.getElementById('number-30');
const linearacce = document.getElementById('number-3');
const jointvel = document.getElementById('number-2');
const angularacce = document.getElementById('number-1');
function myFunction(x) {
    var nav = document.getElementById("nav");
    x.classList.toggle("change");
    nav.classList.toggle("change-nav")
}

document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(function (input) {
        input.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                input.blur();
            }
        });
    });
});
function clearPlaceholder(element) {
    element.placeholder = '';
}


function toggleDropdown() {
    document.getElementById("move").classList.toggle("show");
}

function selectOption(option) {
    document.getElementById("output").innerText = option;
    document.getElementById("move").classList.remove("show");
}

window.onclick = function (event) {
    if (!event.target.matches('#button-selects')) {
        var dropdowns = document.getElementsByClassName("move-class");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function update_pose() {
    const newUrl = document.getElementById('Port-value')
    baseurl = newUrl.value;
    url = baseurl + "/poses/run";
    const angle_1 = document.getElementById('number-10');
    const angle_2 = document.getElementById('number-11');
    const angle_3 = document.getElementById('number-12');
    const angle_4 = document.getElementById('number-13');
    const angle_5 = document.getElementById('number-14');
    const speed_val = document.getElementById('counter');
    const acce = document.getElementById('number-1');
    const vel = document.getElementById('number-2');
    motiontype = "joint";
    vel_data = Number(vel.value);
    acce_data = Number(acce.value);
    speed_data = Number(speed_val.textContent);
    angles[0] = Number(angle_1.value);
    angles[1] = Number(angle_2.value);
    angles[2] = Number(angle_3.value);
    angles[3] = Number(angle_4.value);
    angles[4] = Number(angle_5.value);
}
function update_position() {
    const newUrl = document.getElementById('Port-value')
    baseurl = newUrl.value;
    url = baseurl + "/positions/run";
    const x_val = document.getElementById('number-21');
    const y_val = document.getElementById('number-22');
    const z_val = document.getElementById('number-23');
    const roll_val = document.getElementById('number-24');
    const pitch_val = document.getElementById('number-25');
    const speed_val = document.getElementById('counter');
    const acce = document.getElementById('number-1');
    const vel = document.getElementById('number-2');
    motiontype = "joint";
    vel_data = Number(vel.value);
    acce_data = Number(acce.value);
    speed_data = Number(speed_val.textContent);
    x = Number(x_val.value);
    y = Number(y_val.value);
    z = Number(z_val.value);
    roll = Number(roll_val.value);
    pitch = Number(pitch_val.value);
}
document.addEventListener('DOMContentLoaded', function () {
    sendingData = false;
    init_button_19_20();
    init_button_2_1();
    init_button_3_4();
    init_button_5_6();
    init_button_7_8();
    init_button_11_12();
    init_button_13_14();
    init_button_15_16();
    init_button_17_18();
    init_button_19_20();
    init_button_31_32();
    init_x_button();
    init_y_button();
    init_z_button();
    init_roll_button();
    init_pitch_button();
    recieveData();
    jointvel.value = jointVelocityValue;
    angularacce.value = angularAccelerationValue;
    axisvel.value = axisVelocityValue;
    linearacce.value = linearAccelerationValue;
    document.getElementById('Port-value').value = PortValue;
});
// startGettingData();
function init_y_button() {
    const increaseButton = document.getElementById('img7');
    const decreaseButton = document.getElementById('img3');
    const counterValue = document.getElementById('number-22');

    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('img7');
    const newDecreaseButton = document.getElementById('img3');

    if (!continous) {
        add_minus_position(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_position(newIncreaseButton, newDecreaseButton, counterValue);
    }

}
function init_x_button() {
    const increaseButton = document.getElementById('img5');
    const decreaseButton = document.getElementById('img1');
    const counterValue = document.getElementById('number-21');

    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('img5');
    const newDecreaseButton = document.getElementById('img1');

    if (!continous) {
        add_minus_position(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_position(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
function init_z_button() {

    const increaseButton = document.getElementById('img9');
    const decreaseButton = document.getElementById('img11');
    const counterValue = document.getElementById('number-23');

    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('img9');
    const newDecreaseButton = document.getElementById('img11');

    if (!continous) {
        add_minus_position(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_position(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
function init_roll_button() {
    const increaseButton = document.getElementById('img13');
    const decreaseButton = document.getElementById('img15');
    const counterValue = document.getElementById('number-24');

    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('img13');
    const newDecreaseButton = document.getElementById('img15');

    if (!continous) {
        add_minus_position(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_position(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
function init_pitch_button() {

    const increaseButton = document.getElementById('img17');
    const decreaseButton = document.getElementById('img19');
    const counterValue = document.getElementById('number-25');

    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('img17');
    const newDecreaseButton = document.getElementById('img19');

    if (!continous) {
        add_minus_position(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_position(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
function init_button_2_1() {
    const increaseButton = document.getElementById('button-2');
    const decreaseButton = document.getElementById('button-1');
    const counterValue = document.getElementById('counter');
    add_minus(increaseButton, decreaseButton, counterValue)

}
function init_button_3_4() {
    const increaseButton = document.getElementById('button-3');
    const decreaseButton = document.getElementById('button-4');
    const counterValue = document.getElementById('number-1');
    let max = angularAccelerationLimit;
    add_minus(increaseButton, decreaseButton, counterValue, max)
}
function init_button_7_8() {
    const increaseButton = document.getElementById('button-7');
    const decreaseButton = document.getElementById('button-8');
    const counterValue = document.getElementById('number-3');
    let max = linearAccelerationLimit;
    add_minus(increaseButton, decreaseButton, counterValue, max)

}
function init_button_31_32() {
    const increaseButton = document.getElementById('button-31');
    const decreaseButton = document.getElementById('button-32');
    const counterValue = document.getElementById('number-30');
    let max = axisVelocityLimit;
    add_minus(increaseButton, decreaseButton, counterValue, max);

}
function init_button_5_6() {
    const increaseButton = document.getElementById('button-5');
    const decreaseButton = document.getElementById('button-6');
    const counterValue = document.getElementById('number-2');
    let max = angularAccelerationLimit;
    add_minus(increaseButton, decreaseButton, counterValue, max)

}
function init_button_11_12() {
    const increaseButton = document.getElementById('button-11');
    const decreaseButton = document.getElementById('button-12');
    const counterValue = document.getElementById('number-10');
    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('button-11');
    const newDecreaseButton = document.getElementById('button-12');

    if (!continous) {
        add_minus_pose(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_pose(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
function init_button_13_14() {
    const increaseButton = document.getElementById('button-13');
    const decreaseButton = document.getElementById('button-14');
    const counterValue = document.getElementById('number-11');
    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('button-13');
    const newDecreaseButton = document.getElementById('button-14');

    if (!continous) {
        add_minus_pose(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_pose(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
function init_button_15_16() {
    const increaseButton = document.getElementById('button-15');
    const decreaseButton = document.getElementById('button-16');
    const counterValue = document.getElementById('number-12');
    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('button-15');
    const newDecreaseButton = document.getElementById('button-16');

    if (!continous) {
        add_minus_pose(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_pose(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
function init_button_17_18() {
    const increaseButton = document.getElementById('button-17');
    const decreaseButton = document.getElementById('button-18');
    const counterValue = document.getElementById('number-13');
    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('button-17');
    const newDecreaseButton = document.getElementById('button-18');

    if (!continous) {
        add_minus_pose(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_pose(newIncreaseButton, newDecreaseButton, counterValue);
    }
}

function recieveData() {
    angularAccelerationLimit = parseFloat(localStorage.getItem('angularAccelerationLimit')) || 10000;
    axisVelocityLimit = parseFloat(localStorage.getItem('axisVelocityLimit')) || 10000;
    linearAccelerationLimit = parseFloat(localStorage.getItem('linearAccelerationLimit')) || 10000;
    jointVelocityLimit = parseFloat(localStorage.getItem('jointVelocityLimit')) || 10000;
    PortValue = localStorage.getItem('PortValue') || '192.168.5.1:5000';
    axisVelocityValue = parseFloat(localStorage.getItem('axisVelocityValue')) || 1000;
    linearAccelerationValue = parseFloat(localStorage.getItem('linearAccelerationValue')) || 1000;
    angularAccelerationValue = parseFloat(localStorage.getItem('angularAccelerationValue')) || 1000;
    jointVelocityValue = parseFloat(localStorage.getItem('jointVelocityValue')) || 1000;
}

function init_button_19_20() {
    const increaseButton = document.getElementById('button-19');
    const decreaseButton = document.getElementById('button-20');
    const counterValue = document.getElementById('number-14');
    // Remove all existing event listeners by cloning and replacing the buttons
    increaseButton.replaceWith(increaseButton.cloneNode(true));
    decreaseButton.replaceWith(decreaseButton.cloneNode(true));

    // Re-select the elements to get the new clones
    const newIncreaseButton = document.getElementById('button-19');
    const newDecreaseButton = document.getElementById('button-20');

    if (!continous) {
        add_minus_pose(newIncreaseButton, newDecreaseButton, counterValue);
    } else {
        add_minus_click_pose(newIncreaseButton, newDecreaseButton, counterValue);
    }
}
//Getting Sending
function startSendingData_pose() {
    if (!sendingData) {
        sendingData = true;
        acce_data_percent = parseFloat((acce_data * 100) / angularAccelerationLimit).toFixed(4);
        vel_data_percent = parseFloat((vel_data * 100) / jointVelocityLimit).toFixed(4);
        sendData_put_pose(angles, speed_data, motiontype, url, vel_data_percent, acce_data_percent);
    }
}
function startSendingData_position() {
    if (!sendingData) {
        sendingData = true;
        acce_data_percent = parseFloat((acce_data * 100) / linearAccelerationLimit).toFixed(4);
        vel_data_percent = parseFloat((vel_data * 100) / axisVelocityLimit).toFixed(4);
        sendData_put_position(x, y, z, roll, pitch, yaw, speed_data, motiontype, url, vel_data_percent, acce_data_percent);
    }
}
function stopSendingData() {
    sendingData = false;
}
function startGettingData() {
    gettingData = true;
    const x = document.getElementById('number-21');
    const y = document.getElementById('number-22');
    const z = document.getElementById('number-23');
    const roll = document.getElementById('number-24');
    const pitch = document.getElementById('number-25');
    const newUrl = document.getElementById('Port-value')
    baseurl = newUrl.value;
    // getData_status(baseurl);
    getData_pose(baseurl);
    getData_position(baseurl, x, y, z, roll, pitch);


}
function StopgettingData() {
    gettingData = false;
}
//button increase decrease
document.addEventListener('DOMContentLoaded', (event) => {
    const increment = 0.06;
    const increaseButton = document.getElementById('button-2');
    const decreaseButton = document.getElementById('button-1');
    const counterValue = document.getElementById('counter');
    counterValue.addEventListener('input', function () {
        const newValue = parseFloat(counterValue.textContent);
        // Kiểm tra nếu giá trị là một số hợp lệ, nếu không thì không cập nhật
        if (!isNaN(newValue)) {
            counterValue.textContent = newValue;
        }
    });
    let intervalId;

    const updateCounter = (delta) => {
        let count = parseFloat(counterValue.textContent);
        count += delta;
        counterValue.textContent = count.toFixed(2); // Định dạng số thập phân với 1 chữ số sau dấu phẩy
    };

    const startInterval = (delta) => {
        intervalId = setInterval(() => updateCounter(delta), 50); // Tốc độ thay đổi (100ms)
    };

    const stopInterval = () => {
        clearInterval(intervalId);
    };
    // Sự kiện cho nút tăng
    increaseButton.addEventListener('mousedown', () => startInterval(increment));
    increaseButton.addEventListener('mouseup', stopInterval);
    increaseButton.addEventListener('mouseleave', stopInterval);
    increaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(increment);
    });
    increaseButton.addEventListener('touchend', stopInterval);
    increaseButton.addEventListener('touchcancel', stopInterval);

    // Sự kiện cho nút giảm
    decreaseButton.addEventListener('mousedown', () => startInterval(-increment));
    decreaseButton.addEventListener('mouseup', stopInterval);
    decreaseButton.addEventListener('mouseleave', stopInterval);
    decreaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(-increment);
    });
    decreaseButton.addEventListener('touchend', stopInterval);
    decreaseButton.addEventListener('touchcancel', stopInterval);

});
function add_minus(increaseButton, decreaseButton, counterValue, max) {
    let increment = 0.5;
    let intervalId;
    const updateCounter = (delta) => {
        let count = parseFloat(counterValue.value) || 0; // Lấy giá trị ban đầu từ counterValue
        count += delta;

        if (count > max) {
            count = max;
        } else if (count < 0) {
            count = 0;
        }

        counterValue.value = count.toFixed(4); // Định dạng số thập phân với 4 chữ số sau dấu phẩy
    };
    const startInterval = (delta) => {
        updateCounter(delta); // Cập nhật giá trị ngay lập tức khi nhấn
        intervalId = setInterval(() => updateCounter(delta), 50); // Tốc độ thay đổi (1ms)
    };

    const stopInterval = () => {
        clearInterval(intervalId);
    };

    // Ngăn chặn nhập các ký tự không phải là số và cho phép tối đa một dấu chấm
    counterValue.addEventListener('keydown', (event) => {
        const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (allowedKeys.includes(event.key)) {
            // Nếu nhấn Enter thì mất tiêu điểm (blur)
            if (event.key === 'Enter') {
                counterValue.blur();
            }
            return;
        }

        // Cho phép tối đa một dấu chấm
        if (event.key === '.' && counterValue.value.includes('.')) {
            event.preventDefault();
            return;
        }

        // Ngăn chặn các ký tự không phải số
        if ((event.key < '0' || event.key > '9') && event.key !== '.') {
            event.preventDefault();
        }
    });

    // Sự kiện cho nút tăng
    increaseButton.addEventListener('mousedown', () => startInterval(increment));
    increaseButton.addEventListener('mouseup', stopInterval);
    increaseButton.addEventListener('mouseleave', stopInterval);
    increaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(increment);
    });
    increaseButton.addEventListener('touchend', stopInterval);
    increaseButton.addEventListener('touchcancel', stopInterval);

    // Sự kiện cho nút giảm
    decreaseButton.addEventListener('mousedown', () => startInterval(-increment));
    decreaseButton.addEventListener('mouseup', stopInterval);
    decreaseButton.addEventListener('mouseleave', stopInterval);
    decreaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(-increment);
    });
    decreaseButton.addEventListener('touchend', stopInterval);
    decreaseButton.addEventListener('touchcancel', stopInterval);
}

function add_minus_pose(increaseButton, decreaseButton, counterValue) {
    let intervalId;
    const updateCounter = (delta) => {
        let count = parseFloat(counterValue.value) || 0; // Lấy giá trị ban đầu từ counterValue
        count += delta;
        counterValue.value = count.toFixed(4); // Định dạng số thập phân với 4 chữ số sau dấu phẩy
    };

    const startInterval = (delta) => {
        updateCounter(delta); // Cập nhật giá trị ngay lập tức khi nhấn
        intervalId = setInterval(() => updateCounter(delta), 10); // Tốc độ thay đổi (1ms)
    };

    const stopInterval = () => {
        clearInterval(intervalId);
    };

    // Ngăn chặn nhập các ký tự không phải là số và cho phép tối đa một dấu chấm
    counterValue.addEventListener('keydown', (event) => {
        const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (allowedKeys.includes(event.key)) {
            // Nếu nhấn Enter thì mất tiêu điểm (blur)
            if (event.key === 'Enter') {
                counterValue.blur();
            }
            return;
        }

        // Cho phép tối đa một dấu chấm
        if (event.key === '.' && counterValue.value.includes('.')) {
            event.preventDefault();
            return;
        }

        // Ngăn chặn các ký tự không phải số
        if ((event.key < '0' || event.key > '9') && event.key !== '.') {
            event.preventDefault();
        }
    });


    // Sự kiện cho nút tăng
    increaseButton.addEventListener('mousedown', () => startInterval(increment));
    increaseButton.addEventListener('mouseup', stopInterval);
    increaseButton.addEventListener('mouseleave', stopInterval);
    increaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(increment);
    });
    increaseButton.addEventListener('touchend', stopInterval);
    increaseButton.addEventListener('touchcancel', stopInterval);

    // Sự kiện cho nút giảm
    decreaseButton.addEventListener('mousedown', () => startInterval(-increment));
    decreaseButton.addEventListener('mouseup', stopInterval);
    decreaseButton.addEventListener('mouseleave', stopInterval);
    decreaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(-increment);
    });
    decreaseButton.addEventListener('touchend', stopInterval);
    decreaseButton.addEventListener('touchcancel', stopInterval);
    // Gán sự kiện cho việc gửi dữ liệu
    increaseButton.addEventListener('mousedown', startSendingData_pose);
    increaseButton.addEventListener('mouseup', stopSendingData);
    decreaseButton.addEventListener('mousedown', startSendingData_pose);
    decreaseButton.addEventListener('mouseup', stopSendingData);


}
function add_minus_position(increaseButton, decreaseButton, counterValue) {
    let intervalId;
    const updateCounter = (delta) => {
        let count = parseFloat(counterValue.value) || 0;
        count += delta;
        counterValue.value = count.toFixed(4);
    };

    const startInterval = (delta) => {
        updateCounter(delta);
        intervalId = setInterval(() => updateCounter(delta), 10);
    };

    const stopInterval = () => {
        clearInterval(intervalId);
    };

    counterValue.addEventListener('keydown', (event) => {
        const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (allowedKeys.includes(event.key)) {
            if (event.key === 'Enter') {
                counterValue.blur();
            }
            return;
        }

        if (event.key === '.' && counterValue.value.includes('.')) {
            event.preventDefault();
            return;
        }

        if ((event.key < '0' || event.key > '9') && event.key !== '.') {
            event.preventDefault();
        }
    });

    increaseButton.addEventListener('mousedown', () => startInterval(increment));
    increaseButton.addEventListener('mouseup', stopInterval);
    increaseButton.addEventListener('mouseleave', stopInterval);
    increaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(increment);
    });
    increaseButton.addEventListener('touchend', stopInterval);
    increaseButton.addEventListener('touchcancel', stopInterval);

    decreaseButton.addEventListener('mousedown', () => startInterval(-increment));
    decreaseButton.addEventListener('mouseup', stopInterval);
    decreaseButton.addEventListener('mouseleave', stopInterval);
    decreaseButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startInterval(-increment);
    });
    decreaseButton.addEventListener('touchend', stopInterval);
    decreaseButton.addEventListener('touchcancel', stopInterval);

    increaseButton.addEventListener('mousedown', startSendingData_position);
    increaseButton.addEventListener('mouseup', stopSendingData);
    decreaseButton.addEventListener('mousedown', startSendingData_position);
    decreaseButton.addEventListener('mouseup', stopSendingData);
}

function add_minus_click_position(increaseButton, decreaseButton, counterValue) {
    const updateCounter = (delta) => {
        let count = parseFloat(counterValue.value) || 0;
        count += delta;
        counterValue.value = count.toFixed(4);
    };

    counterValue.addEventListener('keydown', (event) => {
        const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (allowedKeys.includes(event.key)) {
            if (event.key === 'Enter') {
                counterValue.blur();
            }
            return;
        }

        if (event.key === '.' && counterValue.value.includes('.')) {
            event.preventDefault();
            return;
        }

        if ((event.key < '0' || event.key > '9') && event.key !== '.') {
            event.preventDefault();
        }
    });

    increaseButton.addEventListener('click', () => updateCounter(increment));
    decreaseButton.addEventListener('click', () => updateCounter(-increment));

    increaseButton.addEventListener('mousedown', startSendingData_position);
    increaseButton.addEventListener('mouseup', stopSendingData);
    decreaseButton.addEventListener('mousedown', startSendingData_position);
    decreaseButton.addEventListener('mouseup', stopSendingData);
}
function add_minus_click_pose(increaseButton, decreaseButton, counterValue) {
    const updateCounter = (delta) => {
        let count = parseFloat(counterValue.value) || 0; // Lấy giá trị ban đầu từ counterValue
        count += delta;
        counterValue.value = count.toFixed(4); // Định dạng số thập phân với 4 chữ số sau dấu phẩy
    };

    // Ngăn chặn nhập các ký tự không phải là số và cho phép tối đa một dấu chấm
    counterValue.addEventListener('keydown', (event) => {
        const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (allowedKeys.includes(event.key)) {
            // Nếu nhấn Enter thì mất tiêu điểm (blur)
            if (event.key === 'Enter') {
                counterValue.blur();
            }
            return;
        }

        // Cho phép tối đa một dấu chấm
        if (event.key === '.' && counterValue.value.includes('.')) {
            event.preventDefault();
            return;
        }

        // Ngăn chặn các ký tự không phải số
        if ((event.key < '0' || event.key > '9') && event.key !== '.') {
            event.preventDefault();
        }
    });

    // Sự kiện cho nút tăng
    increaseButton.addEventListener('click', () => updateCounter(increment));

    // Sự kiện cho nút giảm
    decreaseButton.addEventListener('click', () => updateCounter(-increment));
    // Gán sự kiện cho việc gửi dữ liệu
    increaseButton.addEventListener('mousedown', startSendingData_pose);
    increaseButton.addEventListener('mouseup', stopSendingData);
    decreaseButton.addEventListener('mousedown', startSendingData_pose);
    decreaseButton.addEventListener('mouseup', stopSendingData);
}
const controlButtons = document.querySelectorAll('.control-btn');
var button = document.getElementById('btn');
let currentState = 'PAUSE';
let StatePower = 'LOCK';
const val = document.getElementById('Lock-mode-Value');
const powerButtons = document.querySelectorAll('.button-power');
const speed = document.querySelector('.speed');
const val_power = document.getElementById('Power-Value');
const control = document.querySelector('.control');
const posittion = document.querySelector('.Position');
const joint = document.querySelector('.Joint');
const btn = document.getElementById('btn');
const controlbtn = document.querySelectorAll('.control-btn');
let currentState_power = 'SHUTDOWN';
updateControlButtons(currentState, controlButtons)
lockPower(powerButtons, StatePower, val);
lockStart(button, StatePower)
Power_Value(val_power, currentState_power, control, posittion, joint, btn, controlbtn, speed)

function toggleButton() {
    if (currentState === 'PAUSE') {
        button.classList.add('start');
        button.textContent = 'START';
        currentState = 'START';
        // Thêm hàm JS bạn muốn thực hiện khi chuyển đổi sang trạng thái ON ở đây
    } else {
        button.classList.remove('start');
        button.textContent = 'PAUSE';
        currentState = 'PAUSE';

        // Thêm hàm JS bạn muốn thực hiện khi chuyển đổi sang trạng thái OFF ở đây
    }
    updateControlButtons(currentState, controlButtons);
}
function unlockButtonClick() {
    const val = document.getElementById('Lock-mode-Value');
    var buttons = document.querySelectorAll('.button-power')
    var button_start = document.getElementById('btn')
    let State = 'UNLOCK';

    val.textContent = 'Unlock';
    lockPower(buttons, State, val)
    lockStart(button_start, State)
}


function lockButtonClick() {
    const val = document.getElementById('Lock-mode-Value');
    var buttons = document.querySelectorAll('.button-power')
    let State = 'LOCK';
    var button_start = document.getElementById('btn');

    val.textContent = 'Locked';
    lockPower(buttons, State, val);
    lockStart(button_start, State);
}
function lockPower(buttons, currentState, val) {
    buttons.forEach(controlButton => {
        if (currentState === 'LOCK') {
            val.classList.remove('unlock');
            controlButton.classList.add('disabled');

        } if (currentState === 'UNLOCK') {
            controlButton.classList.remove('disabled');
            val.classList.add('unlock');

        }
    });
}
function lockStart(controlButton, currentState) {
    if (currentState === 'LOCK') {
        controlButton.classList.add('disabled');
    } if (currentState === 'UNLOCK') {
        controlButton.classList.remove('disabled');
    }
}
function updateControlButtons(currentState, controlButtons) {
    controlButtons.forEach(controlButton => {
        if (currentState === 'PAUSE') {
            // StopgettingData();
            clearSelection();
            increment = 0;
            controlButton.classList.add('disabled');
        } else {
            // startGettingData();
            controlButton.classList.remove('disabled');
        }
    });
}
//Power-Button
function Shutdown_click() {
    const speed = document.querySelector('.speed');
    const val = document.getElementById('Power-Value');
    const control = document.querySelector('.control');
    const posittion = document.querySelector('.Position');
    const joint = document.querySelector('.Joint');
    const btn = document.getElementById('btn');
    const controlbtn = document.querySelectorAll('.control-btn');
    let currentState = 'SHUTDOWN';
    Power_Value(val, currentState, control, posittion, joint, btn, controlbtn, speed);
}
function Startup_click() {
    const speed = document.querySelector('.speed');
    const val = document.getElementById('Power-Value');
    const control = document.querySelector('.control');
    const posittion = document.querySelector('.Position');
    const joint = document.querySelector('.Joint');
    const btn = document.getElementById('btn');
    const controlbtn = document.querySelectorAll('.control-btn');
    let currentState = 'STARTUP';
    Power_Value(val, currentState, control, posittion, joint, btn, controlbtn, speed);
}
function Power_Value(val, currentState, control, posittion, joint, btn, controlbtn, speed) {
    if (currentState === 'STARTUP') {
        control.classList.remove('disable');
        posittion.classList.remove('disable');
        joint.classList.remove('disable');
        btn.classList.remove('disable');
        speed.classList.remove('disable');
        controlbtn.forEach(controlbtns => {
            controlbtns.classList.remove('disable');
        });
        val.textContent = 'ON';
        val.classList.add('toggle');
    }
    if (currentState === 'SHUTDOWN') {
        control.classList.add('disable');
        posittion.classList.add('disable');
        joint.classList.add('disable');
        btn.classList.add('disable');
        speed.classList.add('disable')
        controlbtn.forEach(controlbtns => {
            controlbtns.classList.add('disable');
        });
        val.textContent = 'OFF';
        val.classList.remove('toggle');
        // StopgettingData();
        clearSelection();
        increment = 0;

    }
}
var img1 = document.getElementById('img1');
var img2 = document.getElementById('control-Button-Left');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('control-Button-Down');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('control-Button-Right');
var img7 = document.getElementById('img7');
var img8 = document.getElementById('control-Button-Up');
var img9 = document.getElementById('img9');
var img10 = document.getElementById('control-Button-Up-v2');
var img11 = document.getElementById('img11');
var img12 = document.getElementById('control-Button-Down-v2');
var img13 = document.getElementById('img13');
var img14 = document.getElementById('control-Button-turn-left-v2');
var img15 = document.getElementById('img15');
var img16 = document.getElementById('control-Button-turn-right-v2');
var img17 = document.getElementById('img17');
var img18 = document.getElementById('control-Button-turn-arrow-left-v2');
var img19 = document.getElementById('img19');
var img20 = document.getElementById('control-Button-turn-arrow-right-v2');
img1.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img2);
});

img1.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img2);
});

img3.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img4);
});

img3.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img4);
});


img5.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img6);
});

img5.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img6);
});


img7.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img8);
});

img7.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img8);
});



img9.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img10);
});

img9.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img10);
});


img11.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img12);
});

img11.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img12);
});


img13.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img14);
});

img13.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img14);
});


//img15 16
img15.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img16);
});

img15.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img16);
});


//img 17 18
img17.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img18);
});

img17.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img18);
});
//img 19 20
img19.addEventListener('mousedown', function () {
    let state = 'mousedown';
    changeImage(state, img20);
});

img19.addEventListener('mouseup', function () {
    let state = 'mouseup';
    changeImage(state, img20);
});

function changeImage(state, img2) {
    if (state === 'mousedown') {
        img2.classList.add('hidden');
    }
    if (state === 'mouseup') {
        img2.classList.remove('hidden')
    }
}
let sendingData = false;

async function sendData_put_position(x, y, z, roll, pitch, yaw, speed, motiontype, baseurl, vel, acce, tcp_vel) {
    while (sendingData) {
        update_position();
        try {
            const payload = {
                point: {
                    x: x,  // Sử dụng giá trị hiện tại
                    y: y,
                    z: z
                },
                rotation: {
                    roll: roll,
                    pitch: pitch,
                    yaw: yaw
                }
            };
            const url = `${baseurl}?speed=${speed}&motionType=${motiontype}&velocity=${vel}&acceleration=${acce}&tcp_max_velocity=${tcp_vel}`;
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 10)); // Chờ 100 ms trước khi gửi request tiếp theo
    }
}
async function sendData_put_pose(angles, speed, motiontype, baseurl, vel, acce) {
    while (sendingData) {
        update_pose(); // Cập nhật dữ liệu trước mỗi lần gửi
        try {
            const payload = {
                angles: angles
            };

            const url = `${baseurl}?speed=${speed}&motionType=${motiontype}&velocity=${vel}&acceleration=${acce}`;
            console.log(url)
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 10)); // Chờ 100 ms trước khi gửi request tiếp theo
    }
}
async function sendData_post_position(baseurl) {
    while (sendingData) {
        update_position(); // Cập nhật dữ liệu trước mỗi lần gửi
        try {
            const payload = {
                point: {
                    x: 0.3,  // Sử dụng giá trị hiện tại
                    y: -0.4,
                    z: 0.2
                },
                rotation: {
                    roll: 3.14,
                    pitch: 0
                }
            };
            const url = `${baseurl}/base`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 600)); // Chờ 100 ms trước khi gửi request tiếp theo
        update_position(); // Cập nhật dữ liệu trước mỗi lần gửi
    }
}

async function getData_position(baseurl, x, y, z, roll, pitch) {
    while (gettingData) {
        try {
            const url = `${baseurl}/position`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                },
            });
            let data = await response.json();
            x.value = data.point.x;
            y.value = data.point.y;
            z.value = data.point.z;
            roll.value = data.rotation.roll;
            pitch.value = data.rotation.pitch;
            console.log('Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Chờ 100 ms trước khi gửi request tiếp theo
    }
}

async function getData_pose(baseurl) {
    while (gettingData) {
        try {
            const url = `${baseurl}/pose`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                },
            });
            let data = await response.json();
            document.getElementById('number-10').value = data.angles[0].toFixed(4);
            document.getElementById('number-11').value = data.angles[1].toFixed(4);
            document.getElementById('number-12').value = data.angles[2].toFixed(4);
            document.getElementById('number-13').value = data.angles[3].toFixed(4);
            document.getElementById('number-14').value = data.angles[4].toFixed(4);
            console.log('Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Chờ 100 ms trước khi gửi request tiếp theo
    }
}
async function getData_status(baseurl) {
    while (gettingData) {
        try {
            const url = `${baseurl}/status`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'ngrok-skip-browser-warning': 'true',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            let text = await response.text();
            console.log('Raw Response:', text);

            let data = JSON.parse(text);
            console.log('Parsed Response:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Chờ 2000 ms trước khi gửi request tiếp theo
    }
}

function Post_func() {
    sendingData = true;
    sendData_post_position(baseurl);
    setInterval(stopSendingData, 500);

}
function get_data_test() {
    startGettingData();
    setInterval(StopgettingData, 500);
}
//movetype
function selectButtonContinous(button, value) {
    continous = false;
    clearSelection();
    button.classList.add('selected');
    document.getElementById('customValueInput').style.display = 'none';
    increment = value;
    init_roll_button();  // Re-initialize buttons
    init_y_button();
    init_x_button();
    init_z_button();
    init_pitch_button();
    init_button_11_12();
    init_button_13_14();
    init_button_15_16();
    init_button_17_18();
    init_button_19_20();
}

function selectButtonNoneContinous(button, value) {
    continous = true;
    clearSelection();
    button.classList.add('selected');
    document.getElementById('customValueInput').style.display = 'none';
    increment = value;
    init_roll_button();  // Re-initialize buttons
    init_y_button();
    init_x_button();
    init_z_button();
    init_pitch_button();
    init_button_11_12();
    init_button_13_14();
    init_button_15_16();
    init_button_17_18();
    init_button_19_20();
}

function selectCustomButton(button) {
    continous = true;
    clearSelection();
    button.classList.add('selected');
    const input = document.getElementById('customValueInput');
    input.style.display = 'inline';
    input.focus();
}

function clearSelection() {
    const buttons = document.getElementsByClassName('control-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        setCustomValue();
    }
}

function setCustomValue() {
    const customValue = document.getElementById('customValueInput').value;
    increment = Number(customValue);
    document.getElementById('customValueInput').style.display = 'none';
    document.getElementById('customValueInput').value = '';
    init_roll_button();  // Re-initialize buttons
    init_y_button();
    init_x_button();
    init_z_button();
    init_pitch_button();
    init_button_11_12();
    init_button_13_14();
    init_button_15_16();
    init_button_17_18();
    init_button_19_20();
}