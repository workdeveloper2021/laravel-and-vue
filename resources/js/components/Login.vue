<template>
    <div class="main-div">
        <div class="container-login">
            <h1>Please login</h1>
            <form >
                <div class="form-group">
                    <label for="email" >Email</label>
                    <input type="email" class="form-control" name="email" id="email" >
                    
                </div>
                <div class="form-group">
                    <label for="password">password</label>
                    <input type="password" class="form-control" name="password" id="password" >
                    <a href="/dashboard" class="btn btn-primary">Login</a>
                    <!-- <button class="btn btn-primary">Login </button>          -->
                    
                    <!-- <p class="text">
                        Don't have an account <a href="">Register</a>
                    </p> -->
    
                </div>
            </form>
        </div>
    </div>
 </template>
 
 <script>
     export default {
         mounted() {
             console.log('Component mounted.')
         }
     }
 </script>
 