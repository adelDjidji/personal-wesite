import React from 'react';

export default function register(props) {
    return <div className="main h-full register-main web-svg" >


        <h1 className="block text-4xl font-bold uppercase text-center mt-6">Web training</h1>
        <h2 className="block text-xl uppercase text-center mt-2">Introduction</h2>

        <a className="typeform-share button text-white font-bold uppercase"
            href="https://form.typeform.com/to/g3nmY2ac?typeform-medium=embed-snippet"
            data-mode="popover"
        // rel="noreferrer"
        //  target="_blank"
        >
            Register
            {/* <span class="icon">
                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' style={{ marginTop: 6 }}> <path d='M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z' fill='white' /> </svg>
            </span> */}
             </a>
             <a className="about button font-bold uppercase"
            href="/"
            rel="noreferrer"
            target="_blank"
        >
            About the trainer
             </a>
    </div>
};
