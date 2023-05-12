#Login with your user for local development
gcloud auth application-default login

####### If no project is set apply the command bellow #######
#gcloud config set project YOUR_PROJECT_ID

#Set an env variable
export PROJECT_ID=$(gcloud config list --format 'value(core.project)') #Curernt project id
export LOCATION=YOUR_LOCATION

####### SERVICES ########
gcloud services enable iam.googleapis.com datastore.googleapis.com firestore.googleapis.com


####### ROLES ########

#Create a role for write only in the datastore entities
gcloud iam roles create datastore_entities_write_only \
    --project=$PROJECT_ID \
    --title=Datastore entities write only \
    --description=Datastore Allow to write only datastore entities  \
    --permissions="datastore.entities.create" \
    --stage=GA

#Create a role for read only in the datastore entities
gcloud iam roles create datastore_entities_read_only \
    --project=$PROJECT_ID \
    --title=Datastore entities write only \
    --description=Datastore Allow to read only datastore entities \
    --permissions="datastore.entities.get" \
    --stage=GA


####### SERVICE ACCOUNTS ########

#Create a service account for Datastore read Cloud Function
gcloud iam service-accounts create Datastore Read Function \
    --description="Service account to allow to read only from datastore entities" \
    --display-name="datastore-read-function"

#Assign custom role for reading datastore entities to service account
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:datastore-read-function@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="projects/$PROJECT_ID/roles/datastore_entities_read_only"

#Create a service account for Datastore write Cloud Function
gcloud iam service-accounts create Datastore Write Function \
    --description="Service account to allow to read only from datastore entities" \
    --display-name="datastore-write-function"

#Assign custom role for writing datastore entities to service account
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:datastore-write-function@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="projects/$PROJECT_ID/roles/datastore_entities_write_only"


####### DATASTORE ########

gcloud firestore databases create --location=$LOCATION --type=datastore-mode


