from ekhtebar import db


class Teachers(db.Document):
    teacher_mail = db.EmailField()
    teacher_first_name = db.StringField()
    teacher_last_name = db.StringField()
    password = db.StringField()
    phone_number = db.StringField()
    school = db.StringField()
    related_exams = db.ListField()
    meta = {
        'db_alias': 'core',
        'collection': 'users',
        'auto_create_index': False,
        'indexs': 'teacher_mail'
    }


class Exam(db.Document):
    pass


class Student(db.Document):
    pass
