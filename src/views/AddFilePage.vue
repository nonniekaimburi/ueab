
<template>
    <div>
      <p class="text-xl font-bold">ADD <span class="text-primary">FILE</span></p>
   </div>
     <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div class="mb-4">
        <input type="text" v-model="student.id" class="rounded" placeholder="Student Id"><br><br>
        <input type="text" v-model="student.Lastname" class="rounded" placeholder="Student Lastname"><br><br>
        <input type="text" v-model="student.Firstname" class="rounded" placeholder="Student Firstname"><br><br>
        <input type="text" v-model="student.Middlename" class="rounded" placeholder="Student Middlename"><br><br>
        <select v-model="student.school">
          <option class="disabled" value=""> Select the school here.</option>
          <option> School of Business.</option>
          <option> School of Health Sciences.</option>
          <option> School of Nursing.</option>
          <option> School of Education, Humanities and Social Sciences.</option>
          <option> School of Science and Technology.</option>

        </select>
       </div>
      </form>
     </div>
     <div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <b>Which of the Following forms are present?</b><br>

          <label for="radio1"> 
            <input type="radio" class="appearance-none checked:bg-gray-900 checked:border-transparent ...">  KCSE
          </label><br>
          <label for="radio1"> 
            <input type="radio" class="appearance-none checked:bg-gray-900 checked:border-transparent ...">  KCPE
          </label><br>
          <label for="radio1"> 
            <input type="radio" class="appearance-none checked:bg-gray-900 checked:border-transparent ...">  Application Form
          </label><br>
          <label for="radio1">
            <input type="radio" class="appearance-none checked:bg-gray-900 checked:border-transparent ...">   Birth Certificate
          </label><br><br>
          <div>
            <input type="text" v-model="student.addition" class="rounded" placeholder="Enter Additional Forms present"><br><br>
            <input type="text" v-model="student.addition1" class="rounded" placeholder="Enter Additional Forms present"><br><br>
            <input type="text" v-model="student.addition2" class="rounded" placeholder="Enter Additional Forms present"><br><br>
          </div>
        </form>
     </div>       
     <router-link :to="{ path: '/tableview' }"><div @click="addStudent" class="transform motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 transition ease-in-out duration-300 text-primary font-bold btn btn-ghost rounded-full"></div>Add this file</router-link>

</template>
<script setup lang="ts">
    import{getStudents} from "../firebaseFuctions/getStudents"
   const {students,gettingData,addStudent,getAllStudents, student} = getStudents()
   getAllStudents()

</script>
