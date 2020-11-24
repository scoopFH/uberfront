<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Ubereat</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="drawerRight = true">mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary height="400px">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Ubereat </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2"></div>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawerRight"
      absolute
      temporary
      right
      height="500px"
      width="400px"
    >
      <template v-slot:prepend>
        <v-list-item two-line class="justify-center">
          <div class="indigo--text">Your Order</div></v-list-item
        >
      </template>

      <v-card
        class="mt-6 mb-6 ml-7"
        max-width="344"
        v-for="dish in order"
        :key="dish"
      >
        <v-card-text>
          <div class="d-flex justify-space-between">
            <div class="subtitle-1 text--primary">
              {{ dish.number }} {{ dish.name }}
            </div>
            <div>{{ dish.price }} €</div>
          </div>
          <p>from {{ dish.restaurant }}</p>
          <v-card-actions class="justify-space-between pa-0">
            <v-btn color="indigo" text> ADD </v-btn>
            <v-btn color="indigo" text> REMOVE </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>

      <div class="d-flex justify-center align-end pb-6">
        <v-btn width="85%" large color="indigo" dark> Eat </v-btn>
      </div>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app padless color="primary">
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Ubereat</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Navbar",

  components: {},

  data: () => ({
    drawer: false,
    drawerRight: false,
    items: [
      { title: "connect", icon: "mdi-account" },
      { title: "register", icon: "mdi-account-plus" },
      { title: "create a restorer account", icon: "mdi-chef-hat" },
    ],
    order: [
      {
        name: "burger vegan",
        restaurant: "Burger King",
        number: "2",
        price: "4",
      },
      {
        name: "burger texs",
        restaurant: "Burger King",
        number: "8",
        price: "2",
      },
      {
        name: "burger vegan",
        restaurant: "Burger King",
        number: "2",
        price: "4",
      },
      {
        name: "burger texs",
        restaurant: "Burger King",
        number: "8",
        price: "2",
      },
    ],
    right: null,
  }),
};
</script>
