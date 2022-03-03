               
          // using while method

    var numb1 = 0;
    var total = 0;
    while (numb1<=100) {  
      if (numb1%3 == 0 && numb1%5 == 0) {
        total=total+numb1;
      }
      numb1=numb1+1
    }
    document.write(total);

            // using for method

      var add =0;
      for (i = 0; i <= 100; i++) {
        if (i%3 == 0 && i%5 ==0) {
          add = add+i; 
        }
      }
      document.write(add);
      
          // using do while method
      
      var i = 0;
      var total = 0;
      do {
          if (i%10==0 && i%5==0) {
            total = i+total; 
          }
          i = i+1;
      } while (i<=100);
      document.write(total);
      