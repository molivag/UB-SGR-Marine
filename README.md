# Website of SGR Marine Biodiversity and Evolution of The University of Barcelona
### (Powered by React + Vite)




## 🔄 How to Update Team Member Information

The content of the **Team** section is managed through a local Excel spreadsheet. This method allows content updates without touching the source code.

### 📁 Step-by-step Workflow

1. **Edit the Excel file locally**:
   
   File location:
        updateINFO/data/file_team.xlsx


2. **Run the Python script to generate a JSON file**:

```shell
cd updateINFO
python3 generate_team_json.py
```

This will create a new file:
```
public/data/team.json
```

3. Upload the JSON to the web server via SSH:

```shell
sftp put public/data/team.json username@websitedomain.ub:/public/data/
```
⚠️ Make sure you do not edit the JSON file manually. All updates should come from the Excel spreadsheet + Python script.










<!-- # Website of SGR Marine Biodiversity and Evolution of The University of Barcelona -->
<!-- ### (Powered by React + Vite) -->


<!-- ## Explaining team `member` updates -->

<!-- If you want to update the status of one of the team member you have to look at members' database. -->

<!-- - The `member` object has the following attributes: -->
<!-- ```ts -->
<!-- type Tmember = { -->
<!--     id:         number; -->
<!--     senior:     string; -->
<!--     current:    boolean; -->
<!--     name:       string; -->
<!--     category:   string; -->
<!--     department: string; -->
<!--     group:      string; -->
<!--     email:      string; -->
<!--     orcid:      string; -->
<!--     scholar:    string; -->
<!--     website:    string; -->
<!--     socialmedia:string; -->
<!--     imageID:    string; -->
<!--     description:string; -->
<!-- }; -->
<!-- ``` -->
<!-- The `current` attribute must be changed as follows: -->

<!-- ```ts -->
<!-- // For current members: -->
<!-- Current: TRUE -->  
<!-- // For past members: -->
<!-- Current: FALSE -->
<!-- ``` -->
<!-- The `team` section has the following structure: -->
<!-- ```html -->
<!-- <h1>Current Members</h1> -->

<!--     For members with Current attribute: "TRUE" -->

<!-- <h1>Former Members</h1> -->   

<!--    For members with Current attribute: "FALSE" -->


<!-- <h1>PhD Students</h1> -->   
<!--    For members with Current attribute: "TRUE"  + category: "PhD Student" -->

<!-- ``` -->
<!-- The proper modification of `current` attribute will locate the corresponding member in one of the three groups. -->

<!-- ## How to access to the members' database? -->
<!-- Through secure shell connection -->
<!-- ```shell -->
<!-- ssh username@websitedomain.ub --> 
<!-- ``` -->
<!-- Then, edit the `current` attribute in database file via: -->
<!-- ```shell -->
<!-- nano public/team.ts -->            
<!-- ``` -->
<!-- Write the changes and close the file. The update will take place automatically. -->
