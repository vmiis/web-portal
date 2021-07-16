var vm_data={
    //-------------------------------
    "contacts":{
        "type":"msd365",
        "name":"Contacts",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/contacts?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            CRM ID|woolcock_volunteerid
            Name|fullname
            Age|woolcock_age
            Gender|gendercode@OData.Community.Display.V1.FormattedValue
            Email|emailaddress1
            Mobile Phone|mobilephone
            Newsletter|woolcock_newsletter@OData.Community.Display.V1.FormattedValue
            Participate Research|woolcock_participateinanyresearchstudy@OData.Community.Display.V1.FormattedValue
            Registration Type|woolcock_registrationtype@OData.Community.Display.V1.FormattedValue
            Registered Study|_woolcock_volunteerstudyid_value@OData.Community.Display.V1.FormattedValue
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    //-------------------------------
    "projects":{
        "type":"msd365",
        "name":"Projects",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_projectses?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            Name|woolcock_name
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    //-------------------------------
    "studies":{
        "type":"msd365",
        "name":"Studies",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_studies?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            Name|woolcock_name
            Chief investigator|woolcock_chiefinvestigator
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    //-------------------------------
    "students":{
        "type":"msd365",
        "name":"Students",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_studentses?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            woolcock_name|woolcock_name
            woolcock_studentlastname|woolcock_studentlastname
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    //-------------------------------
    "woolcock_pri_supervisors":{
        "type":"msd365",
        "name":"Primary Supervisors",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_pri_supervisors?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            woolcock_name|woolcock_name
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    //-------------------------------
    "woolcock_projectleads":{
        "type":"msd365",
        "name":"Project Leads",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_projectleadses?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            woolcock_name|woolcock_name
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    //-------------------------------
    "volunteer_study":{
        "type":"msd365",
        "name":"Studies",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/contacts?$count=true&$filter=woolcock_registrationtype eq 1&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            CRM ID|woolcock_volunteerid
            Name|fullname
            Age|woolcock_age
            Gender|gendercode@OData.Community.Display.V1.FormattedValue
            Email|emailaddress1
            Mobile Phone|mobilephone
            Registered Study|_woolcock_volunteerstudyid_value@OData.Community.Display.V1.FormattedValue
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    //------------------------------- _woolcock_volunteerstudyid_value
    "_volunteer_study":{
        "type":"msd365",
        "name":"Studies",
        "host":"woolcock.crm6.dynamics.com",
        //"path":"/api/data/v9.1/contacts?$filter=woolcock_registrationtype eq 1&$apply=groupby( (gendercode@OData.Community.Display.V1.FormattedValue), aggregate($count as Count) )",
        //&$apply=groupby((_woolcock_volunteerstudyid),aggregate($count as Count))
        "path":"/api/data/v9.1/contacts?$filter=woolcock_registrationtype eq 1 and _woolcock_volunteerstudyid_value ne null&$apply=groupby((_woolcock_volunteerstudyid_value),aggregate($count as Count))",
        "array":"value",
        "columns":`
            Registered Study|_woolcock_volunteerstudyid_value@OData.Community.Display.V1.FormattedValue
            Count|Count
        `
    },
    //-------------------------------
    "total_number":{
        "type":"msd365",
        "name":"Studies",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/RetrieveTotalRecordCount(EntityNames=['contact','woolcock_projects','woolcock_study'])",
        "array":"EntityRecordCountCollection.Values",
        "columns":`
            Volunteers 
            Projects
            Studies
        `
    },
    //-------------------------------
    "total_number_2":{
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/RetrieveTotalRecordCount(EntityNames=['contact','woolcock_projects','woolcock_study','woolcock_students','woolcock_projectleads','woolcock_pri_supervisor'])",
    },
    //-------------------------------   
    "count_newsletter":{
        "size":1,
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/contacts?$count=true&$filter=woolcock_newsletter eq true",
    },
    //-------------------------------
    "count_reg_study":{
        "size":1,
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/contacts?$count=true&$filter=woolcock_registrationtype eq 1",
    },
    //-------------------------------
    "count_participate":{
        "size":1,
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/contacts?$count=true&$filter=woolcock_participateinanyresearchstudy eq true",
    },
    //-------------------------------
}

