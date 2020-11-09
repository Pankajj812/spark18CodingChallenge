function createCategoriesMap(ingredients) {
    let categoriesMap = { FAT: 0, CARB: 0, FIBER: 0 };
    for (key of ingredients) {
      if (key.includes("FAT")) {
        categoriesMap.FAT += 1;
      } else if (key.includes("CARB")) {
        categoriesMap.CARB += 1;
      } else {
        categoriesMap.FIBER += 1;
      }
    }
    return categoriesMap;
  }
  
  function checkForDish(ingredients , deletedIngredents) {
    //Removing ingredienys from array whic are already used
    ingredients = ingredients.filter(val => !deletedIngredents.includes(val));
    //Mapping Categories with number of count
    let categoryMap = createCategoriesMap(ingredients);
    if (ingredients.length >= 3  && Object.values(categoryMap).find(ele=>ele>1)) {
      if (Object.values(categoryMap).find((ele) => ele > 1)) {
        let arr = [];
        for(let key in categoryMap){
          if(categoryMap[key] >=2){
            arr.push(key);
          }
        }
        let count = 0;
        ingredients =  ingredients.filter((ele )=>{
          if(ele.includes(arr[0])){
            count++;
            deletedIngredents.push(ele);
          }else{
            return ele;
          }
        })
        if(count ===2){
         let  deleted = ingredients.shift();
          deletedIngredents.push(deleted);
        }
      }
      return 1;
    }
    return 0;
  }
  
  function chefsDish(ingredients) {
    let respnseArrr = [];
    //Assuming test cases are seperated by spaces
    let splittedIngredients = ingredients.split(" ");
    let ingredientsArr = [];
    let deletedIngredents = []
    for (let item of splittedIngredients) {
      ingredientsArr.push(item);
      respnseArrr.push(checkForDish(ingredientsArr , deletedIngredents));
    }
    return respnseArrr;
  }
  
  
  
  let testCases = ["FATOil FIBERSpinach CARBRice FATCheese FIBERBeans" ,  "FATOil FATCheese FATEgg FIBERSpinach CARBRice FIBERBeans" , "FATOil FIBERSpinach CARBRice FATCheese FIBERBeans FATEgg FIBERBroccoli CARBPotato CARBCorn FATOlive FIBERCarrot CARBBeetroot"]
  
  //Running Test Cases
  for(let test of testCases){
    let result = chefsDish(test);
    console.log('Result', result.join(''));
  }
  
