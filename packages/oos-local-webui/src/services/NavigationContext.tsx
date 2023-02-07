import { createContext, PropsWithChildren } from 'react';
import { MenuItem } from '../interfaces/interfaces';

type NavigationContext = {
  items: MenuItem[];
};

export const NavigationContext = createContext<NavigationContext>(
  {} as NavigationContext
);

export const NavigationProvider = ({ children } : PropsWithChildren<{}>) => {  
    const items = menuItems;

    return (
        <NavigationContext.Provider value={{ items }}>
            {children}
        </NavigationContext.Provider>
    );
};

const menuItems: MenuItem[] = [
    {
        name: "Main",
        url: "/home",
        icon: "home",
    },
    {
        name: "Metas",
        url: "/home/metas",
        icon: "bookmarks",
    },
    {
        name: "Subscriptions",
        icon: "subscriptions",
        items: [
            {
                name: "Today Quote",
                url: "/stream/feed",
                icon: "apps",
            },
            {
                name: "Christine Pike",
                url: "/dashboards/messenger",
                avatar: "/assets/images/avatars/1.jpg",
            },        
        ]
    },
    {
        name: "Public Streams",
        icon: "stream",
        items: [
            {
                name: "OceanOS",
                url: "/stream/oos",
                icon: "stream",
            },        
            {
                name: "Morphopoiesis",
                url: "/stream/oos",
                icon: "stream",
            },        
        ]
    },
    {
        name: "Saved Streams",
        icon: "stream",
        items: [
            {
                name: "Personal",
                url: "/stream/feed",
                icon: "dynamic_feed",
            },
            {
                name: "Work",
                url: "/stream/feed",
                icon: "dynamic_feed"
            },        
        ]
    },
    {
        name: "Contacts",
        icon: "contacts",
        items: [
            {
                name: "Stephanie Box",
                url: "/dashboards/messenger",
                avatar: "/assets/images/avatars/2.jpg",
            },        
            {
                name: "Christine Pike",
                url: "/dashboards/messenger",
                avatar: "/assets/images/avatars/1.jpg",
            },        
            {
                name: "John Wick",
                url: "/dashboards/messenger",
                avatar: "/assets/images/avatars/3.jpg",
            },        
        ]
    },
    {
        name: "Apps",
        icon: "contacts",
        items: [
            {
                name: "Today Quote",
                url: "/dashboards/messenger",
                icon: "apps",
            },        
            {
                name: "ChatGPT",
                url: "/dashboards/messenger",
                icon: "apps",
            },        
            {
                name: "Stats",
                url: "/dashboards/messenger",
                icon: "apps",
            },        
        ]
    },
    {
        name: "Dashboards",
        icon: "drafts",
        items: [
            {
                name: "Tasks",
                url: "/dashboards/tasks",
                icon: "brightness_low",
            },        
            {
                name: "Messenger",
                url: "/dashboards/messenger",
                icon: "mms",
            },        
        ]
    },
    {
        name: "Management",
        icon: "inbox",
        items: [
            {
                name: "Transaction List",
                url: "/management/transactions",
                icon: "table_chart",
            },        
        ]
    },
    {
        name: "Accounts",
        icon: "inbox",
        items: [
            {
                name: "Profile Details",
                url: "/management/profile/details",
                icon: "account_circle",
            },        
            {
                name: "Profile Settings",
                url: "/management/profile/settings",
                icon: "display_settings",
            },        
        ]
    },
    {
        name: "Components",
        icon: "inbox",
        items: [
            {
                name: "Buttons",
                url: "/components/buttons",
                icon: "ballot",
            },        
            {
                name: "Modals",
                url: "/components/modals",
                icon: "beach_access",
            },        
            {
                name: "Accordeons",
                url: "/components/accordions",
                icon: "emoji_events",
            },        
            {
                name: "Tabs",
                url: "/components/tabs",
                icon: "filter_vintage",
            },        
            {
                name: "Badges",
                url: "/components/badges",
                icon: "how_to_vote",
            },        
            {
                name: "Tooltips",
                url: "/components/tooltips",
                icon: "local_pharmacy",
            },        
            {
                name: "Avatars",
                url: "/components/avatars",
                icon: "redeem",
            },        
            {
                name: "Cards",
                url: "/components/cards",
                icon: "settings",
            },        
            {
                name: "Forms",
                url: "/components/forms",
                icon: "traffic",
            },        
        ]
    },
    {
        name: "Extra Pages",
        icon: "inbox",
        items: [
            {
                name: "Error 404",
                url: "/status/404",
                icon: "checkbox",
            },        
            {
                name: "Error 500",
                url: "/status/500",
                icon: "camera_front",
            },        
            {
                name: "Coming soon",
                url: "/status/coming-soon",
                icon: "chrome_reader_mode",
            },        
            {
                name: "Maintenance",
                url: "/status/maintenance",
                icon: "workspace_premium",
            },        
        ]
    }
]
