<template>
    <div class="container">
         <h1>Please login</h1>
         <form >
             <div class="form-group">
                 <label for="email" >Email</label>
                 <input type="email" class="form-control" name="email" id="email" required>
                
             </div>
             <div class="form-group">
                 <label for="password">password</label>
                 <input type="password" class="form-control" name="password" id="password" required>
                 
                 <button class="btn">Login </button>         
                 
                 <p class="text">
                     Don't have an account <a href="">Register</a>
                 </p>
 
              </div>
         </form>
     </div>
 </template>
 
 <script>
     export default {
         mounted() {
             console.log('Component mounted.')
         }
     }
 </script>
 