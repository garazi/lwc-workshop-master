#!/bin/bash

alias dxoc="sfdx force:org:create -f config/project-scratch-def.json -a "
alias dxdelete="sfdx force:org:delete -p -u"
alias dxdisplay="sfdx force:org:display"
alias dxol="sfdx force:org:list"
alias dxopen="sfdx force:org:open"
alias dxsc="sfdx force:source:convert"
alias dxso="sfdx force:source:open"
alias dxpull="sfdx force:source:pull"
alias dxpush="sfdx force:source:push"
alias dxforcepush="sfdx force:source:push -f"
alias dxss="sfdx force:source:status"
alias dxretreive="sfdx force:source:retrieve"
alias dxlimit="sfdx force:limits:api:display"
alias dxquery="sfdx force:data:soql:query --query -r "
alias dxretrieve="sfdx force:source:retrieve -m"
alias dxdeploy="sfdx force:source:deploy -p"
alias dxdevhub="sfdx force:auth:web:login -d -a"

Dxinstall() {
  sfdx sfpowerkit:package:dependencies:install  -k "1:installapttus"  -r
}



Dxallfpush(){

cp .forceignore .forceignore_original
mv .forceignore_comment .forceignore
sfdx force:source:deploy -p ./src/unpackaged/core/pre/
sfdx force:source:deploy -p ./src/unpackaged/core/post/
mv .forceignore .forceignore_comment
mv .forceignore_original .forceignore
sfdx force:source:push -f
cp .forceignore .forceignore_original
mv .forceignore_comment .forceignore
sfdx force:source:deploy -p ./src/unpackaged/customer/post/
mv .forceignore .forceignore_comment
mv .forceignore_original .forceignore

}

Dxallpush(){
cp .forceignore .forceignore_original
mv .forceignore_comment .forceignore
sfdx force:source:deploy -p ./src/unpackaged/core/pre/
sfdx force:source:deploy -p ./src/unpackaged/core/post/
mv .forceignore .forceignore_comment
mv .forceignore_original .forceignore
sfdx force:source:push
cp .forceignore .forceignore_original
mv .forceignore_comment .forceignore
sfdx force:source:deploy -p ./src/unpackaged/customer/post/
mv .forceignore .forceignore_comment
mv .forceignore_original .forceignore

}

ginit() {
  git submodule init
}

subupdate() {
  git submodule update --remote
}

gbranch() {
  git checkout -b "$1"
}
# this command to switch the default scrath org   i.e.   Switchorg customerSO
Switchorg() {
  sfdx force:config:set defaultusername="$1"
}

sfpowerkit() {
  sfdx plugins:install sfpowerkit 
}

dxgodpush(){
  Dxinstall
  ginit
  subupdate
  git pull origin develop
  Dxallfpush
}

sousage() {
  sfdx sfpowerkit:org:scratchorg:usage -v "$1"
}

