<script setup>
    import{getStudents} from "../firebaseFuctions/getStudents"
   const {students,gettingData,addStudent,getAllStudents, student} = getStudents()
   getAllStudents()
  </script>

<template>
    <div>
        <p class="text-xl font-bold">STUDENT <span class="text-primary">DETAILS</span></p>
    </div>

    <!-- student details card -->
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <div class="mb-4">
        <p>Student Id</p>
        <p class="uppercase">{{ student.id }}</p>
        <p>Lastname</p>
        <p class="uppercase">{{ student.Lastname}}</p>
        <p>Firstname</p>
        <p class="uppercase">{{ student.Firstname }}</p>
        <p>Middlename</p>
        <p class="uppercase">{{ student.Middlename }}</p>
        <p>School</p>
        <p>{{ student.school }}</p>
       </div>
      </form>
    </div>

    <div>
      <form>
        <div>KCPE: {{ student.kcpe }}</div>
      </form>
    </div>

    <router-link :to="{ path: '/tableview' }"> <button class="btn btn-md btn-primary py-2 px-4 rounded-full"> Back </button> </router-link>

</template>