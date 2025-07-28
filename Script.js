    function calculateArea() {
      const length = parseFloat(document.getElementById('length').value);
      const width = parseFloat(document.getElementById('width').value);
      const result = document.getElementById('result');

      if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        result.innerText = "❗ Please enter the numbers for both fields.";
        result.style.color = "red";
        return;
      }

      const area = length * width;
      result.innerText = `Area: ${area} square units`;
      result.style.color = "#333";
    }