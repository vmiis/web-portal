var vm_data={
    //-------------------------------
    "wzd_patient_1":{
        "api":"wzd",
        "table":"patient_1",
        "query":[
            {
                "$project" : { 
                    "UID": 1, 
                    "Data.streetAddress":"$Data.addressResidential.streetAddress",
                    "Data.postcode":"$Data.addressResidential.postcode",
                    "Data.suburb":"$Data.addressResidential.suburb",
                    "Data.state":"$Data.addressResidential.state",
                    "Data.country":"$Data.addressResidential.country",
                    "Data.firstName":1, 
                    "Data.lastName":1, 
                    "Data.email": 1,
                    "Data.phoneNumberHome":1,
                    "Data.phoneNumberWork":1,
                    "Data.phoneNumberMobile":1,
                    "Submit_date":1,
                    "Submitted_by":1 
                } 
            }
        ]
    },
    //-------------------------------
    "sales_records":{
        "api":"wapp",
        "table":"sales-demo-0703"
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
    }
    //-------------------------------
}