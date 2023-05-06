#Set an env variable with project id
PROJECT_ID=YOUR_PROJECT_ID
LOCATION=YOUR_LOCATION

####### SERVIES ########

#Enable IAM service API
gcloud services enable iam.googleapis.com


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


gcloud firestore databases create --location=$LOCATION --type=datastore-mode
