<template>
    <div class="container pt-4">
        <div class="">
            <input class="input-group m-3 p-2" placeholder="search..." type="text" v-model="searched">
            <button class="btn btn-info" @click="toggleSort()">
                <p v-if="isSorted">unsort</p>
                <p v-if="!isSorted">sort</p>
            </button>
        </div>
        <table class="table table-border table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in computedItems" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                </tr>
            </tbody>
        </table>

        <nav>
            <button class="btn btn-outline-white" @click="prevPage">
                prev
            </button>

            <button  class="btn btn-outline-white" @click="nextPage">next</button>
        </nav>
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

            pageNumber: 0,
            searched: '',
            isSorted: false,
        }),

        props: {
            size: {
                default: 4
            }
        },

        computed: {
            pageCount() {
                let numOfItems = this.items.length
                let currentSize = this.size
                return Math.ceil(numOfItems / currentSize)
            },

            computedItems() {
                var showingItems

                if(this.isSorted) {
                    showingItems = [...this.items].sort((a, b) => a.price - b.price)
                }

                else {
                    showingItems = this.items
                }

                if (this.searched !== '') {
                    showingItems = [];

                    [...this.items].forEach(item => {
                        if (item.name.includes(this.searched)) {
                            showingItems.push(item)
                            
                        } 

                        else {
                            let index = showingItems.indexOf(item)
                            if(index > -1) {
                                showingItems.splice(index, 1)
                            }
                        }
                    })

                    console.log(showingItems)
                }

                const startIndex = this.pageNumber + this.size
                const endIndex = startIndex + this.size
                showingItems = showingItems.slice(startIndex, endIndex)

                return showingItems
            }
        },

        methods: {
            toggleSort() {
                this.isSorted = !this.isSorted
            },

            nextPage() {
                this.pageNumber++
            },

            prevPage() {
                this.pageNumber--
            }
        }
    }
</script>

<style>

</style>