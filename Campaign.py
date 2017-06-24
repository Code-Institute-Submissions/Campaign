from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
import os

app = Flask(__name__)

MONGO_URI = os.getenv('MONGODB_URI', 'mongodb://localhost:27017')
DBS_NAME = os.getenv('MONGO_DB_NAME', 'donorsUSA')

COLLECTION_NAME = 'projects'


# Routes for each page and the template to render (inside 'templates' folder).
@app.route('/')
def home():
    return render_template('home.html')


@app.route('/stats')
def about():
    return render_template('stats.html')


@app.route("/donorsUS/projects")
def donor_projects():
    # Flask view to serve the project data from MongoDB in a JSON format.
    # A constant to define the record fields that we want to retrieve.
    FIELDS = {
        '_id': False, 'funding_status': True, 'school_state': True,
        'resource_type': True, 'poverty_level': True,
        'date_posted': True, 'total_donations': True, 'total_price_including_optional_support': True
    }

    # Connect to MongoDB using a with statement where the connection will be closed when the with statement is exited.
    with MongoClient(MONGO_URI) as conn:
        # Collection we wish to access
        collection = conn[DBS_NAME][COLLECTION_NAME]
        # Get results (by fields defined in FIELDS) with a limit of 20000 results so it doesn't run too slow.
        projects = collection.find(projection=FIELDS, limit=20000)
        # Convert projects to a list in a JSON object and return the JSON data
        return json.dumps(list(projects))


if __name__ == "__main__":
    app.run(debug=True)
