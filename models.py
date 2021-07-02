import mongoengine


class Teachers(mongoengine.Document):

    teacher_mail = mongoengine.EmailField()
    teacher_first_name = mongoengine.StringField()
    teacher_last_name = mongoengine.StringField()
    password = mongoengine.StringField()
    phone_number = mongoengine.StringField()
    school = mongoengine.StringField()
    related_exams = mongoengine.ListField()
    meta = {
        'db_alias': 'core',
        'collection': 'users',
        'auto_create_index': False,
        'indexs': 'teacher_mail'
    }


class Exam(mongoengine.Document):
    pass

class Student(mongoengine.Document):
    pass