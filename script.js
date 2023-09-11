window.onload = function() {
  document.getElementById("calculate-btn").addEventListener("click", calculateCalories);
};

function calculateCalories() {
  var gender = document.getElementById("gender").value; // Obtém o gênero selecionado
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var age = parseInt(document.getElementById("age").value);
  var activityLevel = parseFloat(document.getElementById("activity-level").value);

  // Cálculo das necessidades calóricas diárias
  var bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Fórmula para homens
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Fórmula para mulheres
  }
  
  var totalCalories = Math.round(bmr * activityLevel);

  // Cálculo dos macronutrientes
  var proteinPercentage = 0.4; // 40% de proteína
  var carbPercentage = 0.4; // 40% de carboidrato
  var fatPercentage = 0.2; // 20% de lipídio

  var proteinCalories = Math.round(totalCalories * proteinPercentage);
  var carbCalories = Math.round(totalCalories * carbPercentage);
  var fatCalories = Math.round(totalCalories * fatPercentage);

  var proteinGrams = Math.round(proteinCalories / 4);
  var carbGrams = Math.round(carbCalories / 4);
  var fatGrams = Math.round(fatCalories / 9);

  // Exibição dos resultados
  document.getElementById("calories").innerHTML = "Total de Calorias: " + totalCalories + " kcal";
  document.getElementById("protein").innerHTML = "Prote\u00ednas: " + proteinGrams + "g (" + proteinCalories + " kcal - " + (proteinPercentage * 100) + "%)";
  document.getElementById("carbs").innerHTML = "Carboidratos: " + carbGrams + "g (" + carbCalories + " kcal - " + (carbPercentage * 100) + "%)";
  document.getElementById("fat").innerHTML = "Gorduras: " + fatGrams + "g (" + fatCalories + " kcal - " + (fatPercentage * 100) + "%)";

  // Exibição da seção de resultados
  document.getElementById("results").classList.remove("hidden");
}