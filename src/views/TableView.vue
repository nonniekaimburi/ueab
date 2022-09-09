<script setup>
  import{getStudents} from "../firebaseFuctions/getStudents"
 const {students,gettingData,addStudent,getAllStudents, student} = getStudents()
 getAllStudents()
</script>


<template>
  <div>
    <div class="overflow-x-auto">
      <div class="w-full text-right">
            <router-link :to="{ path: '/addfile'}"><button class="btn btn-md btn-primary">+ Add File</button></router-link>
        </div>
      <table class="table  w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Student Id</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>MiddleName</th>
            <th>School</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <router-link :to="{ path: '/student' } + student.id + '/show'">             
           <tr v-for="(student,index) in students" :key="student.id">              
              <td>{{index +1}}</td>
              <td class="uppercase">{{ student.id }}</td>
              <td>{{ student.Lastname }}</td>
              <td>{{ student.Firstname }}</td>
              <td>{{ student.Middlename }}</td>
              <td>{{student.school}}</td>
              <td class="text-green-500">Present</td>
              <td class="flex gap-1">
                <button class="btn btn-xs btn-secondary">retrive</button>
                <button class="btn btn-xs btn-success">Return</button>
                <button class="btn btn-xs btn-primary">History</button>
              </td>          
            </tr>
          </router-link>
        </tbody>
        <tfoot>


        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompactTable"
}
</script>

<style scoped>
</style>
