const button = function(username){
        if (username == "admin"){
          document.getElementById("Hi").classList.remove("hide");
          document.getElementById("Animal").classList.remove("hide");
          document.getElementById("Log").classList.add("hide");
        }
        else if (username == "student"){
          document.getElementById("Hi").classList.remove("hide");
          document.getElementById("Animal").classList.add("hide");
          document.getElementById("Log").classList.add("hide");
        }
        else{
          document.getElementById("Hi").classList.add("hide");
          document.getElementById("Animal").classList.add("hide");
          document.getElementById("Log").classList.add("hide");
        }
      }

      function Login(){
        document.getElementById("Log2").classList.add("hide");
        let username = prompt("Enter Username");
        if( username == "admin"){
          alert(`Hello ${username}`);
        } 
        else if(username == "student"){
          alert(`Hello ${username}`);
        }
        else{
          alert("I dont know you");
          document.getElementById("Log2").classList.remove("hide");
        }
      button(username);
      }

      function Hi(){
        let lan = prompt("Enter Language");
        switch (lan){
          case "Eng":
            message = "Hello!"
            break;
          case "Fr":
            message = "Bonjour!"
            break;
          case "De":
            message = "Hallo!"
            break;
          case "Spa":
            message = "Hola!"
            break;
          default:
            message = "Sorry But I do not speak that language"
        }
        alert(`${message}`)
      }

      function Animal(){
        let age = prompt("Enter Age");
        document.getElementById("18").classList.add("hide");
        document.getElementById("Cat").classList.add("hide");
        document.getElementById("Dog").classList.add("hide");
        document.getElementById("Frog").classList.add("hide");
        document.getElementById("Mouse").classList.add("hide");
        if (age >= 18){
          document.getElementById("18").classList.remove("hide");
          if (age < 55){
            let lan = prompt("Enter Animal");
            switch (lan){
              case "Cat":
                document.getElementById("Cat").classList.remove("hide");
                break;
              case "Dog":
                document.getElementById("Dog").classList.remove("hide");
                break;
              case "Frog":
                document.getElementById("Frog").classList.remove("hide");
                break;
              case "Mouse":
                document.getElementById("Mouse").classList.remove("hide");
                break;
              default:
                message = "Sorry But I do not know that Animal"
            }
          }
          else if (age > 55){
            document.getElementById("55").classList.remove("hide");
          }
        }
        else if (age < 18){
          alert("Content is not available due to age restrictions");
        }
      }

      const NWP = function(){
        let age = prompt("Enter Age");
        let year = prompt("Enter Year of Admission to NWP");
        age = 4 + parseInt(age);
        year = 4 + parseInt(year);
        alert(`You will complete your Bachelor Degree in CS at Age: ${age} in Year: ${year}`);
      }

      const XD = function(){
        let age = prompt("Enter Age");
        let port = prompt("Enter Number of portfolios");
        if (age >= 14 && age <= 18){
          if (port >= 5 && port <= 10){
            alert("You are Eliagble for a 10% discount on Adobe XD")
          }
        }
        if (age > 18){
          if (port >= 10 && port <= 20){
            alert("You are Eliagble for a 7% discount on Adobe XD")
          }
        }
      }

      const QA = function(){
        let age = prompt("Enter Age");
        let port = prompt("Enter Number of portfolios");
        if (age >= 14 && age <= 18){
          if (port >= 5 && port <= 10){
            alert("You are Eliagble for a 10% discount on Adobe QA Pro")
          }
        }
        if (age > 18){
          if (port >= 10 && port <= 20){
            alert("You are Eliagble for a 7% discount on Adobe QA Pro")
          }
        }
      }

      function Login2(){
        document.getElementById("Log").classList.add("hide");
        let user = prompt("Enter Username");
        if( user == "admin" || user == "Admin" || user == "ADMIN" ){
          let pass = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
          alert(`password: ${pass}`);
          for (let i = 1; i <= 2; i++){
            let password = prompt("Enter Password");
            if(pass == password){ 
              break;
            }
            else{
              if( i == 1){
                alert("Wrong Password Enter. Please Try Again");
              }
              else{
                alert("Incorrect Pasword entered too many times");
                document.getElementById("Log").classList.remove("hide");
                return;
              }
            }
          }
          NWP()
        } 
        else if(user == "designer"){
          for (let i = 1; i <= 3; i++){
            let password = prompt("Enter Password");
            if(111 == password){
              break;
            }
            else{
              if( i == 1 || i == 2){
                alert("Wrong Password Enter. Please Try Again");
              }
              else{
                alert("Incorrect Pasword entered too many times");
                document.getElementById("Log").classList.remove("hide");
                return;
              }
            }
          }
          XD();
        }
        else if(user == "tester"){
          for (let i = 1; i <= 3; i++){
            let password = prompt("Enter Password");
            if(222 == password){
              break;
            }
            else{
              if( i == 1 || i == 2){
                alert("Wrong Password Enter. Please Try Again");
              }
              else{
                alert("Incorrect Pasword entered too many times");
                document.getElementById("Log").classList.remove("hide");
                return;
              }
            }
          }
          QA();
        }
        else{
          alert("No such user found");
        }
      }
