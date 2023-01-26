
export const menuItems = [
    {
        name: "Send",
        url: "/overview",
        icon: "send",
    },
    {
        name: "Drafts",
        url: "/dashboards/tasks",
        icon: "drafts",
    },
    {
        name: "Inbox",
        url: "/overview",
        icon: "inbox",
        items: [
            {
                name: "Starred",
                url: "/overview",
                icon: "star_border",
            },        
        ]
    },

]