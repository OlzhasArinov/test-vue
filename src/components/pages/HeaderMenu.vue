<template>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav> 
          <b-nav-item 
            :class="{active: i === activeItem, 'not-active': isComponentActive}"
            v-for="(tab, i) in tabs" :key="i"
            @click="selectedNav(i, tab)"
          >
            {{ tab.title }}
          </b-nav-item>
          <b-nav-item>
            <router-link to="/second" class="routerLink">Go to Second Page</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <div>
        <component :is="selected"></component>
      </div>
    </div>
</template>
<script>
import ListPage from '../mainPage/ListPage.vue'
import PlotlyPage from '../mainPage/PlotlyPage.vue'
import TablePage from '../mainPage/TablePage.vue'


  export default {
    components: {
      ListPage,
      TablePage,
      PlotlyPage
    },
    data() {
      return {
        tabs: [
          {
            title: 'List',
            component: ListPage
          },
          {
            title: 'Table',
            component: TablePage
          },
          {
            title: 'Plotly',
            component: PlotlyPage
          }
        ],
        activeItem: 0,
        isComponentActive: true,
        selected: ListPage,
      }
    },
    methods: {
      selectedNav(i, tab) {
        this.activeItem = i
        this.selected = tab.component
        this.isComponentActive = false
        this.$emit(tab.title)
      }
    }
  }
</script>

<style scoped>
.routerLink {
  color: #fff;
}
.routerLink:hover {
  color: red
}
</style>
