// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.[done]
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
//factory function returns an object with new key value pairs
// YOUR CODE GOES BELOW HERE //
/*
a. create function called makeContact
   function will return an object based on the parameters:
   id, nameFirst and nameLast 
   */
function makeContact(id, nameFirst, nameLast) {
 
  return {
      id: id,
      nameFirst: nameFirst,
      nameLast: nameLast
  }; 
} 

/*
create a factory function called makeContactList
returns an object that manages contacts
contact-list object should have the following methods:
    - length(): returns the number of contacts within the list
    - addContact(contact): takes a contact object to be added to the contact-list
    -findContact(fullName): takes a fullName string (like Max Gaudin) and retunrs the contact object if found in the contacts-list
    OR
    - returns undefined if the fullName doesn't match any of the contacts on contact-list
    - removeContact(contact): takes a contact object and removes it from the contact-list
printAllContactNames() function should be added to makeContactList()
this funciton should
    - return a string formatted with all the fullNames of the contact list
    - fullNames should be seperated with a linebreak using
    -there should be no linebreak after the final fullName object+3
*/
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
       //length(): returns the number of contacts within the list
        length: function() {
            return contacts.length;
        }
        function addContact(contents) {
            
        }
    }
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
