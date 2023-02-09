<template>
    <div >
        <router-view></router-view>
        <GoogleChart />

    </div>
</template>
             
<script>
import GoogleChart from './GoogleChart.vue'
export default {
  name: 'App',
  components: {
    GoogleChart
  }
}
</script>
                         