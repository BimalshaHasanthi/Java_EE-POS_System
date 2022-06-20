package entity;

public class Customer {
    private String customerId;
    private String name;
    private String address;
    private String salary;

    public Customer() {
    }

    public Customer(String customerId, String name, String address, String salary) {
        this.customerId = customerId;
        this.name = name;
        this.address = address;
        this.salary = salary;
    }

    public String getCustomerId() {
        return customerId;
    }

    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "customerId='" + customerId + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", salary='" + salary + '\'' +
                '}';
    }
}
