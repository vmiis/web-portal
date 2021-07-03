var vm_data={
    //-------------------------------
    "income_expense":{
        "api":"wapp",
        "name":"Websystem 2018-2021 income/expense",
        "table":"transaction-vmautomation",
        "query":
        [
            {
                "$match":{"I1": { "$gte": "2018-07-01", "$lt":"2021-07-01"}}
            },
            {
                "$project": {
                    "I1":1,
                    "Data.Income":1,
                    "Data.Expense":1,
                    "FY": {
                        "$cond":[
                            { 
                                "$and": [ { "$gte": [ "$I1", "2020-07-01" ]}, { "$lt": [ "$I1", "2021-07-01" ]} ] 
                            },
                            "2020-2021",
                            {
                                "$cond": [
                                    { 
                                        "$and": [ { "$gte": [ "$I1", "2019-07-01" ]}, { "$lt": [ "$I1", "2020-07-01" ]} ] 
                                    },
                                    "2019-2020",
                                    {
                                        "$cond": [
                                            { 
                                                "$and": [ { "$gte": [ "$I1", "2018-07-01" ]}, { "$lt": [ "$I1", "2019-07-01" ]} ] 
                                            },
                                            "2018-2019",
                                            "Else"
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
                    "_id":"$FY",
                    "Income": { "$sum": "$Data.Income"},
                    "Expense": { "$sum": "$Data.Expense"},
                    "P/L": { "$sum": { "$subtract": [ "$Data.Income","$Data.Expense"] }}
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project": {
                    "Data.Financial Year":"$FY",
                    "Data.Inccome":"$Income",
                    "Data.Expense":"$Expense",    
                    "Data.P/L":"$P/L"    
                }
            }
        ]
    },
    //-------------------------------
}
