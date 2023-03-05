export function printAge(age){
 console.log('Age: ' + age)
}



class CustomerDetails {

    printFirstName(firstname){
        console.log(firstname)
    }

    /**
     * This method is called when the user would like to print the lastname
     * @param {string} lastname 
     */
    printLastName(lastname){
        console.log(lastname)
    }
}

export const customerDetails = new CustomerDetails()