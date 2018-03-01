<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    export default {
        name: 'app',
        created () {
            this.signin();
        },
        methods: {
            signin (cb) {
                let vm = this;
                console.log(vm);
                Vue.prototype.$_has = function (rArray) {
                    if (rArray === '1') {
                        return false;
                    }
                    /*          let resources = [];
                     let permission = true;
                     if (Array.isArray(rArray)) {
                     rArray.forEach(function (e) {
                     resources = resources.concat(e.p);
                     });
                     } else {
                     resources = resources.concat(rArray.p);
                     }
                     // console.log(resources, permission);
                     return permission; */
                };
            }
        }
    };
</script>

