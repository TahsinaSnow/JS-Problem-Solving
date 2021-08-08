 function animalCount(miles){
     const first10PerMiles = 10;
     const second10PerMiles = 50;
     const rest10PerMiles = 100;
    
     if(miles <= 10){
         const count = miles * first10PerMiles;
         return count;
     }

     else if( miles <= 20 ){
        const first10 = 10 * first10PerMiles;

        const restMiles = miles - 10;

        const second10 = restMiles * second10PerMiles;

        const totalAnimals =  first10 + second10;

        return totalAnimals;
     }

     else{
         const first10 = 10 * first10PerMiles;

         const second10 = 10* second10PerMiles;

         const restMiles = miles - 20;
         const restAnimals = restMiles * rest10PerMiles;

         const totalAnimals =  first10 + second10 + restAnimals;

         return totalAnimals;
     }
 }

 const animals = animalCount(25);
 console.log(animals);