/* const customerIdRegEx = /^(C00-)[0-9]{3,4}$/;
const customerNameRegEx = /^[A-z ]{2,20}$/;
const customerAddressRegEx = /^[A-z0-9/,. ]*$/;
const customerSalaryRegEx = /^[0-9]*(.)[0-9]{2}$/;


$("#btnAddCustomer").attr('disabled', true);
$("#btnUpdateCustomer").attr('disabled', true);
$("#btnDeleteCustomer").attr('disabled', true);


function addCustomer() {
    let customerId = $("#txtCustomerId").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    var customerObject=new CustomerDTO(customerId, customerName, customerAddress, customerSalary);

    if(ifCustomerExists(customerId)){
        for(var i in customerArray){
            if(customerArray[i].getId()===customerId){
                customerArray[i]=customerObject;
            }
        }
    }else{
        customerArray.push(customerObject);
    }


    loadAllCustomers();
    clearAllCustomerFields();

    $("#customerTbl>tr").click(function () {
        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAddress = $(this).children(":eq(2)").text();
        let customerSalary = $(this).children(":eq(3)").text();

        console.log(customerId, customerName, customerAddress, customerSalary);

        $("#txtCustomerId").val(customerId);
        $("#txtCustomerName").val(customerName);
        $("#txtCustomerAddress").val(customerAddress);
        $("#txtCustomerSalary").val(customerSalary);

        validateCustomerId();
        validateCustomerName();
        validateCustomerAddress();
        validateCustomerSalary();

        setCustomerButtons();


    });
    loadCustomerIds();
    setCustomerButtons();

}

function ifCustomerExists(id){
    for(var i in customerArray){
        if(customerArray[i].getId()===id){
            return true;
        }
    }
    return false;
}

function updateCustomer() {
    for (var i in customerArray ){
        if ($("#txtCustomerId").val() === customerArray[i].getId()){
            let customerId = $("#txtCustomerId").val();
            let customerName = $("#txtCustomerName").val();
            let customerAddress = $("#txtCustomerAddress").val();
            let customerSalary = $("#txtCustomerSalary").val();

            var customerObject = new CustomerDTO(customerId,customerName,customerAddress,customerSalary);
            customerArray[i].setName(customerObject.getName());
            customerArray[i].setAddress(customerObject.getAddress());
            customerArray[i].setSalary(customerObject.getSalary());

        }
    }
    loadAllCustomers();
    clearAllCustomerFields();



    $("#customerTbl>tr").click(function () {
        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAddress = $(this).children(":eq(2)").text();
        let customerSalary = $(this).children(":eq(3)").text();

        console.log(customerId, customerName, customerAddress, customerSalary);

        $("#txtCustomerId").val(customerId);
        $("#txtCustomerName").val(customerName);
        $("#txtCustomerAddress").val(customerAddress);
        $("#txtCustomerSalary").val(customerSalary);

        validateCustomerId();
        validateCustomerName();
        validateCustomerAddress();
        validateCustomerSalary();
        setCustomerButtons();


    });
    loadCustomerIds();
    setCustomerButtons();




}

function searchCustomer() {
    for (var i in customerArray ){
        if ($("#txtSearchCustomerId").val() === customerArray[i].getId()){
            let a = customerArray[i];
            $('#txtCustomerId').val(a.getId());
            $("#txtCustomerName").val(a.getName());
            $("#txtCustomerAddress").val(a.getAddress());
            $("#txtCustomerSalary").val(a.getSalary());

            validateCustomerId();
            validateCustomerName();
            validateCustomerAddress();
            validateCustomerSalary();

        }
    }
    loadAllCustomers();
    clearSearchCustomerFields();
    setCustomerButtons();


}

function deleteCustomer() {
    for(var i in customerArray) {
        if ($("#txtCustomerId").val() === customerArray[i].getId()){
            customerArray.splice(i,1);
        }
    }

    clearAllCustomerFields();
    loadAllCustomers();
    setCustomerButtons();


    $("#customerTbl>tr").click(function () {
        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAddress = $(this).children(":eq(2)").text();
        let customerSalary = $(this).children(":eq(3)").text();

        console.log(customerId, customerName, customerAddress, customerSalary);

        $("#txtCustomerId").val(customerId);
        $("#txtCustomerName").val(customerName);
        $("#txtCustomerAddress").val(customerAddress);
        $("#txtCustomerSalary").val(customerSalary);

        validateCustomerId();
        validateCustomerName();
        validateCustomerAddress();
        validateCustomerSalary();
        setCustomerButtons();

    });

    loadCustomerIds();
    setCustomerButtons();

}

function loadAllCustomers() {
    $("#customerTbl").empty();

    for(var i in customerArray){
        let id = customerArray[i].customerId;
        let name = customerArray[i].customerName;
        let address = customerArray[i].customerAddress;
        let salary = customerArray[i].customerSalary;

        let row = `<tr><td>${id}</td><td>${name}</td><td>${address}</td><td>${salary}</td></tr>`;
        $("#customerTbl").append(row);
    }
}

function clearSearchCustomerFields() {
    $("#txtSearchItemId").val('');
    $("#txtSearchItemId").css('border','1px solid #ced4da');
}

function clearAllCustomerFields() {
    $("#txtCustomerId").val('');
    $("#txtCustomerName").val('');
    $("#txtCustomerAddress").val('');
    $("#txtCustomerSalary").val('');

    $("#txtCustomerId").css('border','1px solid #ced4da');
    $("#txtCustomerName").css('border','1px solid #ced4da');
    $("#txtCustomerAddress").css('border','1px solid #ced4da');
    $("#txtCustomerSalary").css('border','1px solid #ced4da');
}



$("#btnAddCustomer").click(function () {
    addCustomer();
});

$("#btnUpdateCustomer").click(function () {
    updateCustomer();
});

$("#btnDeleteCustomer").click(function () {
    deleteCustomer();
});

$("#btnSearchCustomer").click(function () {
    searchCustomer($("#txtSearchCustomerId").val());
});



$("#txtSearchCustomerId").keyup(function (event) {
    if (customerIdRegEx.test($("#txtSearchCustomerId").val())) {
        $("#txtSearchCustomerId").css('border','3px solid green');
    }else{
        $("#txtSearchCustomerId").css('border','3px solid red');
    }
});
$("#txtCustomerId").keyup(function (event) {
    setCustomerButtons();

    if (customerIdRegEx.test($("#txtCustomerId").val())) {
        $("#txtCustomerId").css('border','3px solid green');
    }else{
        $("#txtCustomerId").css('border','3px solid red');
    }

    if (event.key === 'Enter' & customerIdRegEx.test($("#txtCustomerId").val())){
        $("#txtCustomerName").focus();
    }
});
$("#txtCustomerName").keyup(function (event) {
    setCustomerButtons();

    if (customerNameRegEx.test($("#txtCustomerName").val())) {
        $("#txtCustomerName").css('border','3px solid green');
    }else{
        $("#txtCustomerName").css('border','3px solid red');
    }

    if (event.key === 'Enter' & customerNameRegEx.test($("#txtCustomerName").val())){
        $("#txtCustomerAddress").focus();
    }
});
$("#txtCustomerAddress").keyup(function (event) {
    setCustomerButtons();

    if (customerAddressRegEx.test($("#txtCustomerAddress").val())) {
        $("#txtCustomerAddress").css('border','3px solid green');
    }else{
        $("#txtCustomerAddress").css('border','3px solid red');
    }

    if (event.key === 'Enter' & customerAddressRegEx.test($("#txtCustomerAddress").val())){
        $("#txtCustomerSalary").focus();
    }
});
$("#txtCustomerSalary").keyup(function (event) {
    setCustomerButtons();

    if (customerSalaryRegEx.test($("#txtCustomerSalary").val())) {
        $("#txtCustomerSalary").css('border','3px solid green');
    }else{
        $("#txtCustomerSalary").css('border','3px solid red');
    }
});


//////////////////////////////////////////////////////////////////

function validateCustomerId(){
    if (customerIdRegEx.test($("#txtCustomerId").val())) {
        $("#txtCustomerId").css('border','3px solid green');
    }else{
        $("#txtCustomerId").css('border','3px solid red');
    }
}
function validateCustomerName(){
    if (customerNameRegEx.test($("#txtCustomerName").val())) {
        $("#txtCustomerName").css('border','3px solid green');
    }else{
        $("#txtCustomerName").css('border','3px solid red');
    }
}
function validateCustomerAddress(){
    if (customerAddressRegEx.test($("#txtCustomerAddress").val())) {
        $("#txtCustomerAddress").css('border','3px solid green');
    }else{
        $("#txtCustomerAddress").css('border','3px solid red');
    }
}
function validateCustomerSalary(){
    if (customerSalaryRegEx.test($("#txtCustomerSalary").val())) {
        $("#txtCustomerSalary").css('border','3px solid green');
    }else{
        $("#txtCustomerSalary").css('border','3px solid red');
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////


function loadCustomerIds() {
    $("#cmbOrderCustId").empty();
    $('#cmbOrderCustId').append(new Option("Customer ID", ""));
    for (var i in customerArray){
        let id=customerArray[i].getId();
        $('#cmbOrderCustId').append(new Option(id, id));
    }
}



function setCustomerButtons() {
    let a = isCustomerExists($("#txtCustomerId").val());
    let b = customerIdRegEx.test($("#txtCustomerId").val()) & customerNameRegEx.test($("#txtCustomerName").val()) & customerAddressRegEx.test($("#txtCustomerAddress").val()) & customerSalaryRegEx.test($("#txtCustomerSalary").val());

    if (a) {
        $("#btnDeleteCustomer").attr('disabled', false);
        $("#btnUpdateCustomer").attr('disabled', false);
        $("#btnAddCustomer").attr('disabled', true);
    } else {
        $("#btnDeleteCustomer").attr('disabled', true);
        $("#btnUpdateCustomer").attr('disabled', true);
        $("#btnAddCustomer").attr('disabled', false);
    }

    if (b) {
        $("#btnDeleteCustomer").attr('disabled', false);
        $("#btnUpdateCustomer").attr('disabled', false);
        $("#btnAddCustomer").attr('disabled', false);
    } else {
        $("#btnDeleteCustomer").attr('disabled', true);
        $("#btnUpdateCustomer").attr('disabled', true);
        $("#btnAddCustomer").attr('disabled', true);
    }
}


function isCustomerExists(id){
    for(var i in customerArray){
        if(customerArray[i].getId()===id){
            return true;
        }
    }
    return false;
}



*/










const cusIDRegEx = /^(C-)[0-9]{5}$/;
const cusNameRegEx = /^[A-z ]{2,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{5,}$/;
const cusContactRegEx = /^(0)[0-9]{2}(-)[0-9]{7}$/;

let btnCusSearch = $("#btnSearchCustomer");
let btnCusSave = $("#btnAddCustomer");
let btnCusUpdate = $("#btnUpdateCustomer");
let btnCusDelete = $("#btnDeleteCustomer");

let txtCusSearch = $("#txtSearchCustomerId");
let txtCusID = $("#txtCustomerId");
let txtCusName = $("#txtCustomerName");
let txtCusAddress = $("#txtCustomerAddress");
let txtCusSalary = $("#txtCustomerSalary");

let cmbOrderCusId = $("#cmbOrderCustId");
let tblCustomer = $("#customerTbl");



txtCusID.keyup(function (event) {
    validateCustId();
    if (event.key === 'Enter' && cusIDRegEx.test(txtCusID.val())){
        txtCusName.focus();
    }
});
txtCusName.keyup(function (event) {
    validateCustName();
    if (event.key === 'Enter' && cusNameRegEx.test(txtCusName.val())){
        txtCusAddress.focus();
    }
});
txtCusAddress.keyup(function (event) {
    validateCustAddress();
    if (event.key === 'Enter' && cusAddressRegEx.test(txtCusAddress.val())){
        txtCusContact.focus();
    }
});
txtCusSalary.keyup(function (event) {
    validateCustContact();
});



$(document).ready(function() {
    loadAllCustomers();
    loadFromCustomerTable();
    setCustomerCombo();
});

btnCusSearch.click(function () {
    clearAllCustomerFields();

    $.ajax({
        url:"http://localhost:8080/Backend/customer?option=SEARCH&id="+txtCusSearch.val(),
        method:"GET",
        contentType:"application/json",
        success:function (jsonResp) {
            if(jsonResp.status===200){
                loadCustomerToFields(jsonResp.data);
            }else if(jsonResp.status===404){
                alert(jsonResp.message);
            }else{
                alert(jsonResp.data);
            }
        },
        error:function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }
    });

    function loadCustomerToFields(data) {
        txtCusID.val(data.id);
        txtCusName.val(data.name);
        txtCusAddress.val(data.address);
        txtCusSalary.val(data.salary);

        validateCustId();
        validateCustName();
        validateCustAddress();
        validateCustContact();
    }

    loadFromCustomerTable();

});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function loadFromCustomerTable() {

    $("#customerTbl>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();

        console.log(id, name, address, salary);

        txtCusID.val(id);
        txtCusName.val(name);
        txtCusAddress.val(address);
        txtCusSalary.val(salary);

        validateCustId();
        validateCustName();
        validateCustAddress();
        validateCustContact();
    });
}

function setCustomerCombo() {
    cmbOrderCusId.empty();
    cmbOrderCusId.append(new Option("Customer ID", ""));

    $.ajax({
        url:"http://localhost:8080/Backend/place-order?option=GET-ALL-CUSTOMER-IDS",
        method:"GET",
        contentType:"application/json",
        success:function (jsonResp) {
            if(jsonResp.status===200){
                for (let i=0; i<jsonResp.data.length; i++) {
                    let id=jsonResp.data[i].id;
                    cmbOrderCusId.append(new Option(id, id));
                }
            }else if(jsonResp.status===404){
                alert(jsonResp.message);
            }else{
                alert(jsonResp.data);
            }
        },
        error:function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }
    });

}

function clearAllCustomerFields() {
    txtCusID.val('');
    txtCusName.val('');
    txtCusAddress.val('');
    txtCusSalary.val('');

    txtCusID.css('border','1px solid #ced4da');
    txtCusName.css('border','1px solid #ced4da');
    txtCusAddress.css('border','1px solid #ced4da');
    txtCusSalary.css('border','1px solid #ced4da');
}

function loadAllCustomers() {

    $.ajax({
        url:"http://localhost:8080/Backend/customer?option=GET-ALL",
        method:"GET",
        contentType:"application/json",
        success:function (jsonResp) {
            if(jsonResp.status===200){
                loadCustomerTable(jsonResp.data);
            }else if(jsonResp.status===404){
                alert(jsonResp.message);
            }else{
                alert(jsonResp.data);
            }
        },
        error:function (ob, textStatus, error) {
            console.log(ob);
            console.log(textStatus);
            console.log(error);
        }
    });

    function loadCustomerTable(data) {
        tblCustomer.empty();

        for (let i=0; i<data.length; i++){
            let id=data[i].id;
            let name=data[i].name;
            let address=data[i].address;
            let salary=data[i].salary;

            let row = `<tr scope="row"><td>${i+1}</td><td><a href="#">${id}</a></td><td>${name}</td><td>${address}</td><td>${salary}</td></tr><tr class="spacer"><td colspan="100"></td></tr>`;
            tblCustomer.append(row);
        }
    }
}

function validateCustId(){
    if (cusIDRegEx.test(txtCusID.val())) {
        txtCusID.css('border','3px solid green');
    }else{
        txtCusID.css('border','3px solid red');
    }
}
function validateCustName(){
    if (cusNameRegEx.test(txtCusName.val())) {
        txtCusName.css('border','3px solid green');
    }else{
        txtCusName.css('border','3px solid red');
    }
}
function validateCustAddress(){
    if (cusAddressRegEx.test(txtCusAddress.val())) {
        txtCusAddress.css('border','3px solid green');
    }else{
        txtCusAddress.css('border','3px solid red');
    }
}
function validateCustContact(){
    if (cusContactRegEx.test(txtCusSalary.val())) {
        txtCusSalary.css('border','3px solid green');
    }else{
        txtCusSalary.css('border','3px solid red');
    }
}




