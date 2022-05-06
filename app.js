

Vue.component("table-component", {
  template: /* html */`
    <table>
      <thead :class="theadClass(index)">
        <tr>
          <th v-for="(title, i) in titles" :keys="i">{{ title }}</th>
        </tr>
      </thead>

      <tbody>
        <tr :class="colorFilas(i)" v-for="(product, i) in products" :key="product.id">
          <td>{{ product.name}}</td>
          <td>{{ product.category }}</td>
          <td> $ {{ product.price }}</td>
          <td>{{ product.stock }}</td>
        <tr/>
      </tbody>

    </table>
  `,

  props: {
    titles: {
      type: Array
    },
    products: {
      type: Array
    },
    index: {
      type: Number
    },
  },
  methods: {
    colorFilas(index) {
      return index % 2 == 0 ? 'fila-par' : 'fila-impar'
    },
    theadClass(index) {
      return index % 2 == 0 ? 'thead-dark' : 'thead-light'
    }
  },
});


const app = new Vue({
  el: "#app",
  data: {
    titles: ["Nombre", "Categoría", "Precio", "Stock"],
    tables: [
      {
        products: [
          {
            id: 1,
            name: "Brownie c/frutos rojos",
            category: "Postres",
            price: 250,
            stock: 6          
          },
          {
            id: 2,
            name: "Cheese Cake",
            category: "Tortas",
            price: 280,
            stock: 3          
          },
          {
            id: 3,
            name: "Selva Negra",
            category: "Tortas",
            price: 900,
            stock: 2          
          },
          {
            id: 4,
            name: "Medialunas (por docena)",
            category: "Facturas",
            price: 240,
            stock: 8          
          }
        ]
      },
      {
        products: [
          {
            id: 5,
            name: "Tarta de frutilla",
            category: "Tartas",
            price: 720,
            stock: 3          
          },
          {
            id: 6,
            name: "Muffin de manzana",
            category: "Muffins",
            price: 350,
            stock: 12          
          },
          {
            id: 7,
            name: "Roll de canela",
            category: "Rolls",
            price: 200,
            stock: 8          
          },
          {
            id: 8,
            name: "Lemon Pie",
            category: "Tortas",
            price: 870,
            stock: 2          
          }
        ],
      },
      {
        products: [
          {
            id: 13,
            name: "Magdalenas (por docena)",
            category: "Pasteleria",
            price: 340,
            stock: 10          
          },
          {
            id: 14,
            name: "Crumble de manzana",
            category: "Postres",
            price: 420,
            stock: 12          
          },
          {
            id: 15,
            name: "Cupcake Dulce de Leche",
            category: "Cupcakes",
            price: 260,
            stock: 8          
          },
          {
            id: 16,
            name: "Mousse de frutilla",
            category: "Postres",
            price: 240,
            stock: 9          
          }
        ]
      }
    ]
  }
})
