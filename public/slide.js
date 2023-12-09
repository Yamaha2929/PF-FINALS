  // Add JavaScript to toggle the 'slide-in' class
            document.addEventListener('DOMContentLoaded', function () {
                var loginForm = document.getElementById('loginForm');

                // Add an event listener to a trigger (e.g., a button) to toggle the class
                var triggerButton = document.getElementById('triggerButton'); // Add an ID to your trigger button
                if (triggerButton) {
                    triggerButton.addEventListener('click', function () {
                        loginForm.classList.toggle('slide-in');
                    });
                }
            });