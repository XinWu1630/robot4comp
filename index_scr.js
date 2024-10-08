function setup() {
    const display = document.getElementById('home-settings');
    const settings_display = document.getElementById('settings-block');
    display.classList.toggle('move');
    settings_display.classList.toggle('move-settings');
}
document.addEventListener('DOMContentLoaded', () => {
    const setLimitButton_angular_acceleration = document.getElementById('setLimit-angular-acceleration');
    const limitInput_angular_acceleration = document.getElementById('limit-angular-acceleration');
    const setLimitButton_joint_velocity = document.getElementById('setLimit-joint-velocity');
    const limitInput_joint_velocity = document.getElementById('limit-joint-velocity');
    const setLimitButton_linear_acceleration = document.getElementById('setLimit-linear-acceleration');
    const limitInput_linear_acceleration = document.getElementById('limit-linear-acceleration');
    const setLimitButton_axis_velocity = document.getElementById('setLimit-axis-velocity');
    const limitInput_axis_velocity = document.getElementById('limit-axis-velocity');
    const setPortButton = document.getElementById('setPort-value');
    const valuePort = document.getElementById('value-port');
    const setvalue_base_axis_velocity = document.getElementById('setvalue-base-axis-velocity');
    const base_axis_velocity = document.getElementById('base-axis-velocity');
    const setvalue_base_linear_acceleration = document.getElementById('setvalue-base-linear-acceleration');
    const base_linear_acceleration = document.getElementById('base-linear-acceleration');
    const setvalue_base_angular_acceleration = document.getElementById('setvalue-base-angular-acceleration');
    const base_angular_acceleration = document.getElementById('base-angular-acceleration');
    const setvalue_base_joint_velocity = document.getElementById('setvalue-base-joint-velocity');
    const base_joint_velocity = document.getElementById('base-joint-velocity');
    setPortButton.addEventListener('click', () => {
        let key = 'PortValue';
        let text = 'Port: ';
        setPort_func(valuePort, text, key);
    });

    setLimitButton_joint_velocity.addEventListener('click', () => {
        let key = 'jointVelocityLimit';
        let text = 'Joint Velocity: ';
        setLimit_func(limitInput_joint_velocity, text, key);
    });

    setLimitButton_angular_acceleration.addEventListener('click', () => {
        let key = 'angularAccelerationLimit';
        let text = 'Angular Acceleration: ';
        setLimit_func(limitInput_angular_acceleration, text, key);
    });

    setLimitButton_linear_acceleration.addEventListener('click', () => {
        let key = 'linearAccelerationLimit';
        let text = 'Linear Acceleration: ';
        setLimit_func(limitInput_linear_acceleration, text, key);
    });

    setLimitButton_axis_velocity.addEventListener('click', () => {
        let key = 'axisVelocityLimit';
        let text = 'Axis Velocity: ';
        setLimit_func(limitInput_axis_velocity, text, key);
    });
    setvalue_base_axis_velocity.addEventListener('click', () => {
        let key = 'axisVelocityValue';
        let text = 'Axis Velocity: ';
        setBase_func(base_axis_velocity, text, key);
    });
    setvalue_base_linear_acceleration.addEventListener('click', () => {
        let key = 'linearAccelerationValue';
        let text = 'Linear Acceleration: ';
        setBase_func(base_linear_acceleration, text, key);
    });
    setvalue_base_angular_acceleration.addEventListener('click', () => {
        let key = 'angularAccelerationValue';
        let text = 'Angular Acceleration: ';
        setBase_func(base_angular_acceleration, text, key);
    });
    setvalue_base_joint_velocity.addEventListener('click', () => {
        let key = 'jointVelocityValue';
        let text = 'Joint velocity: ';
        setBase_func(base_joint_velocity, text, key);
    });
});
function setBase_func(ValueInput, text, key) {
    const limit = parseInt(ValueInput.value);
    if (!isNaN(limit)) {
        localStorage.setItem(key, limit);
        alert('Base value set to ' + text + limit);
    } else {
        alert('Please enter a valid number');
    }
}
function setLimit_func(limitInput, text, key) {
    const limit = parseInt(limitInput.value);
    if (!isNaN(limit)) {
        localStorage.setItem(key, limit);
        alert('Maximum limit set to ' + text + limit);
    } else {
        alert('Please enter a valid number');
    }
}

function setPort_func(portInput, text, key) {
    const value = portInput.value;
    const regex = /^(\d{1,3}\.){3}\d{1,3}:\d{1,5}$/;

    if (regex.test(value)) {
        localStorage.setItem(key, value);
        alert('Value of ' + text + value);
    } else {
        alert('Please enter a valid port value (e.g., 192.168.5.2:5000)');
    }
}
