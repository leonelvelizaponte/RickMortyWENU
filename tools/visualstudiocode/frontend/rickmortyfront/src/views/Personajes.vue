<template>
   <div>
      <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
      </base-header>
      <div class="container-fluid mt--7">
         <div class="row">
            <div class="col">
               <div class="card shadow">
                  <div class="table-responsive">
                     <base-table class="table align-items-center table-flush"
                        :class="type === 'dark' ? 'table-dark': ''"
                        :thead-classes="type === 'dark' ? 'thead-dark': 'thead-light'"
                        tbody-classes="list"
                        :data="characters">
                        <template slot="columns">
                           <th>Personaje</th>
                           <th>Dimension</th>
                           <th style="text-align: center">No Rickoso / Rickoso</th>
                           
                        </template>
                        <template slot-scope="{row}">
                           <th scope="row">
                              <div class="media align-items-center">
                                 <a href="#" class="avatar rounded-circle mr-3">
                                 <img alt="Image placeholder" :src="row.image">
                                 </a>
                                 <div class="media-body">
                                    <span class="name mb-0 text-sm">{{row.name}}</span>
                                 </div>
                              </div>
                           </th>
                           <td class="budget">
                              {{row.origin.name}}
                           </td>
                           <td >
                           <div v-on:click="esRickoso(row)">
                              <div class="avatar-group" style="text-align: center" >
                                 <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip" data-original-title="Ryan Tompson">
                                 <img alt="Image placeholder" src="https://www.clipartkey.com/mpngs/m/67-676453_rick-and-morty-clipart.png">
                                 </a>
                              </div>
                              </div>
                           </td>
                        </template>
                     </base-table>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <div class="card-footer d-flex justify-content-end"
         :class="type === 'dark' ? 'bg-transparent': ''">
      <base-pagination :page-count="20" v-model="pagination.default" v-on:click="paginacion(value)"></base-pagination>
    </div>
   </div>
</template>
<script>
   import Vue from 'vue'
   import VueClipboard from 'vue-clipboard2'
   import BTooltipDirective from 'bootstrap-vue/es/directives/tooltip'
   Vue.use(VueClipboard)
   export default {
     directives: {
       'b-tooltip': BTooltipDirective
     },
     
     data() {
       return {
            pagination: {
                default: 1
            },
           characters:[
             {
                 "id": 1,
                 "name": "Rick Sanchez",
                 "status": "Alive",
                 "species": "Human",
                 "type": "",
                 "gender": "Male",
                 "origin": {
                     "name": "Earth (C-137)",
                     "url": "https://rickandmortyapi.com/api/location/1"
                 },
                 "location": {
                     "name": "Earth (Replacement Dimension)",
                     "url": "https://rickandmortyapi.com/api/location/20"
                 },
                 "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                 "episode": [
                     "https://rickandmortyapi.com/api/episode/1",
                     "https://rickandmortyapi.com/api/episode/2",
                     "https://rickandmortyapi.com/api/episode/3",
                     "https://rickandmortyapi.com/api/episode/4",
                     "https://rickandmortyapi.com/api/episode/5",
                     "https://rickandmortyapi.com/api/episode/6",
                     "https://rickandmortyapi.com/api/episode/7",
                     "https://rickandmortyapi.com/api/episode/8",
                     "https://rickandmortyapi.com/api/episode/9",
                     "https://rickandmortyapi.com/api/episode/10",
                     "https://rickandmortyapi.com/api/episode/11",
                     "https://rickandmortyapi.com/api/episode/12",
                     "https://rickandmortyapi.com/api/episode/13",
                     "https://rickandmortyapi.com/api/episode/14",
                     "https://rickandmortyapi.com/api/episode/15",
                     "https://rickandmortyapi.com/api/episode/16",
                     "https://rickandmortyapi.com/api/episode/17",
                     "https://rickandmortyapi.com/api/episode/18",
                     "https://rickandmortyapi.com/api/episode/19",
                     "https://rickandmortyapi.com/api/episode/20",
                     "https://rickandmortyapi.com/api/episode/21",
                     "https://rickandmortyapi.com/api/episode/22",
                     "https://rickandmortyapi.com/api/episode/23",
                     "https://rickandmortyapi.com/api/episode/24",
                     "https://rickandmortyapi.com/api/episode/25",
                     "https://rickandmortyapi.com/api/episode/26",
                     "https://rickandmortyapi.com/api/episode/27",
                     "https://rickandmortyapi.com/api/episode/28",
                     "https://rickandmortyapi.com/api/episode/29",
                     "https://rickandmortyapi.com/api/episode/30",
                     "https://rickandmortyapi.com/api/episode/31"
                 ],
                 "url": "https://rickandmortyapi.com/api/character/1",
                 "created": "2017-11-04T18:48:46.250Z"
             },
             {
                 "id": 2,
                 "name": "Morty Smith",
                 "status": "Alive",
                 "species": "Human",
                 "type": "",
                 "gender": "Male",
                 "origin": {
                     "name": "Earth (C-137)",
                     "url": "https://rickandmortyapi.com/api/location/1"
                 },
                 "location": {
                     "name": "Earth (Replacement Dimension)",
                     "url": "https://rickandmortyapi.com/api/location/20"
                 },
                 "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                 "episode": [
                     "https://rickandmortyapi.com/api/episode/1",
                     "https://rickandmortyapi.com/api/episode/2",
                     "https://rickandmortyapi.com/api/episode/3",
                     "https://rickandmortyapi.com/api/episode/4",
                     "https://rickandmortyapi.com/api/episode/5",
                     "https://rickandmortyapi.com/api/episode/6",
                     "https://rickandmortyapi.com/api/episode/7",
                     "https://rickandmortyapi.com/api/episode/8",
                     "https://rickandmortyapi.com/api/episode/9",
                     "https://rickandmortyapi.com/api/episode/10",
                     "https://rickandmortyapi.com/api/episode/11",
                     "https://rickandmortyapi.com/api/episode/12",
                     "https://rickandmortyapi.com/api/episode/13",
                     "https://rickandmortyapi.com/api/episode/14",
                     "https://rickandmortyapi.com/api/episode/15",
                     "https://rickandmortyapi.com/api/episode/16",
                     "https://rickandmortyapi.com/api/episode/17",
                     "https://rickandmortyapi.com/api/episode/18",
                     "https://rickandmortyapi.com/api/episode/19",
                     "https://rickandmortyapi.com/api/episode/20",
                     "https://rickandmortyapi.com/api/episode/21",
                     "https://rickandmortyapi.com/api/episode/22",
                     "https://rickandmortyapi.com/api/episode/23",
                     "https://rickandmortyapi.com/api/episode/24",
                     "https://rickandmortyapi.com/api/episode/25",
                     "https://rickandmortyapi.com/api/episode/26",
                     "https://rickandmortyapi.com/api/episode/27",
                     "https://rickandmortyapi.com/api/episode/28",
                     "https://rickandmortyapi.com/api/episode/29",
                     "https://rickandmortyapi.com/api/episode/30",
                     "https://rickandmortyapi.com/api/episode/31"
                 ],
                 "url": "https://rickandmortyapi.com/api/character/2",
                 "created": "2017-11-04T18:50:21.651Z"
             },
             {
                 "id": 3,
                 "name": "Summer Smith",
                 "status": "Alive",
                 "species": "Human",
                 "type": "",
                 "gender": "Female",
                 "origin": {
                     "name": "Earth (Replacement Dimension)",
                     "url": "https://rickandmortyapi.com/api/location/20"
                 },
                 "location": {
                     "name": "Earth (Replacement Dimension)",
                     "url": "https://rickandmortyapi.com/api/location/20"
                 },
                 "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                 "episode": [
                     "https://rickandmortyapi.com/api/episode/6",
                     "https://rickandmortyapi.com/api/episode/7",
                     "https://rickandmortyapi.com/api/episode/8",
                     "https://rickandmortyapi.com/api/episode/9",
                     "https://rickandmortyapi.com/api/episode/10",
                     "https://rickandmortyapi.com/api/episode/11",
                     "https://rickandmortyapi.com/api/episode/12",
                     "https://rickandmortyapi.com/api/episode/14",
                     "https://rickandmortyapi.com/api/episode/15",
                     "https://rickandmortyapi.com/api/episode/16",
                     "https://rickandmortyapi.com/api/episode/17",
                     "https://rickandmortyapi.com/api/episode/18",
                     "https://rickandmortyapi.com/api/episode/19",
                     "https://rickandmortyapi.com/api/episode/20",
                     "https://rickandmortyapi.com/api/episode/21",
                     "https://rickandmortyapi.com/api/episode/22",
                     "https://rickandmortyapi.com/api/episode/23",
                     "https://rickandmortyapi.com/api/episode/24",
                     "https://rickandmortyapi.com/api/episode/25",
                     "https://rickandmortyapi.com/api/episode/26",
                     "https://rickandmortyapi.com/api/episode/27",
                     "https://rickandmortyapi.com/api/episode/29",
                     "https://rickandmortyapi.com/api/episode/30",
                     "https://rickandmortyapi.com/api/episode/31"
                 ],
                 "url": "https://rickandmortyapi.com/api/character/3",
                 "created": "2017-11-04T19:09:56.428Z"
             }
           ]
       }
     },
     methods: {
         
       onCopy() {
         this.$notify({
           type: 'success',
           title: 'Es Rickoso'
         })
       },
       paginacion(pag) {
           console.log("en paginacion");
        this.$http.get('https://rickandmortyapi.com/api/character/?page=' + pag).then(function(data){
            //console.log(data.body.results);
            if (data.body.results){
                this.characters = data.body.results;
            }
        })
       },
       esRickoso (id) {
          this.$notify({
          type: 'success',
          title: 'Es Rickoso!'
        })
        console.log("Llamando a la base de datos");
        console.log(id);
      }
     },
     created(){
        this.$http.get('https://rickandmortyapi.com/api/character').then(function(data){
            //console.log(data.body.results);
            if (data.body.results){
                this.characters = data.body.results;
            }
        })
    }
   };
</script>
<style></style>