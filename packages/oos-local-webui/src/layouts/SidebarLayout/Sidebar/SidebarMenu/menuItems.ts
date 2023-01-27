export const menuOpen:Record<string,boolean> = {
    dashboards: true,
    management: false,
    accounts: true,
    components: false,
    extras: false
}

export const menuItems = [
    {
        name: "Send",
        url: "/overview",
        icon: "send",
    },
    {
        id: "dashboards",
        name: "Dashboards",
        icon: "drafts",
        open: false,
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
        id: "management",
        name: "Management",
        icon: "inbox",
        open: false,
        items: [
            {
                name: "Transaction List",
                url: "/management/transactions",
                icon: "table_chart",
            },        
        ]
    },
    {
        id: "accounts",
        name: "Accounts",
        icon: "inbox",
        open: false,
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
        id: "components",
        name: "Components",
        icon: "inbox",
        open: false,
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
        id: "extras",
        name: "Extra Pages",
        icon: "inbox",
        open: false,
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
    },


]