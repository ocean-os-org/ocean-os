
export const menuItems = [
    {
        name: "Main",
        url: "/home",
        icon: "home",
        selected: true,
    },
    {
        name: "Send",
        url: "/overview",
        icon: "send",
        selected: false,
    },
    {
        name: "Dashboards",
        icon: "drafts",
        selected: false,
        items: [
            {
                name: "Tasks",
                url: "/dashboards/tasks",
                icon: "brightness_low",
                selected: false,
            },        
            {
                name: "Messenger",
                url: "/dashboards/messenger",
                icon: "mms",
                selected: false,
            },        
        ]
    },
    {
        name: "Management",
        icon: "inbox",
        selected: false,
        items: [
            {
                name: "Transaction List",
                url: "/management/transactions",
                icon: "table_chart",
                selected: false,
            },        
        ]
    },
    {
        name: "Accounts",
        icon: "inbox",
        selected: false,
        items: [
            {
                name: "Profile Details",
                url: "/management/profile/details",
                icon: "account_circle",
                selected: false,
            },        
            {
                name: "Profile Settings",
                url: "/management/profile/settings",
                icon: "display_settings",
                selected: false,
            },        
        ]
    },
    {
        name: "Components",
        icon: "inbox",
        selected: false,
        items: [
            {
                name: "Buttons",
                url: "/components/buttons",
                icon: "ballot",
                selected: false,
            },        
            {
                name: "Modals",
                url: "/components/modals",
                icon: "beach_access",
                selected: false,
            },        
            {
                name: "Accordeons",
                url: "/components/accordions",
                icon: "emoji_events",
                selected: false,
            },        
            {
                name: "Tabs",
                url: "/components/tabs",
                icon: "filter_vintage",
                selected: false,
            },        
            {
                name: "Badges",
                url: "/components/badges",
                icon: "how_to_vote",
                selected: false,
            },        
            {
                name: "Tooltips",
                url: "/components/tooltips",
                icon: "local_pharmacy",
                selected: false,
            },        
            {
                name: "Avatars",
                url: "/components/avatars",
                icon: "redeem",
                selected: false,
            },        
            {
                name: "Cards",
                url: "/components/cards",
                icon: "settings",
                selected: false,
            },        
            {
                name: "Forms",
                url: "/components/forms",
                icon: "traffic",
                selected: false,
            },        
        ]
    },
    {
        name: "Extra Pages",
        icon: "inbox",
        selected: false,
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