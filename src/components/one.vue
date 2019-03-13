<template>
    <div>
         <div>我是1</div>
         <group>
            <x-input title="title" v-model="value"></x-input>
        </group>
         <button @click="go">我去2</button>
    </div>
    
</template>
<script>
import { mapMutations, mapGetters, mapState } from 'vuex';
import { XInput, Group } from 'vux'
export default {
    data() {
        return {
           value: '0'
        }
    },
    components: {
      XInput,
      Group
    },
    methods: {
        go() {
            this.CHANGE_EDITINFO(this.value)
           this.$router.push({path:'/two'})
        },
		...mapMutations(['CHANGE_EDITINFO']),
    }
}
</script>

