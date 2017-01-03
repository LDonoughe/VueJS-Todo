Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#app',
  data: {
    list: [
      { text: 'One' },
      { text: 'Two' }
    ]
  }
})
