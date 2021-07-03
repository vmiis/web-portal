var vm_data={
    //-------------------------------
    "sales_item":{
        "api":"wapp",
        "table":"item-demo-0703",
    },
    //-------------------------------
    "sales_region":{
        "api":"wapp",
        "table":"region-demo-0703",
    },
    //-------------------------------
    "sales_rep":{
        "api":"wapp",
        "table":"rep-demo-0703",
    },
    //-------------------------------
    "sales_records":{
        "api":"wapp",
        "table":"sales-demo-0703",
        "form_module":"sales-form"
    },
    //-------------------------------
    "sales_1":{
        "api":"wapp",
        "table":"sales-demo-0703",
        "query":[
            {
                "$project":{
                    "_id":1,
                    "Year": {"$substr":[ "$I2", 0, 4] },
                    "Month":{"$substr":[ "$I2", 5, 2] },
                    "Amount":{"$toDouble": "$I3"}
                }
            },        
            {
                "$group":{
                    "_id":{"Year":"$Year","Month":"$Month"},
                    "Total_Sales": { "$sum": "$Amount"}
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project":{
                    "Data.Year":"$_id.Year",
                    "Data.Month":"$_id.Month",
                    "Data.Total Sales":"$Total_Sales"
                }
            }
        ],  
        "options":"Total Sales|DOLLAR2"
    },
    //-------------------------------
    "sales_2":{
        "api":"wapp",
        "table":"sales-demo-0703",
        "pivot":"Item|Total Sales",
        "query":[
            {
                "$project":{
                    "_id":1,
                    "Year": {"$substr":[ "$I2", 0, 4] },
                    "Month":{"$substr":[ "$I2", 5, 2] },
                    "Item":"$Data.Item",
                    "Amount":{"$toDouble": "$I3"}
                }
            },        
            {
                "$group":{
                    "_id":{"Year":"$Year","Month":"$Month","Item":"$Item"},
                    "Total_Sales": { "$sum": "$Amount"}
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project":{
                    "Data.Year":"$_id.Year",
                    "Data.Month":"$_id.Month",
                    "Data.Item":"$_id.Item",
                    "Data.Total Sales":"$Total_Sales"
                }
            }
        ],  
        "options":"value|DOLLAR2"
    },
    //-------------------------------
    "sales_3":{
        "api":"wapp",
        "table":"sales-demo-0703",
        "pivot":"Region|Total Sales",
        "query":[
            {
                "$project":{
                    "_id":1,
                    "Year": {"$substr":[ "$I2", 0, 4] },
                    "Month":{"$substr":[ "$I2", 5, 2] },
                    "Region":"$Data.Region",
                    "Amount":{"$toDouble": "$I3"}
                }
            },        
            {
                "$group":{
                    "_id":{"Year":"$Year","Month":"$Month","Region":"$Region"},
                    "Total_Sales": { "$sum": "$Amount"}
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project":{
                    "Data.Year":"$_id.Year",
                    "Data.Month":"$_id.Month",
                    "Data.Region":"$_id.Region",
                    "Data.Total Sales":"$Total_Sales"
                }
            }
        ],  
        "options":"value|DOLLAR2"
    },
    //-------------------------------
    "sales_4":{
        "api":"wapp",
        "table":"sales-demo-0703",
        "pivot":"Rep|Total Sales",
        "query":[
            {
                "$project":{
                    "_id":1,
                    "Year": {"$substr":[ "$I2", 0, 4] },
                    "Month":{"$substr":[ "$I2", 5, 2] },
                    "Rep":"$Data.Rep",
                    "Amount":{"$toDouble": "$I3"}
                }
            },        
            {
                "$group":{
                    "_id":{"Year":"$Year","Month":"$Month","Rep":"$Rep"},
                    "Total_Sales": { "$sum": "$Amount"}
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project":{
                    "Data.Year":"$_id.Year",
                    "Data.Month":"$_id.Month",
                    "Data.Rep":"$_id.Rep",
                    "Data.Total Sales":"$Total_Sales"
                }
            }
        ],  
        "options":"value|DOLLAR2"
    },
    //-------------------------------
    "search-constituent":{
        "name":"Search Constituents",
        "path":"/constituent/v1/constituents/search?search_text=[INPUT]",
        "array":"value",
        "columns":`
            name|name
            email|email
        `
    },
    //-------------------------------
    "get-conpamy-information":{
        "name":"Search Constituents",
        "path":"/query?query=select * from CompanyInfo"
    },
    //-------------------------------
    "account-list":{
        "name":"Account list",
        "path":"/query?query=select * from Account where Metadata.CreateTime > '2014-12-31'",
        "array":"QueryResponse.Account",
        "columns":`
            Account ID|Id
            Name|Name
            Classification|Classification
            Account Type|AccountType
            Current Balance|CurrentBalance
            Created on|MetaData.CreateTime|DATE
        `
    },
    //-------------------------------
    "purchases-on-march":{
        "name":"Purchases on March",
        "path":"/query?query=select * from Purchase where TxnDate >= '2021-03-01' and TxnDate <= '2021-03-31' order by TxnDate DESC",
        "array":"QueryResponse.Purchase",
        "columns":`
            Transaction Date|TxnDate
            Amount|TotalAmt|DOLLAR
            Account|AccountRef.name
            Payment Type|PaymentType
            Vendor|EntityRef.name
        `
    },
    //-------------------------------
    "f-contacts":{
        "name":"Contacts",
        "host":"firestore.googleapis.com",
        "path":"/v1/projects/flirbase/databases/(default)/documents/Clients",
        "array":"documents",
        "columns":`
            First name|fields.First_name.stringValue
            Last name|fields.Last_name.stringValue
            Phone|fields.Phone.stringValue
        `
    },
    //-------------------------------
    "cooking-1":{
        "name":"Crispy pork slices",
        "name_style":"padding-top: 10px; font-size: 22px;font-weight: bold;",
        "src":"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0114%2Fa786b62fj00qmvrp9000qd200fx00atg00it00cr.jpg&thumbnail=650x2147483647&quality=80&type=jpg",
        "description":"Cooking and enjoying with friends",
        "description-style":""
    },
    //-------------------------------
    "grid-data-1":{
        "api":"wapp",
        "name":"Local sleep recruitment eligible",
        "table":"local-sleep-recruitment-record",
        "query":[
            {
                "$match":{
                    "Data.first_name": {"$ne" : ""}
                }
            }
        ]        
    },
    //-------------------------------
    "grid-data-2":{
        "api":"wapp",
        "name":"Local sleep recruitment not eligible",
        "table":"local-sleep-recruitment-record",
        "query":[
            {
                "$match":{
                    "Data.first_name": {"$eq" : ""}
                }
            }
        ]        
    },
    //-------------------------------
    "incosact_count":{
        "api":"wapp",
        "name":"Total number of survy response",
        "table":"incosact",
        "query":[
            {
                "$count": "total_count"
            },
            {
                "$project":{
                    "Data.Total number of survy response":"$total_count"
                }
            }

        ]        
    },
    //-------------------------------
    "incosact_lang":{
        "api":"wapp",
        "name":"Incosact response by language",
        "table":"incosact",
        "query":
        [
            {
                "$project":{
                    "_id":1,
                    "Data.language":1,
                    "Language":
                    {
                        "$cond":[
                            {
                                "$eq":["$Data.language","1"]
                                
                            },
                            "Engilish",
                            {
                                "$cond":[
                                    {
                                        "$eq":["$Data.language","2"]
                                        
                                    },
                                    "Spanish",
                                    {
                                        "$cond":[
                                            {
                                                "$eq":["$Data.language","3"]
                                                
                                            },
                                            "Portuguese",
                                            {
                                                "$cond":[
                                                    {
                                                        "$eq":["$Data.language","4"]
                                                        
                                                    },
                                                    "Turkish",
                                                    {
                                                        "$cond":[
                                                            {
                                                                "$eq":["$Data.language","5"]
                                                                
                                                            },
                                                            "Japanese",
                                                            {
                                                                "$cond":[
                                                                    {
                                                                        "$eq":["$Data.language","6"]
                                                                        
                                                                    },
                                                                    "Canadian French",
                                                                    {
                                                                        "$cond":[
                                                                            {
                                                                                "$eq":["$Data.language","7"]
                                                                                
                                                                            },
                                                                            "French",
                                                                            {
                                                                                "$cond":[
                                                                                    {
                                                                                        "$eq":["$Data.language","8"]
                                                                                        
                                                                                    },
                                                                                    "German",
                                                                                    "Other"
                                                                                ]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                        
                    }
                }
            },        
            {
                "$group":{
                    "_id":{"language":"$Language"},
                    "Number of response": { "$sum": 1 }
                }
            },
            { 
                "$sort" : { "Number of response" : -1 } 
            },
            {
                "$project":{
                    "Data.language":"$_id.language",
                    "Data.Number of response":"$Number of response"
                }
            }
        ]
    },
    //-------------------------------
}

