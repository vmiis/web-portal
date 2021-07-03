var vm_data={
    //-------------------------------
    "woolcock-campaign-list":{
        "name":"Woolcock Campaign List",
        "path":"/list",
        "array":"list",
        "columns":`
            Name|name
            Total subscrib count|stats.member_count
            Unsubscribe count|stats.unsubscribe_count
            Campaign count|stats.campaign_count
            Last campaign|stats.campaign_last_sent
            Subscribe count since last campaign|stats.member_count_since_send
            Unsubscribe count since last campaign|stats.unsubscribe_count_since_send        
        `
    },
    //-------------------------------
    "search-members":{
        "name":"Search members",
        "path":"/search-members?query=[INPUT]",
        "array":"full_search.members",
        "columns":`
            First Name|merge_fields.FNAME
            Last Name|merge_fields.LNAME
            Email|email_address
            Status|status    
        `
    }
    //-------------------------------
}
