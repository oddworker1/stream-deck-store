import { createRouter, createWebHistory } from "vue-router";

import FocusedHelpPage from "./pages/FocusedHelpPage.vue";
import MarketplacePage from "./pages/MarketplacePage.vue";
import PluginDetailPage from "./pages/PluginDetailPage.vue";

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
      path: "/plugins/homey-pro-control",
      alias: ["/homey"],
      name: "plugin-homey",
      component: PluginDetailPage,
      meta: {
        title: "Homey Pro Control | Adapted"
      }
    },
    {
      path: "/help/homey/:topic",
      alias: [
        "/homey-help-setup",
        "/homey-help-select",
        "/homey-help-actions",
        "/homey-help-display",
        "/homey-help-warnings",
        "/homey-help-troubleshooting"
      ],
      name: "plugin-homey-help",
      component: FocusedHelpPage,
      meta: {
        title: "Homey Help | Homey Pro Control"
      },
      props: (route) => {
        const topicFromAlias = route.path.startsWith("/homey-help-")
          ? route.path.replace("/homey-help-", "")
          : route.params.topic;

        return {
          topic: String(topicFromAlias)
        };
      }
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
        top: 96
      };
    }

    return { top: 0, behavior: "smooth" };
  }
});

router.afterEach((to) => {
  const topic =
    typeof to.params.topic === "string"
      ? to.params.topic
      : to.path.startsWith("/homey-help-")
        ? to.path.replace("/homey-help-", "")
        : undefined;

  if (to.name === "plugin-homey-help") {
    const topicTitles: Record<string, string> = {
      actions: "Control Actions",
      display: "Display Styling",
      select: "Selecting Devices",
      setup: "Setup and Connection",
      troubleshooting: "Troubleshooting",
      warnings: "Warnings and Alert Rules"
    };

    document.title = `${topicTitles[topic ?? "setup"] ?? "Homey Help"} | Homey Pro Control`;
    return;
  }

  document.title = String(to.meta.title ?? "Adapted Stream Deck Plugins");
});
