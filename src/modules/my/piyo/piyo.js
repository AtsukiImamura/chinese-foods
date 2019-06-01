import { LightningElement, api } from 'lwc';

export default class Piyo extends LightningElement {
    contacts = [
        {
            Id: '003171931112854375',
            Name: 'Amy Taylor',
            Title: 'COO'
        },
        {
            Id: '003192301009134555',
            Name: 'Michael Jones',
            Title: 'CTO'
        }
    ];

    addContacts() {
        console.log('addContacts');
        this.contacts.push({
            Id: '003848991274589432',
            Name: 'Jennifer Wu',
            Title: 'CEO'
        });
    }
}
