function OrderDTO(orderId,customerId,orderDate,orderTime,cost,detailList){

    this.orderId=orderId;
    this.orderDate=orderDate;
    this.orderTime=orderTime;
    this.orderCustomerId=customerId;
    this.orderCost=cost;
    this.detailList=detailList;

    this.getId = function () {
        return this.orderId;
    }
    this.setId = function (id) {
        this.orderId = id;
    }

    this.getDate = function () {
        return this.orderDate;
    }

    this.setOrderTime=function(orderTime){
        this.orderTime=orderTime;
    }
    this.getOrderTime=function(){
        return this.orderTime;
    }

    this.setName = function (date) {
        this.orderDate = date;
    }
    this.getCustomerId = function () {
        return this.orderCustomerId;
    }

    this.setCustomerId = function (customerId) {
        this.orderCustomerId = customerId;
    }
    this.getOrderItem = function () {
        return this.orderItem;
    }

    this.setOrderCost= function (orderCost) {
        this.orderCost = orderCost ;
    }
    this.getOrderCost = function () {
        return this.orderCost;
    }
    this.getDetailList = function () {
        return this.detailList;
    }

    this.setDetailList= function (detailList) {
        this.detailList = detailList ;
    }
}