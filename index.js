    
     //** DOCUMENTATION PROCESS FOR PASSWORD MANAGER*/
      
     /*
        JS CODE FOR PASSWORD MANAGER...
     */

   // Accessing the input fields wrt their ids
   let websitName = document.getElementById("websitename")
   let userName = document.getElementById("username")
   let password = document.getElementById("password")
   let tableBody = document.querySelector("tbody")
   let buttonClick = document.getElementById("create")
   let copy  = document.getElementById("copy")
   
  /* Adding event listener to the button object */
    buttonClick.onclick = () => {
  
      /* Checking whether all the input fields are filled properly.*/
        if(userName.value !== '' && password.value !== '' && websitName.value !== ''){
            tableBody.innerHTML += `
              <tr>
                <td>${websitName.value}</td>
                <td>${userName.value}</td>
                <td>${password.value}</td>
                <td><button>Delete</button></td>
                <td><button class="btn">Edit</button></td>
              </tr>
             `
             /** Save the data to the local storage */
              saveData();
  
              /** Clearing the data in the input fields.*/
              websitName.value=''
              password.value=''
              userName.value=''
        }
        else{
          alert('Please Enter all the fields !')
        }
    }
  
  
  
    // Save data in local storage
    const saveData = () => {
        localStorage.setItem('data' , tableBody.innerHTML)  
        
    }
     
   
    // Retrieve Data from local storage
    const getData = () => {
      tableBody.innerHTML = localStorage.getItem("data")
    }
  
   getData();
   
   // Remove the item according to the user call
   tableBody.addEventListener("click", function(e){
  
      if(e.target.innerHTML == 'Delete')
     {
          e.target.parentElement.parentElement.remove();
          saveData();
     }
  
       else if(e.target.innerHTML == "Edit")
       {
          let rows = document.getElementsByTagName('tr')
         
          for(let row of rows){
          let currCell = row.getElementsByTagName('td')
          if(e.target.parentElement != currCell[4]){
                 continue;
          }
            else{
  
            websitName.value = currCell[0].innerText
            userName.value = currCell[1].innerText
            password.value = currCell[2].innerText
            saveData();
            row.remove();
            break;
          }
         }//for-loop
        
      }
      saveData();
  
      });
      