 class Ducktypium {
          
            constructor(color) {
              // your code here      
                    this.color = color;
                    this.calibrationSequence = new Array();

                    switch(color){
                      case "red":
                        break;
                      case "blue":
                        break;
                      case "yellow":
                        break;
                      default:
                        throw new Error('Please insert the right color')
                    }
            }

            
            // your code here
     
          calibrate(y){
              
              var newArr = y.sort((a, b) => a-b)
              

              this.calibrationSequence = newArr.map(x => x * 3);
              
          }
          
          
          refract(x){
            if(this.color === "red"){
              if(x === "red"){
                return "red";
              }else if(x === "blue"){
                return "purple";
              }else if(x === "yellow"){
                return "orange";
              }
            }

            if(this.color === "blue"){
              if(x === "red"){
                return "purple";
              }else if(x === "yellow"){
                return "green";
              }else if(x === "blue"){
                return "blue";
              }
            }

            if(this.color === "yellow"){
              if(x === "red"){
                return "orange";
              }else if(x === "yellow"){
                return "yellow";
              }else if(x === "blue"){
                return "green";
              }
            }
            
          }

        }
          
          // The following lines of code are not required for the solution, but can be
          // used by you to test your solution.
          const dt = new Ducktypium('red');
          
          console.log(dt.color); // prints 'red'
          
          console.log(dt.refract('blue')); // prints 'purple'
          console.log(dt.refract('red')); // prints 'red'
          
          dt.calibrate([3, 5, 1]);
          
          console.log(dt.calibrationSequence); // prints [3, 9, 15]