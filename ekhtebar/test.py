from ekhtebar import db
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, BooleanField
from wtforms.validators import Length, Email, DataRequired, EqualTo, ValidationError
from wtforms.fields.html5 import EmailField
from ekhtebar.models import Teachers


"""
 كل سطر من دول بيمثل field فمثلا أول واحدة بتاعت الريجيستر حط في التصميم فيلد ياخد الميل والرقم وهكذا
نفس النظام هتعمله في واجهة دخول الطالب وواجهة دخول المدرس 
regestarationForm دي بتاعت تسجيل المدرس 
"""


class RegesterForm(FlaskForm):
    teacher_first_name = StringField("First name")
    teacher_last_name = StringField("Last name")
    teacher_mail = EmailField('Email address')
    phone_number = StringField("phone number")
    school = StringField("School")
    password = PasswordField("Password")
    confirm_password = PasswordField("Confirm_Password", validators=[EqualTo('password')])
    submit = SubmitField('Sign Up')
    #  I will add a validation function to registration form to check if user already exist

    def validate_teacher_mail(self, teacher_mail):
        db.register_connection(alias='core', name='ekhtebar')

        # search query to check redundant users by email and block them
        redundant_query = Teachers.objects(teacher_mail=teacher_mail.data).first()
        # if user exist it will not be signed for now
        print(type(redundant_query))


class TeacherLoginForm(FlaskForm):
    teacher_mail = StringField("Email")
    password = PasswordField("Password")
    remember = BooleanField('Remember me')
    submit = SubmitField('Login')


class StudentLog(FlaskForm):
    student_mail = StringField("Email", validators=[DataRequired(), Email()])
    student_first_name = StringField("First name", validators=[DataRequired(), Length(min=2, max=20)])
    student_last_name = StringField("Last name", validators=[DataRequired(), Length(min=2, max=20)])
    exam_code = StringField("code", DataRequired())
    submit = SubmitField('Login')
