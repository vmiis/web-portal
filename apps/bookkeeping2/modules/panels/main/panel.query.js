var vm_data={
    "income_expense":{
        "module":"vm-query",
        "api":"wapp",
        "name":"Websystem 2018-2022 income/expense",
        "table":"",
        "query":
        [
            {
                "$match":{"I1": { "$gte": "2018-07-01", "$lt":"2023-07-01"}}
            },
            {
                "$project": {
                    "I1":1,
                    "Data.Income":1,
                    "Data.Expense":1,
                    "FY": {
                        "$cond":[
                            { 
                                "$and": [ { "$gte": [ "$I1", "2022-07-01" ]}, { "$lt": [ "$I1", "2023-07-01" ]} ] 
                            },
                            "2022-2023",
                            {
                                "$cond":[
                                    { 
                                        "$and": [ { "$gte": [ "$I1", "2021-07-01" ]}, { "$lt": [ "$I1", "2022-07-01" ]} ] 
                                    },
                                    "2021-2022",
                                    {
                                        "$cond": [
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
                                                            "2017-0000"
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
                    "Data.Financial Year":"$_id",
                    "Data.Income":"$Income",
                    "Data.Expense":"$Expense",    
                    "Data.P/L":"$P/L"    
                }
            }
        ],
        "options":"Income|DOLLAR2,Expense|DOLLAR2,P/L|DOLLAR2"
    },
    //-------------------------------
    "BAS":{
        "module":"vm-query",
        "api":"wapp",
        "name":"2018-2022 ATO BAS quarterly",
        "table":"",
        "query":
        [
            {
                "$match":{
                    "I1": { "$gte": "2018-07-01", "$lt":"2025-01-01"}
                }
            },
            {
                "$project": {
                    "Years": { $substr: [ "$I1", 0, 4] },
                    "M": { $substr: [ "$I1", 5, 2] },
                    "Data.G1_sales":1,
                    "Data.1A_GST":1,
                    "Data.1B_GST":1,
                    "Data.W1_salary":1,
                    "Data.W2_withheld":1,
                }
            },
            {
                "$project": {
                    "Years":1,
                    "Data.G1_sales":1,
                    "Data.1A_GST":1,
                    "Data.1B_GST":1,
                    "Data.W1_salary":1,
                    "Data.W2_withheld":1,
                    "Quarter":{
                        "$switch": {
                        branches: [
                            { case: {$eq: ["$M", "01"]}, then: 1 },
                            { case: {$eq: ["$M", "02"]}, then: 1 },
                            { case: {$eq: ["$M", "03"]}, then: 1 },
                            { case: {$eq: ["$M", "04"]}, then: 2 },
                            { case: {$eq: ["$M", "05"]}, then: 2 },
                            { case: {$eq: ["$M", "06"]}, then: 2 },
                            { case: {$eq: ["$M", "07"]}, then: 3 },
                            { case: {$eq: ["$M", "08"]}, then: 3 },
                            { case: {$eq: ["$M", "09"]}, then: 3 },
                            { case: {$eq: ["$M", "10"]}, then: 4 },
                            { case: {$eq: ["$M", "11"]}, then: 4 },
                            { case: {$eq: ["$M", "12"]}, then: 4 },
                        ],
                        default: 0
                        }                
                    },
                }    
            },
            {
                "$group":{
                    "_id":{"Year":"$Years","Quarter":"$Quarter"},
                    "G1 sales": { "$sum":"$Data.G1_sales"},
                    "1A GST": { "$sum":"$Data.1A_GST"},
                    "1B GST": { "$sum":"$Data.1B_GST"},
                    "W1 salary": { "$sum":"$Data.W1_salary"},
                    "W2_withheld": { "$sum":"$Data.W2_withheld"},
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project": {
                    "Data.Year":"$_id.Year",
                    "Data.Quarter":"$_id.Quarter",
                    "Data.G1 sales":"$G1 sales",
                    "Data.1A GST":"$1A GST",
                    "Data.1B GST":"$1B GST",    
                    "Data.W1 salary":"$W1 salary",
                    "Data.W2_withheld":"$W2_withheld",    
                }
            }
        ],
        "options":"G1 sales|DOLLAR2,1A GST|DOLLAR2,1B GST|DOLLAR2,W1 salary|DOLLAR2,W2_withheld|DOLLAR2"
    },
    //-------------------------------
    "income_expense_monthly":{
        "module":"vm-query",
        "api":"wapp",
        "name":"2018-2022 income/expense monthly",
        "table":"",
        "query":
        [
            {
                "$match":{
                    "I1": { "$gte": "2018-07-01", "$lt":"2025-01-01"}
                }
            },
            {
                "$project": {
                    "Years": { $substr: [ "$I1", 0, 4] },
                    "Month": { $substr: [ "$I1", 5, 2] },
                    "Data.Income":1,
                    "Data.Expense":1,
                }
            },
            {
                "$group":{
                    "_id":{"Year":"$Years","Month":"$Month"},
                    "Income": { "$sum":"$Data.Income"},
                    "Expense": { "$sum":"$Data.Expense"},
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project": {
                    "Data.Year":"$_id.Year",
                    "Data.Month":"$_id.Month",
                    "Data.Income":"$Income",
                    "Data.Expense":"$Expense",    
                }
            }
        ],
        "options":"Income|DOLLAR2,Expense|DOLLAR2"
    },
    //-------------------------------
    "item-amount-pivot":{
        "module":"vm-pivot",
        "api":"wapp",
        "name":"2018-2022 income/expense monthly",
        "table":"",
        "pivot":"Name|Amount",
        "query":
        [
            {
                "$match":{
                    "I1": { "$gte": "2018-07-01", "$lt":"2024-07-02"}
                }
            },
            {
                "$project": {
                    "Years": { $substr: [ "$I1", 0, 4] },
                    "Month": { $substr: [ "$I1", 5, 2] },
                    "Data.Name":1,
                    "I2":1,
                }
            },
            {
                "$group":{
                    "_id":{"Year":"$Years","Month":"$Month","Name":"$Data.Name"},
                    "Amount": { "$sum":"$I2"},
                }
            },
            {
                "$sort":{
                    "_id.Year":-1,
                    "_id.Month":-1,
                    "_id.Name":1
                }  
            },
            {
                "$project": {
                    "Data.Year":"$_id.Year",
                    "Data.Month":"$_id.Month",
                    "Data.Name":"$_id.Name",
                    "Data.Amount":"$Amount",    
                }
            }
        ],
        "options":"value|DOLLAR2"
    },
    //-------------------------------
    "tax-return-pivot":{
        "module":"vm-pivot",
        "api":"wapp",
        "name":"2018-2022 tax return",
        "table":"",
        "pivot":"Name|Amount",
        "query":
        [
            {
                "$match":{"I1": { "$gte": "2018-07-01", "$lt":"2024-07-01"}}
            },
            {
                "$project": {
                    "I1":1,
                    "Data.Expense":1,
                    "Data.All_other_expenses":1,
                    "Data.Other_sales":1,
                    "Data.1A_GST":1,
                    "Data.1B_GST":1,
                    "Data.Gross_interest":1,
                    "Data.Super_expenses":1,
                    "Data.Salary_expenses":1,
                    
                    "FY":{ 
                        "$cond":[
                            { 
                                "$and": [ { "$gte": [ "$I1", "2023-07-01" ]}, { "$lt": [ "$I1", "2024-07-01" ]} ] 
                            },
                            "2023-2024",
                            {
                                "$cond":[
                                    { 
                                        "$and": [ { "$gte": [ "$I1", "2022-07-01" ]}, { "$lt": [ "$I1", "2023-07-01" ]} ] 
                                    },
                                    "2022-2023",
                                    {
                                        "$cond": [
                                            { 
                                                "$and": [ { "$gte": [ "$I1", "2021-07-01" ]}, { "$lt": [ "$I1", "2022-07-01" ]} ] 
                                            },
                                            "2021-2022",
                                            {
                                                "$cond": [
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
                                                                    "2017-0000"
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
                    "_id":"$FY",
                    "Other_sales": { "$sum": { "$subtract": [ "$Data.Other_sales","$Data.1A_GST"] }},
                    "Gross_interest":{ "$sum": "$Data.Gross_interest"},
                    "Super_expenses":{ "$sum": "$Data.Super_expenses"},
                    "Salary_expenses":{ "$sum": "$Data.Salary_expenses"},
                    "All_other_expenses":{"$sum": { "$subtract": [ "$Data.All_other_expenses","$Data.1B_GST"] }},
                    "Expense":{ "$sum": "$Data.Expense"},
                }
            },
            {
                "$sort":{
                    "_id":-1
                }  
            },
            {
                "$project": {
                    "Data.Financial Year":"$_id",
                    "Data.Other_Sales":"$Other_sales",
                    "Data.Gross_interest":"$Gross_interest",
                    "Data.Total_Income":{ "$add": [ "$Other_sales","$Gross_interest"] },
                    "Data.Super_expenses":"$Super_expenses",
                    "Data.Salary_expenses":"$Salary_expenses",
                    "Data.All_other_expenses":{ "$add": [ "$All_other_expenses","$Salary_expenses"] },
                    "Data.Total_expenses":"$Expense",
                    
                    "Data.Net_Profit":{ 
                        "$subtract": [ 
                            {"$add": ["$Other_sales","$Gross_interest"]},
                            "$Expense"
                        ] 
                    },
                }
            }
        ],
        "options":"value|DOLLAR2",
        "id_len":1
    }
}