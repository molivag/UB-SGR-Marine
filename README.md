# Website of SGR Marine Biodiversity and Evolution of The University of Barcelona
### (Powered by React + Vite)


## Explaining team `member` updates

If you want to update the status of one of the team member you have to look at members' database.

- The `member` object has the following attributes:
```ts
type Tmember = {
    id:         number;
    senior:     string;
    current:    boolean;
    name:       string;
    category:   string;
    department: string;
    group:      string;
    email:      string;
    orcid:      string;
    scholar:    string;
    website:    string;
    socialmedia:string;
    imageID:    string;
    description:string;
};
```
The `current` attribute must be changed as follows:

```ts
// For current members:
Current: TRUE  
// For past members:
Current: FALSE
```
The `team` section has the following structure:
```html
<h1>Current Members</h1>

    For members with Current attribute: "TRUE"

<h1>Former Members</h1>   

   For members with Current attribute: "FALSE"


<h1>PhD Students</h1>   
   For members with Current attribute: "TRUE"  + category: "PhD Student"

```
The proper modification of `current` attribute will locate the corresponding member in one of the three groups.

## How to access to the members' database?
Through secure shell connection
```shell
ssh username@websitedomain.ub 
```
Then, edit the `current` attribute in database file via:
```shell
nano public/team.ts            
```
Write the changes and close the file. The update will take place automatically.
