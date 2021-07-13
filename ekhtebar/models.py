from ekhtebar import db, login_manger
from flask_login import UserMixin


# creating user loader function with decorator to load user id and information from database
@login_manger.user_loader
def load_user(teacher_mail):
    return Teachers.objects(pk=teacher_mail).first()

class Teachers(UserMixin, db.Document):
    """python allow multi inhertance if there's in the first class will inheret from the another """
    teacher_first_name = db.StringField()
    teacher_last_name = db.StringField()
    teacher_mail = db.EmailField()
    phone_number = db.StringField()
    password = db.StringField()
    school = db.StringField()
    related_exams = db.ListField()


    meta = {
        'db_alias': 'core',
        'collection': 'teachers',
        'auto_create_index': False,
        'indexs': 'teacher_mail'
    }


class Exam(db.Document):
    exam = StringField()
    
    meta = {
        'db_alias': 'core',
        'collection': 'teachers',
        'auto_create_index': False,
        'indexs': 'teacher_mail'
    }
    


class Student(db.Document):
    pass
