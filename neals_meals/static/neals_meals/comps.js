// questions
// 1) how to plug in all item info from DB into component?
// dynamically create instances of data that comes from DB
  // 'variants'

Vue.component('recipe', {
    props: {  //props are the props that must be passed in when initializing comp

    },
    template: `
      <div class='recipeCard'>
        <img :src="image" />       DOES 'IMAGE' HERE TIE TO PROP OR SOMETHING ELSE?

        <div class='ingredients'>
          <ul>
            <li v-for="ingredient in ingredients">{{ ingredient }}</li>
          </ul>
        </div>

      </div>
    `,
    data(){
      return {

      }
    },
    methods: {
      image(){
        return this.variants[this.selectedVariant].variantImage
      },
    }
})

// Index components below
Vue.component('selectedRecipe' {
  props: { image_name},
  template: `
    <div class="tile is-parent">
      <article class="tile is-child box">
          <figure class="image">
              {% load static %}
              <img :src="{% static "neals_meals/purple_daikon_mahi_burg.jpg" %}">
          </figure>
          <p class="title">Purple Daikon Encircled Mahi Mahi Burger</p>
          <p class="subtitle">16 Nov 2018</p>
          <a class="button">Try me</a>
      </article>
    </div>
  `
  data(){
    return {}
  },
  methods:{

  }
})

