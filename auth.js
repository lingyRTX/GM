document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('register-form').addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        const response = await fetch('/path/to/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password'),
                email: formData.get('email')
            })
        });

        const result = await response.json();
        
        if (result.success) {
            alert(result.message); // Сообщение об успешной регистрации
        } else {
            alert(result.message); // Сообщение об ошибке
        }
    });

});
