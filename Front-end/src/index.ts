"use strict";

// Define types for HTML elements
const menuIcon: HTMLElement | null = document.querySelector('#menu-icon');
const navbar: HTMLElement | null = document.querySelector('.navbar');

// Toggle menu icon
if (menuIcon && navbar) {
    menuIcon.onclick = () => {

        navbar.classList.toggle('active');
    };
}

// Scroll sections
const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec: HTMLElement) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (id && top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach((link: HTMLAnchorElement) => {
                link.classList.remove('active');
                const activeLink = document.querySelector(`header nav a[href*=${id}]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
};

// Form validation
const contactForm: HTMLFormElement | null = document.getElementById('contact-form') as HTMLFormElement;

if (contactForm) {
    contactForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        // Get form inputs
        const formInputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = contactForm.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        formInputs.forEach((input: HTMLInputElement | HTMLTextAreaElement) => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '';
            }

            // Email validation
            if (input.type === 'email') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = 'red';
                }
            }

            // Phone validation
            if (input.type === 'tel') {
                const phonePattern = /^[0-9]{10}$/;
                if (!phonePattern.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = 'red';
                }
            }
        });

        if (isValid) {
            fetch('http://localhost:5000/api/v1/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullname: formInputs[0].value,
                    email: formInputs[1].value,
                    phone: formInputs[2].value,
                    subject: formInputs[3].value,
                    message: formInputs[4].value
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                contactForm.reset();
            })
            .catch(error => console.error('Error:', error));
        }
    });
}



