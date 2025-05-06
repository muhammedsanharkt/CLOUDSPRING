
function appendValue(val) {
    document.getElementById("expression").value += val;
  }
  // Function to calculate the result of the expression
  function calculate() {
    const input = document.getElementById("expression").value;
  
    try {
      const result = eval(input);
      if (!isFinite(result)) {
        document.getElementById("expression").value = "Error";
      } else {
        document.getElementById("expression").value = result;
      }
    } catch {
      document.getElementById("expression").value = "Invalid";
    }
  }
  // Function to clear the input field
  function clearAll() {
    document.getElementById("expression").value = "";
  }
  // Function to clear the last character from the input field
  function backspace() {
    const input = document.getElementById("expression").value;
    document.getElementById("expression").value = input.slice(0, -1);
  }

