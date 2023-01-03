{




  const age = 9
  let text

  const days = ['S','M','T','W','TH','F','S']

  const d = new Date()
  const countDay = d.getDay()

   

if(countDay === 0){

    text = days[0]
      
}else if( countDay === 1){
      
    text = days[1]
}else if(countDay === 2){

     text = days[2]
}else{

     text = 'No match'
}




console.log(text)
}

{

    const days = ['S','M','T','W','TH','F','S']

    const d = new Date()
    const countDay = d.getDay()
  
     
     switch(new Date().getDay()){
  
        case 0 :
         text = days[0]
        break
        case 1:
          text = days[1]
          break
          case 2 :
          text = days[2]
  
          default:
              text = 'No match'
  
  
     }
  
  
  
  console.log(text)
}

{


  const days = ['S','M','T','W','TH','F','S']
  text = "";
    
  
   for(let i = 1; i < 10; i++ ){

       text += i + " "

   }
    
     


console.log(text)
}


{


    let text = ""

  const days = ['S','M','T','W','TH','F','S']

   const Person =  {

          name: 'abdulazeez',
          country: 'Nigeria',
          H: '5.7'
   }


     for(let x in days){

         text += days[x] + " "
    }
     

  
     


console.log(text)
}

{


  
   let text = ""

   const days = ['S','M','T','W','TH','F','S']
 
 
      for(let x of days){
 
          text += x + " "
     }
      
 
 console.log(text)
}

{


   let text = ""
   
   let i = 0

   while(i < 10){
 
         text += i + " "

         i++   
   }
    


console.log(text)
}

{

    let text = ""
   
    let i = 30



    do{

         text += i + " "
         i++
    }while(i < 10)
     


console.log(text)
}