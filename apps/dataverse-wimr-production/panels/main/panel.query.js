var vm_data={
    //-------------------------------
    "tables":{
        "type":"msd365",
        "name":"Tables",
        "host":"woolcock.crm6.dynamics.com",
        //"path":"/api/data/v9.1/EntityDefinitions?$count=true",
        "path":"/api/data/v9.1/EntityDefinitions?$select=LogicalName,EntitySetName",  //&$filter=IsCustomEntity eq true", //  IsCustomEntity eq true
        "array":"value",
        "columns":`
            LogicalName|LogicalName
            EntitySetName|EntitySetName
        `
    },
    //-------------------------------
    "contacts":{
        "type":"msd365",
        "name":"contacts",
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
    "woolcock_projectses":{
        "type":"msd365",
        "name":"woolcock_projectses",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_projectses?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            Name|woolcock_name
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    "woolcock_studies":{
        "type":"msd365",
        "name":"woolcock_studies",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_studies?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            Name|woolcock_name
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    "woolcock_studentses":{
        "type":"msd365",
        "name":"woolcock_studentses",
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
    "woolcock_schools":{
        "type":"msd365",
        "name":"woolcock_schools",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_schools?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            woolcock_name|woolcock_name
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    "woolcock_pri_supervisors":{
        "type":"msd365",
        "name":"woolcock_pri_supervisors",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/woolcock_pri_supervisors?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            woolcock_name|woolcock_name
            Created on|createdon
            Created by|createdby.fullname
        `
    },
    "adx_entityforms":{
        "type":"msd365",
        "name":"adx_entityforms",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/adx_entityforms?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            adx_formname|adx_formname
            Created on|createdon
            Created by|createdby.fullname
        `
    },

    "other":{
        "type":"msd365",
        "name":"Projects",
        "host":"woolcock.crm6.dynamics.com",
        "path":"/api/data/v9.1/adx_entityforms?$count=true&$expand=createdby($select=fullname)&$orderby=createdon desc",
        "array":"value",
        "columns":`
            adx_formname|adx_formname
            Created on|createdon
            Created by|createdby.fullname
        `
    },


    
/*
    
    //-------------------------------
    "volunteers":{
        "type":"msd365",
        "name":"Volunteers",
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
    }
    */
}

