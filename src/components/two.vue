<template>
    <div>
        <div>2</div>
        <div>{{msg}}</div>
    </div>
</template>
<script>
import { mapMutations, mapGetters, mapState } from 'vuex';
export default {
    data () {
        return {
            msg: 'sb250'
        }
    },
    mounted () {
        var id = this.geteditinfo();
        this.msg = id
    },
    methods: {
        ...mapGetters(['geteditinfo']),
    }
}
</script>
