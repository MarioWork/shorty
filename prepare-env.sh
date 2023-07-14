#Login with your user for local development
gcloud auth application-default login

####### If no project is set apply the command bellow #######
#gcloud config set project YOUR_PROJECT_ID

#Set an env variable
export PROJECT_ID=$(gcloud config list --format 'value(core.project)') #Curernt project id
export LOCATION=YOUR_LOCATION

####### SERVICES ########
gcloud services enable iam.googleapis.com datastore.googleapis.com firestore.googleapis.com cloudfunctions.googleapis.com cloudbuild.googleapis.com

####### SERVICE ACCOUNTS ########

#Create a service account for Datastore read Cloud Function
gcloud iam service-accounts create datastore-read-function \
    --description="Service account to allow to read only from datastore entities" \
    --display-name="Datastore Read Function"

#Assign reading datastore entities role to service account
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:datastore-read-function@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/datastore.viewer"

#Create a service account for Datastore write Cloud Function
gcloud iam service-accounts create datastore-write-function \
    --description="Service account to allow to write and read from datastore entities" \
    --display-name="Datastore Write Function"

#Assign custom role for writing datastore entities to service account
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:datastore-write-function@$PROJECT_ID.iam.gserviceaccount.com" \
    --role="roles/datastore.user"


####### DATASTORE ########
gcloud firestore databases create --location=$LOCATION --type=datastore-mode


#Create Cloud Function for retrieving data from datastore
gcloud functions deploy retrieve-data \
    --trigger-http \
    --runtime=nodejs18 \
    --entry-point=retrieve \
    --service-account=datastore-read-function@$PROJECT_ID.iam.gserviceaccount.com \
    --region=$LOCATION \
    --no-allow-unauthenticated \
    --update-env-vars API_KEY=YOUR_API_KEY
