import { LightningElement } from 'lwc';
import Harish from '@salesforce/resourceUrl/Harish';

export default class SideNavigation extends LightningElement {
    resourceUrl = Harish;
    message;
    isModalOpen = false;

    handleClick(event) {
    
        console.log('clicked');
        const buttonLabel = event.target.dataset.label;

        this.isModalOpen = true;
        if (buttonLabel === 'Home') {
            this.message ='Home button clicked!';
        } else if (buttonLabel === 'Application') {
            this.message ='Application button clicked!';
        
        } else if (buttonLabel === 'Details') {
            this.message ='Details button clicked!';
        }
        else if (buttonLabel === 'Logout') {
            this.message ='Logout button clicked!';
        } 


        // Open modal
    }

    closeModal() {
        this.isModalOpen = false; // Close modal
    }

    connectedCallback() {
        console.log('Component connected');
    }
}