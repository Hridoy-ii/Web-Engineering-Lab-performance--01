function validateForm() {
    const email = document.getElementById('emailInput').value.trim();
    const id = document.getElementById('yourIDInput').value.trim();
    const name = document.getElementById('nameInput').value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@diu\.edu\.bd$/;
    if (!emailPattern.test(email)) {
        alert('Invalid email. Must be @diu.edu.bd');
        return false;
    }

    const idPattern = /^\d{3}-\d{2}-\d{4}$/;
    if (!idPattern.test(id)) {
        alert('Invalid ID. Format should be XXX-XX-XXXX');
        return false;
    }

    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        alert('Invalid name. Only letters and spaces allowed');
        return false;
    }

    alert('Form validated successfully!');
    return true;
}