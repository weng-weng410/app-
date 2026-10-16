document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultDiv = document.getElementById('result');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');

    calculateBtn.addEventListener('click', calculateBMI);
    resetBtn.addEventListener('click', resetForm);

    // 按下 Enter 鍵也能計算
    heightInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateBMI();
    });
    weightInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') calculateBMI();
    });

    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // 驗證輸入
        if (!height || !weight || height <= 0 || weight <= 0) {
            alert('請輸入有效的身高和體重！');
            return;
        }

        // BMI 公式：體重 (kg) / 身高² (m²)
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBmi = bmi.toFixed(1);

        // 顯示結果
        bmiValue.textContent = roundedBmi;
        bmiCategory.textContent = getBMICategory(bmi);
        resultDiv.style.display = 'block';
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return '體重過輕';
        } else if (bmi < 24) {
            return '正常';
        } else if (bmi < 27) {
            return '過重';
        } else {
            return '肥胖';
        }
    }

    function resetForm() {
        heightInput.value = '';
        weightInput.value = '';
        resultDiv.style.display = 'none';
        bmiValue.textContent = '--';
        bmiCategory.textContent = '--';
        heightInput.focus();
    }
});