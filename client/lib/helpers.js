function addOutput(msg) {
    var message = document.createElement('div');
    message.appendChild(document.createTextNode(msg));
    return document.getElementById('exerciseOutput').appendChild(message);
}

function hideDom(id) {
    var arr;
    if (!Array.isArray(id)) {
        arr = [id];
    } else {
        arr = id;
    }
    arr.forEach(function (domid) {
        document.getElementById(domid).style.display = 'none';
    });
}

function showDom(id) {
    var arr;
    if (!Array.isArray(id)) {
        arr = [id];
    } else {
        arr = id;
    }
    arr.forEach(function (domid) {
        document.getElementById(domid).style.display = 'initial';
    });
}

function displayUserInformation(user) {
    hideDom('loginContainer');
    document.getElementById('userEmail').textContent = 'Email: ' + user.email;
    document.getElementById('userName').textContent = 'Name: ' + user.name;
    showDom('userInformation');
}

function displayLoginContainer() {
    hideDom('userInformation');
    showDom('loginContainer');
}

function User(obj) {      
    if (!obj) {
        obj = {};
    } else {
        obj = JSON.parse(obj);
    }

    this.email = obj.email;
    this.name = 'Awesome User';
    this.logout = function () {
        user = new User();
        localStorage.removeItem('user');
        return user;
    };
    this.login = function (email) {
        this.email = email;
        localStorage.setItem('user', JSON.stringify(this));
    };
}

function initSpinner() {
    var spinner = new Spinner().spin();
    document.getElementById('spinner').appendChild(spinner.el);
}