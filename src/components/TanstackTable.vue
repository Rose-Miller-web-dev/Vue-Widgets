<template>
    <div class="container pt-5">

      <div class="top-sec d-flex">
        <button @click="toggleSort()" class="btn btn-info m-2 py-2 px-5">
          {{ sortText }}
        </button>
        <input placeholder="search" class="input-group m-2 p-3" type="text" v-model="searched">
      </div>
      
      <table class="table table-border table-striped m-2 p-3">
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in computedItems" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>

      <button class="btn btn-outline-white" @click="prevPage">
        Previous
      </button>

      <button class="btn btn-outline-white" @click="nextPage">
        Next
      </button>

    </div>
  </template>
  
  <script>
    export default {
        name: "TanstackTable",
        data: () => ({
            items: [
                { name: 'cake', price: 1.9 },
                { name: 'ice cream', price: 2.9 },
                { name: 'cheese cakse', price: 3.9 },
                { name: 'shake', price: 1.5 },
                { name: 'smoothie', price: 2.5 },
                { name: 'pouding', price: 2.9 },
                { name: 'panakouta', price: 2.1 },
                { name: 'ice tea', price: 0.9 },
                { name: 'ice coffee', price: 1.1 },
                { name: 'waffles', price: 4.5 },
            ],
            
            isSorted: false,
            searched: '',
            pageNumber: 0,
        }),

        props:{
            size:{
                type:Number,
                required:false,
                default: 4
            }
        },

        computed: {
        pageCount(){
            let l = this.listData.length,
            s = this.size
            return Math.ceil(l/s)
        },

        computedItems() {

            var compItems

            if (this.isSorted) {
            compItems = [...this.items].sort((a, b) => a.price - b.price)
            } else {
                compItems = this.items
            }

            if (this.searched !== '') {
                compItems = [];

                [...this.items].forEach(item => {
                    if (item.name.includes(this.searched)) {
                        compItems.push(item)

                    } else {
                        let index = compItems.indexOf(item)
                        if (index > -1) { 
                            compItems.splice(index, 1)
                        }
                    }
                })
            }

            const start = this.pageNumber * this.size,
            end = start + this.size
            compItems = compItems.slice(start, end)

            return compItems
        },

        sortText() {
            return this.isSorted ? "Unsort" : "Sort"
        },

        },
    
        methods: {
        toggleSort() {
            this.isSorted = !this.isSorted
        },

        nextPage(){
            this.pageNumber++
        },

        prevPage(){
            this.pageNumber--
        }
        },
    }
  </script>
  

<style>
</style>