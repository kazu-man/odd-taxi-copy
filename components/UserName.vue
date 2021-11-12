<template>
  <div>
    <p>User FullName: {{ fullName }}</p>
    <p>User Message: {{ message }}</p>
  </div>
</template> 
 <script lang="ts">
 import { Vue, Component, Prop } from 'vue-property-decorator'

 interface User {
   familyName: string
   givenName: number
 }

 @Component
 export default class UserName extends Vue {
   @Prop({ type: Object, required: false }) readonly user!: User

   message: string = 'This is a message.'

   get fullName(): string {
     return `${this.user.familyName} ${this.user.givenName}`
   }
 }
 </script>