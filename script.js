function showForm(loanType) {
    document.getElementById("apply-form").style.display = "block";
    document.getElementById("loan-type").value = loanType;
}

document.getElementById("loan-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Yêu cầu của bạn đã được gửi!");
});