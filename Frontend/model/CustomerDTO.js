function CustomerDTO(id,name,address,salary) {
    this.customerId = id;
    this.customerName = name;
    this.customerAddress = address;
    this.customerSalary = salary;

    this.setId = function (id) {
        this.customerId = id;
    }
    this.getId = function () {
        return this.customerId;
    }

    this.setName = function (name) {
        this.customerName = name;
    }
    this.getName = function () {
        return this.customerName;
    }

    this.setAddress = function (address) {
        this.customerAddress = address;
    }
    this.getAddress = function () {
        return this.customerAddress;
    }

    this.setSalary = function (salary) {
        this.customerSalary = salary;
    }
    this.getSalary = function () {
        return this.customerSalary;
    }


}


