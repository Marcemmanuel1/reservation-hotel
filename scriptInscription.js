document.addEventListener('DOMContentLoaded', function() {
    const termsCheckbox = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    
    // Désactiver le bouton au chargement
    submitBtn.disabled = true;
    
    // Écouter les changements sur la checkbox
    termsCheckbox.addEventListener('change', function() {
        if(this.checked) {
            submitBtn.disabled = false;
            submitBtn.classList.add('active');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('active');
        }
    });
});