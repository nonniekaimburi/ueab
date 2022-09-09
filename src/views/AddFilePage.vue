
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
          <input type="checkbox" id="kcse" value="kcse" v-model="student.kcse">
          <label for="kcse"> KCSE</label> <br><br>
          <input type="checkbox" id="kcpe" value="kcpe" v-model="student.kcpe">
          <label for="kcpe"> KCPE</label> <br><br>
          <input type="checkbox" id="appform" value="appform" v-model="student.appform">
          <label for="appform"> Application Form</label> <br><br>
          <input type="checkbox" id="birthcert" value="birthcert" v-model="student.birthcert">
          <label for="birthcert"> Birth Certificate</label> <br><br>

          <div>
            <input type="text" v-model="student.addition" class="rounded" placeholder="Enter Additional Forms present"><br><br>
            <input type="text" v-model="student.addition1" class="rounded" placeholder="Enter Additional Forms present"><br><br>
            <input type="text" v-model="student.addition2" class="rounded" placeholder="Enter Additional Forms present"><br><br>
          </div>
        </form>
     </div>     
     <router-link :to="{ path: '/tableview' }"><button @click="addStudent" class="btn btn-md btn-primary">Add this File</button></router-link>  
   
</template>
<script setup lang="ts">
    import{getStudents} from "../firebaseFuctions/getStudents"
   const {students,gettingData,addStudent,getAllStudents, student} = getStudents()
   getAllStudents()

</script>
