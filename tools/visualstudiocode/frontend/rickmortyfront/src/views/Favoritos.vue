<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <div class="card shadow">
                        <div class="card-header bg-transparent">
                            <h3 class="mb-0">Lista de Personajes Rickosos / Favoritos</h3>
                        </div>
                        <div class="card-body">
                            <div class="row personajes-content">
                                <div class="col-lg-4 col-md-6" v-for="(character, index) in characters" :key="index">
                                <div style="text-align: center" class="btn-icon-clipboard" v-on:click="yaNoEsRickoso">
                                    <img v-bind:src="character.image" width="60%" >
                                    <h4>{{character.name}}</h4>
                                </div>
                                </div>
                                
                                <!--<div class="col-lg-4 col-md-6"
                                     v-for="(character, index) in characters" :key="index">
                                    <button type="button"
                                            v-b-tooltip.hover.top
                                            :title="character.name"
                                            v-clipboard:copy="icon.name"
                                            v-clipboard:success="onCopy"
                                            class="btn-icon-clipboard" data-clipboard-text="air-baloon">
                                        <div>
                                            <i :class="icon.name"></i>
                                            <span>{{icon.name.substring(6)}}</span>
                                        </div>
                                    </button>
                                </div>-->

                                <!--<div class="col-lg-4 col-md-6"
                                     v-for="(icon, index) in icons" :key="icon.name + index">
                                    <button type="button"
                                            v-b-tooltip.hover.top
                                            :title="icon.name"
                                            v-clipboard:copy="icon.name"
                                            v-clipboard:success="onCopy"
                                            class="btn-icon-clipboard" data-clipboard-text="air-baloon">
                                        <div>
                                            <i :class="icon.name"></i>
                                            <span>{{icon.name.substring(6)}}</span>
                                        </div>
                                    </button>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
      yaNoEsRickoso () {
          this.$notify({
          type: 'warning',
          title: 'Ya NO es Rickoso!'
        })

        let header = "headers: {Access-Control-Allow-Origin: *}"
/*
        //function(){
            this.$http.get('localhost:3001/conexion/up', {header})
            .then(function(data){
                console.log(data)
            })
        //}
*/

        

        /*this.$http.get('localhost:3001/conexion/up',{ headers:{Access-Control-Allow-Origin: *}}).then(response => {
 
            // get body data
            //this.someData = response.body;
            console.log(response)
        
        }, response => {
            // error callback
        });*/

        // GET /someUrl?foo=bar
        this.$http.get('localhost:3001/conexion/up', { headers: { 'Access-Control-Allow-Headers': 'content-type', 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS', 'Access-Control-Allow-Origin': '*' }}).then(response => {
            // success callback
        }, response => {
            // error callback
        });








      }
    }/*,
    created(){
        this.$http.get('https://rickandmortyapi.com/api/character').then(function(data){
            //console.log(data.body.results);
            if (data.body.results){
                this.characters = data.body.results;
            }
        })
    }*/
    ,
    created(){
        console.log("-1-");
        this.$http.get('localhost:3001/conexion/up').then(function(data){
            console.log("-2-");
            console.log(data);
        }).catch(err => {
            console.log("-3-");
            console.log(err);
        });
    }
  };
</script>
<style></style>
