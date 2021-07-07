from flask import Flask
from flask_mongoengine import MongoEngine
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

app = Flask(__name__)   # something like main
"""
    how to generate the secure key?
    get random charchaters, from terminal excute this list of commands 
    python
    import secrets 
    secrets.token_hex(16)
"""
app.config['SECRET_KEY'] = '8c3330dbde9a977802c5971ccdd1ba62'

app.config['MONGODB_SETTINGS'] = {
    'db': 'ekhtebar',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine()
db.init_app(app)

"""
db.init_app(app)
This callback can be used to initialize an application for the use with this database setup.
Never use a database in the context of an application not initialized that way or connections will leak.
in SQL we use SQLAlchemy
"""


bcrypt = Bcrypt(app)   # for encrypting passwords
# using flask login manger to manage the authenatication
login_manger = LoginManager(app)
login_manger.login_view = 'signin_teacher'
login_manger.login_message_category = 'info '
from ekhtebar import routes
