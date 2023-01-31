<template>
    <div>
        <Multiselect
          v-model="value"
          :options="options"
          @change="changeInput"
        />
    </div>
    <div class="example">
        <div class="output">Cities: {{ multiInput.value }}</div>
        <Multiselect
          v-model="multiInput.value"
          v-bind="multiInput"
        ></Multiselect>
    </div>
    <div>
        <label for="example-datepicker">Choose a date</label>
        <b-form-datepicker id="example-datepicker" v-model="datevalue" class="mb-2"></b-form-datepicker>
        <p>Value: '{{ datevalue }}'</p>
    </div>
    <div>
      <input type="text" placeholder="Name of the company" :value="inputValue">
    </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'

  export default {
    components: { Multiselect },
    data() {
      return {
        datevalue: '',
        inputValue: '',
        mychoice: null,
        value: '',
        options: [
          'East',
          'West',
          'South',
          'North',
        ],
        multiInput: {
          mode: 'tags',
          value: [''],
          closeOnSelect: false,
          options: [
              { value: 'Almaty', label: 'Almaty' },
              { value: 'Astana', label: 'Astana' },
              { value: 'Oskemen', label: 'Oskemen' },
          ],
          searchable: true,
          createOption: true
        },
    }
  },
  methods: {
    changeInput() {
      this.value = ''
      this.inputValue = ''
      this.multiInput.value = ['']
      this.datevalue = ''
    },
    
  }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>

</style>