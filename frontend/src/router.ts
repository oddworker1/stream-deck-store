import { createRouter, createWebHistory } from "vue-router";

import FaqPage from "./pages/FaqPage.vue";
import MarketplacePage from "./pages/MarketplacePage.vue";
import PluginDetailPage from "./pages/PluginDetailPage.vue";
import { faqIdForHelpTopic } from "./data/site";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "marketplace",
      component: MarketplacePage,
      meta: {
        title: "Adapted Stream Deck Plugins"
      }
    },
    {
      path: "/homey.html",
      alias: ["/homey", "/plugins/homey-pro-control"],
      name: "plugin-homey",
      component: PluginDetailPage,
      meta: {
        title: "Homey Pro Control | Adapted"
      }
    },
    {
      path: "/homey-faq.html",
      alias: ["/homey-faq", "/plugins/homey-pro-control/faq"],
      name: "plugin-homey-faq",
      component: FaqPage,
      meta: {
        title: "Homey FAQ | Adapted"
      }
    },
    {
      path: "/help/homey/:topic",
      name: "plugin-homey-help",
      redirect: (to) => ({
        hash: `#${faqIdForHelpTopic(String(to.params.topic ?? "setup"))}`,
        path: "/homey-faq.html",
        query: to.query
      })
    },
    {
      path: "/homey-help-:topic",
      redirect: (to) => ({
        hash: `#${faqIdForHelpTopic(String(to.params.topic ?? "setup"))}`,
        path: "/homey-faq.html",
        query: to.query
      })
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/"
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 24
      };
    }

    return { top: 0, behavior: "smooth" };
  }
});

router.afterEach((to) => {
  document.title = String(to.meta.title ?? "Adapted Stream Deck Plugins");
});
