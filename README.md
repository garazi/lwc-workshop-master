# Dreamhouse App

The is the Dreamhouse application for use with the Lightning Web Components workshop.

## Preparation

You will need to have SFDX (Salesforce CLI) installed and VS Code. You will also need your own Dev Hub.

* Using the CLI, navigate to where you want the folder for the source created, and execute the following command:
    * `git clone https://github.com/garazi/lwc-workshop-master.git `
* Using the CLI, navigate into the newly created folder “lwc-workshop-master”.
* Log into your devhub with the following:
    * `sfdx force:auth:web:login -a dfDevHub`
* Close the browser window once you have authenticated.
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
