function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update case total 
    const caseTotal = document.getElementById(product, '-total');
    caseTotal.innerText = productNumber * price ;
}

    // phone increase decrease event 
    document.getElementById('phone-plus').addEventListener('click', function() {
       updateProductNumber('phone', 1219, true)
    });
    document.getElementById('phone-minus').addEventListener('click', function() {
       updateProductNumber('phone', 1219, false)
    });


    // case increase decrease event 
document.getElementById('case-plus').addEventListener('click', function() {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateProductNumber('case', 59, true);
}) ;

document.getElementById('case-minus').addEventListener('click', function() {
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateProductNumber('case', 59, false);
  
});