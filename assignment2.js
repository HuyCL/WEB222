/************************************************************************ *********
* WEB222 – Assignment 02
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: Huy Lam Student ID: 114705162 Date: 07/10/2018
* ********************************************************************************/

/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

var CustomerDB = {
    customers: [],
    addresses: [],
    stores: [],
    
    insertData: function(obj) {

        this.addStore(obj);
        this.addCustomer(obj);
        this.addAddress(obj);
        
    },
    
    addCustomer: function(customerObj) {
        
        for (var i = 0; i < customerObj.length; i++) {          // Loops through the provided Object
            
            if (customerObj[i].type === "customer") {           // Append the data if the condition is true
                customerObj[i].data.add_date = Date();
                this.customers.push(customerObj[i].data);
                
            }
        }
    },
    
    outputCustomerById(customer_id) {
        
        for (var i = 0; i < this.customers.length; i++) {           // Searches through 'customers' array to match the provided customer ID
            
            if (customer_id === this.customers[i].customer_id) {
      
                console.log("Customer " + customer_id + ": " + this.customers[i].first_name + " " + this.customers[i].last_name + " (" + this.customers[i].email + ")\n" +
                                   "Home Address: " + this.getAddressById(this.customers[i].address_id) + "\n" +
                                    "Joined: " + this.customers[i].add_date + "\n"
                            );
            
            }
            
        }
        
    },
    
    outputAllCustomers() {
        
        console.log("All Customers\n");
        
        this.customers.forEach(function(customer) {
            
            CustomerDB.outputCustomerById(customer.customer_id);
        });
    },
    
    outputCustomersByStore(store_id) {
                
        console.log("Customers in Store: " + this.getStoreById(store_id) + "\n");
                
        for (var x = 0; x < this.customers.length; x++) {           // forEach() can be used here instead of for loop
                    
            if (store_id === this.customers[x].store_id) {          // Checks if the given store ID matches with a customer
                        
               for (var c = 0; c < this.addresses.length; c++) {
                            
                   if (this.customers[x].address_id === this.addresses[c].address_id) {     // Look inside the 'addresses' array to look for customer's address
                                
                      console.log("Customer " + this.customers[x].customer_id + ": " + this.customers[x].first_name + " " + this.customers[x].last_name + " (" + this.customers[x].email + ")\n" +
                                  "Home Address: " + this.addresses[c].address + " " + this.addresses[c].city + ", " + this.addresses[c].province + ". " + this.addresses[c].postal_code + "\n" +
                                  "Joined: " + this.customers[x].add_date + "\n"
                                 );
                   }
               }
            }
        }        
    },
    
    removeCustomerById(customer_id) {
        
        var addressCopy;
        
        for (var i = 0; i < this.customers.length; i++) {               // This loop looks for customer ID in the database that matches the provided ID
            
            if (customer_id === this.customers[i].customer_id) {
                addressCopy = this.customers[i].address_id;             // Make a copy of the deleted customer Address ID
                this.customers.splice(i, 1);                            // Delete all the data of the matched customer ID
            }
        }
        
        this.removeAddressById(addressCopy);
        
    },
    
    addAddress(addressObj) {
        
        for (var i = 0; i < addressObj.length; i++) {
            
            if (addressObj[i].type === "address") {             // Loops through provided Object(allData) and append data if the condition is true
                this.addresses.push(addressObj[i].data);
                
            }
        }
    },
    
    getAddressById(address_id) {
  
        for (var i = 0; i < this.addresses.length; i++) {
            
            if (address_id === this.addresses[i].address_id) {  // Loops through provided Object(allData) and append data if the condition is true
                return this.addresses[i].address + " " + this.addresses[i].city + ", " + this.addresses[i].province + ". " + this.addresses[i].postal_code;
            }
        }
    },
    
    outputAllAddresses() {
      
        console.log("All Addresses\n");
        
        this.addresses.forEach(function(adrs) {
            
            console.log("Address " + adrs.address_id + ": " + adrs.address + " " + adrs.city + ", " + adrs.province + ". " + adrs.postal_code + "\n");
        });
    },
    
    removeAddressById(address_id) {
        
        var result = false;             // Bool is required for upcoming 'if' statements
        
        for (var x = 0; x < this.customers.length; x++) {       // This loop checks for any customer that have the same Address ID
                    
             if (address_id === this.customers[x].address_id) {       
                x = this.customers.length;                      // Loop ends when "addressCopy" is matched with another customer
                result = true;
              }
        }
        
        if (!result) {        // 'result' is false when the provided address ID does not have a match, use '!' to make
                              // 'result' true again to execute the 'if' statement
            for (var o = 0; o < this.stores.length; o++) {      // This loop checks for store that have the same Address ID
                        
                 if (address_id === this.stores[o].address_id) {
                     o = this.stores.length;                    // Ends the loop if "addressCopy" matches
                     result = true;
                 }   
            } 
        }
        
        if (!result) {        // If 'result' remain false, start the process of removing address
            
            for (var a = 0; a < this.addresses.length; a++) {       // Loops through 'addresses' array
                
                if (address_id === this.addresses[a].address_id) {
                    this.addresses.splice(a, 1);                    // Splice/Remove the address at index that the 'if' statement matches
                    a = this.addresses.length;
                }
            }
        }
    },
    
    addStore(storeObj) {
        
        for (var i = 0; i < storeObj.length; i++) {
            
            if (storeObj[i].type === "store") {
                this.stores.push(storeObj[i].data);
                
            }
        }
    },
    
    getStoreById(store_id) {
        
        for (var i = 0; i < this.stores.length; i++) {
            
            if (store_id === this.stores[i].store_id) {
                return this.stores[i].name;
            }
        }
    },
    
    outputAllStores() {
        
        console.log("All Stores\n");
        
        this.stores.forEach(function(store) {
            
            console.log("Store " + store.store_id + ": " + store.name + "\n" +
                       "Location: " + CustomerDB.getAddressById(store.address_id) + "\n"
                       );
        });
    }
};

/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 
