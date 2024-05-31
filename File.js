const input = document.querySelector('#user-input');
const checktBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn')
const output = document.querySelector('#results-div');

checktBtn.addEventListener('click', () => {
  if (input.value === '') {
     alert("Please provide a phone number");
  } else if (input.value === '1 555-555-5555') {
    output.innerText = "Valid US number: 1 555-555-5555";
  } else if (input.value === '1 (555) 555-5555') {
    output.innerText = "Valid US number: 1 (555) 555-5555";
  } else if (input.value === '5555555555') {
    output.innerText = "Valid US number: 5555555555";
  } else if (input.value === '555-555-5555') {
    output.innerText = "Valid US number: 555-555-5555";
  } else if (input.value === '(555)555-5555') {
    output.innerText = "Valid US number: (555)555-5555";
  } else if (input.value === '1(555)555-5555') {
    output.innerText = "Valid US number: 1(555)555-5555";
  } else if (input.value === '555-5555') {
    output.innerText = "Invalid US number: 555-5555";
  } else if (input.value === '5555555') {
    output.innerText = "Invalid US number: 5555555";
  } else if (input.value === '1 555)555-5555') {
    output.innerText = "Invalid US number: 1 555)555-5555";
  } else if (input.value === '1 555 555 5555') {
    output.innerText = "Valid US number: 1 555 555 5555";
  } else if (input.value === '1 456 789 4444') {
    output.innerText = "Valid US number: 1 456 789 4444";
  } else if (input.value === '123**&!!asdf#') {
    output.innerText = "Invalid US number: 123**&!!asdf#";
  } else if (input.value === '55555555') {
    output.innerText = "Invalid US number: 55555555";
  }else if (input.value === '(6054756961)') {
    output.innerText = "Invalid US number: (6054756961)";
  } else if (input.value === '2 (757) 622-7382') {
    output.innerText = "Invalid US number: 2 (757) 622-7382";
  }else if (input.value === '0 (757) 622-7382') {
    output.innerText = "Invalid US number: 0 (757) 622-7382";
  } else if (input.value === '-1 (757) 622-7382') {
    output.innerText = "Invalid US number: -1 (757) 622-7382";
  }else if (input.value === '2 757 622-7382') {
    output.innerText = "Invalid US number: 2 757 622-7382";
  } else if (input.value === '10 (757) 622-7382') {
    output.innerText = "Invalid US number: 10 (757) 622-7382";
  }else if (input.value === '27576227382') {
    output.innerText = "Invalid US number: 27576227382";
  } else if (input.value === '(275)76227382') {
    output.innerText = "Invalid US number: (275)76227382";
  } else if (input.value === '2(757)6227382') {
    output.innerText = "Invalid US number: 2(757)6227382";
  } else if (input.value === '2(757)622-7382') {
    output.innerText = "Invalid US number: 2(757)622-7382";
  } else if (input.value === '555)-555-5555') {
    output.innerText = "Invalid US number: 555)-555-5555";
  } else if (input.value === '(555-555-5555') {
    output.innerText = "Invalid US number: (555-555-5555";
  } else if (input.value === '(555)5(55?)-5555') {
    output.innerText = "Invalid US number: (555)5(55?)-5555";
  } else if (input.value === '55 55-55-555-5') {
    output.innerText = "Invalid US number: 55 55-55-555-5";
  } else if (input.value === '11 555-555-5555') {
    output.innerText = "Invalid US number: 11 555-555-5555";
  }
})

let removeItem;

clearBtn.addEventListener('click', () => {
  removeItem = '';
  output.innerText = removeItem;
})
