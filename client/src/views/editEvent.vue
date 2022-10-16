
<template>
    <v-container>
      <v-alert close-text="Close Alrt" color="green accent-4" dark dismissible v-if="this.$route.params.message">{{
      this.$route.params.message }}</v-alert>
  
      <v-card class="mx-auto" width="30vw">
        <v-card-title>Update this Event</v-card-title>
        <v-divider></v-divider>
        <v-form ref="form" @submit.prevent="updateForm" class="pa-5" ene="">
          <v-text-field label="name" v-model="event.name" prepend-icon="mdi-note" :rules="rules"></v-text-field>
          <v-textarea label="details" v-model="event.details" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
          <v-text-field label="start" v-model="event.start" prepend-icon="mdi-calendar" type="date" v-bind:min="minDate" :rules="rules">
          </v-text-field>
          <v-text-field label="end" v-model="event.end" prepend-icon="mdi-calendar" type="date" v-bind:min="minDate" :rules="rules">
          </v-text-field>
          <v-text-field label="color" type="color" v-model="event.color" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
          <v-btn type="submit" class="mt-3" color="success">Update Event</v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>
  <script>
  
  import API from "../api.js";
  export default {
    data() {
      return {
        rules: [(value) => !!value || "This field is required!"],
        event: {
          name: "",
          details: "",
          start: "",
          end: "",
          color: "green",
        },
      };
    },

    async mounted(){
        const res=await API.getEventById(this.$route.params.id);
        this.event=res;

    },
    methods: {
      async updateForm(){
  
        const newEvent={
          name:this.event.name,
          details:this.event.details,
          start:this.event.start,
          end:this.event.end,
          color:this.event.color
  
        };
  
        if(this.$refs.form.validate()){
  
          const res= await API.updateateEvent(this.$route.params.id,newEvent);
          this.$router.push({name:'home',params:{message:res.message}});
          
        }
  
      
      }
      
    },
  };
  </script>