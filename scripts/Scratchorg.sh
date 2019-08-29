#!/bin/bash

while [ ! -n "$ORG_NAME"  ] 
do
	echo "Please enter a name for your scratch org:"
	read ORG_NAME
done
#echo $dx_alias_name
#exit

while [ ! -n "$ORG_DATE"  ] 
do
	echo "Please enter a date for your scratch org:"
	read ORG_DATE
done

echo "Building your org, please wait."
sfdx force:org:create -f config/project-scratch-def.json -s -a $ORG_NAME -d $ORG_DATE

if [ "$?" = "1" ] 
then
	echo "Can't create your org."
	exit
fi
echo "Pushing the installed packages, please wait. It may take 20-30 minutes."

#sfdx sfpowerkit:package:dependencies:install  -k "1:installapttus" -r

#cp .forceignore .forceignore_original
#mv .forceignore_comment .forceignore
#sfdx force:source:deploy -p ./src/unpackaged/core/pre/
#sfdx force:source:deploy -p ./src/unpackaged/core/post/
#mv .forceignore .forceignore_comment
#mv .forceignore_original .forceignore 

echo "Core Post steps are deployed successfully."

echo "Pushing the code, please wait. It may take a while."
sfdx force:source:push 

#echo "Pushing the post customer steps, please wait. It may take a while."
#cp .forceignore .forceignore_original
#mv .forceignore_comment .forceignore
#sfdx force:source:deploy -p ./src/unpackaged/customer/post/
#mv .forceignore .forceignore_comment
#mv .forceignore_original .forceignore

if [ "$?" = "1" ]
then 
	echo "Can't push your source."
	exit 
fi

echo "Core package is pushed successfully."
sfdx force:user:permset:assign -n All_Access

#sfdx force:user:permset:assign -n RACV_Admin_Permission_Set
#sfdx force:user:permset:assign -n MSD_Consultant_Base
#sfdx force:user:permset:assign -n AuthorisationAccess
#if [ "$?" = "1" ]
#then
#	echo "Can't assign the permission set."
#	exit 
#fi	

#echo "RACV_Admin_Permission_Set is assigned successfully."


#sfdx force:source:push
#sfdx force:user:permset:assign -n Dreamhouse
#sfdx force:data:tree:import -p data/sample-data-plan.json
#sfdx force:apex:test:run -r tap -c
#sfdx force:apex:execute -f ./scripts/demo.apex