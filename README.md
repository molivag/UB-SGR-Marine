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

