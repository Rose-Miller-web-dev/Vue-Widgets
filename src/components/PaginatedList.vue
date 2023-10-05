<template>
    <div>
        <ul>
            <li v-for="p in paginatedData" :key="p.last">
            {{p.first}}  
            </li>
        </ul>

        <button @click="prevPage">
            Previous
        </button>

        <button @click="nextPage">
            Next
        </button>
    </div>
</template>

<script>
export default {
    name: "TanstackTable",

    data(){
        return {
            pageNumber: 0,
            listData: [
                {
                    first: "1",
                                        
                },
                {
                    first: "2",
                    
                },
                {
                    first: "3",
                    
                },
                {
                    first: "4",
                    
                },
                {
                    first: "5",
                    
                },
                {
                    first: "6",
                    
                },
                {
                    first: "7",
                    
                },
                {
                    first: "8",
                    
                },
            ]
        }
    },

    props:{

        size:{
            type:Number,
            required:false,
            default: 4
        }
    },

    methods:{
        nextPage(){
            this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        }
    },

    computed: {
        pageCount(){
            let l = this.listData.length,
                s = this.size
            return Math.ceil(l/s)
        },

        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size
            return this.listData.slice(start, end)
        }
    }
}
</script>

<style>

</style>