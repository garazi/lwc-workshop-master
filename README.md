# Dreamhouse_BRK

The is the Dreamhouse application for use with the Lightning Components BRK at Dreamforce, TrailheaDX and Salesforce World Tours.

## Preparation

For this demo, you can either use the Developer Console, or VS Code with SFDX. 

### SFDX SETUP
You will need to have SFDX (Salesforce CLI) installed and VS Code. If you have your own Winter'19 devhub, please use it.

* Create a folder with your name on the demo machine where you will be  downloading the source for the demo org.
* Using the CLI, navigate into the folder you created and execute the following command:
    * `git clone https://github.com/garazi/Dreamhouse_BRK.git `
* Using the CLI, navigate into the newly created folder “Dreamhouse_BRK”.
* Log into your devhub with the following:
    * `sfdx force:auth:web:login -a dfDevHub`

        * Close the browser window once you have authenticated
* Run the following command, where YOUR_ORG_NAME is whatever you want:
    * `sfdx force:org:create -f config/project-scratch-def.json -s -a YOUR_ORG_NAME -d 30 -w 10`
* Once the scratch org has been created, execute the following commands:
    * `sfdx force:org:open`
    * `sfdx force:source:pull`
    * `sfdx force:source:push`
    * `sfdx force:user:permset:assign -n All_Access`

### FINAL STEPS

* In the org, open the App Launcher and choose **Dreamhouse Lightning**.
* Choose the **Data Import** tab, and click the **Initialize Sample Data** button.
* Click on the **Properties** tab to confirm that you have a list of properties.
