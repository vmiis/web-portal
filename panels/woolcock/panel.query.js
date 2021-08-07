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
    },
    //-------------------------------
    "top-referrer":{
        "module":"vm-query",
        "api":"wzd",
        "name":"Top 100 referrers since 2020-06-08",
        "table":"referral",
        "query":[
            {
                $project: {
                    Data:1,
                    fullname: {
                        $concat: ['$Data.referral.referrerLocation.firstName',' ','$Data.referral.referrerLocation.lastName']
                    }
                }
            },
            {
                $match: { 
                    "Data.referral.startDate" : { $gte : "2020-06-08T00:00:00Z" },
                    //"Data.referral.referrerLocation.street": { $and: [{$exists: true}, { $ne:"431 Glebe Point Road"}, {$ne: "" }] },
                    $and:[
                        {"Data.referral.referrerLocation.street": {$exists: true}},
                        {"Data.referral.referrerLocation.street": {$ne:"431 Glebe Point Road"}},
                        {"Data.referral.referrerLocation.street": {$ne:""}},
                        {"fullname": {$ne:"Simon Lewis"}},
                    ],
    
                }
            },
            {
                $group : {
                    _id:{
                        "First Name": "$Data.referral.referrerLocation.firstName",
                        "Last Name": "$Data.referral.referrerLocation.lastName",
                        //"Street": "$Data.referral.referrerLocation.street",
                        //"Suburb": "$Data.referral.referrerLocation.suburb",
                        //"Post Code": "$Data.referral.referrerLocation.postCode",
                        "Address":{$concat:["$Data.referral.referrerLocation.street","\n","$Data.referral.referrerLocation.suburb","  ","$Data.referral.referrerLocation.postCode"]}
                    
                    }, 
                    count:{$sum:1}
                }
            },
            { "$sort" : { "count" : -1 }  },
            { "$limit": 100 },
            {
                "$project": {
                    "Data.Number of Referrals":"$count",
                    "Data.First Name":"$_id.First Name",
                    "Data.Last Name":"$_id.Last Name",
                    //"Data.Street":"$_id.Street",
                    //"Data.Suburb":"$_id.Suburb",
                    //"Data.Post Code":"$_id.Post Code",
                    "Data.Address":"$_id.Address",
                }
            }

        ]
    }
    //-------------------------------
}
