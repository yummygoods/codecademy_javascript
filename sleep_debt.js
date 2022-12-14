const getSleepHours = day => {
    switch (day) {
      case 'monday':
      return 8;
      break;
   
      case 'tuesday':
        return 6;
        break;
   
      case 'wednesday' :
         return 7;
         break;
   
         case 'thursday' :
           return 3;
           break;
   
           case 'friday' :
           return 5;
           break;
   
            case 'saturday' :
           return 7;
           break;
   
           case 'sunday' :
           return 5;
           break;
      }
    }
   
    
   /* test
   console.log(getSleepHours('friday')); */
   
   let getActualSleepHours = () =>  
     getSleepHours('monday')
     + getSleepHours('tuesday')
     + getSleepHours('wednesday')
     + getSleepHours('thursday')
     + getSleepHours('friday')
     + getSleepHours('saturday')
     + getSleepHours('sunday')
   
    
   console.log(getActualSleepHours());
   
   let getIdealSleepHours = () => {
   let idealHours = 8;
   return idealHours * 7;
   }
   console.log(getIdealSleepHours());
   
   let calculateSleepDebt = () => {
   let actualSleepHours = getActualSleepHours();
   let idealSleepHours = getIdealSleepHours() ;
   if (actualSleepHours === idealSleepHours){
     console.log(`You got ${actualSleepHours} which is the perfect amount of sleep!`)}
     else if ( actualSleepHours > idealSleepHours){
     console.log(`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed!`)
   }
     else{
     console.log(`You  need to get some rest, buddy. You are under your target by ${idealSleepHours - actualSleepHours} hours!`)
   } 
   }
   
   calculateSleepDebt()


   /* 

For extra practice, try these:

getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.

Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.

To see the solutions, open the hint. 
https://www.codecademy.com/courses/introduction-to-javascript/projects/sleep-debt-calculator */