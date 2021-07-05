from flask import render_template, flash, redirect, url_for, request
from ekhtebar import app, db, bcrypt
from ekhtebar.forms import TeacherLoginForm, RegesterForm, StudentLog
from ekhtebar.models import Teachers
from flask_login import login_user, current_user, logout_user, login_required
# note that no "signup as student" in routes because it will be deleted


@app.route("/")
@app.route("/home")
@app.route("/ekhtebar")
def home_page():
    return render_template('index.html')


@app.route("/ekhtebar/teacher_signup", methods=['GET', 'POST'])  # used exactly the same name in front
def signup_teacher():
    form = RegesterForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            db.register_connection(alias='core', name='ekhtebar')
            new_mail = Teachers.objects(teacher_mail=form.teacher_mail.data).first()
            if new_mail is None:
                hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')
                teacher = Teachers(teacher_first_name=form.teacher_first_name.data,
                                   teacher_last_name=form.teacher_last_name.data, teacher_mail=form.teacher_mail.data,
                                   phone_number=form.phone_number.data, school=form.school.data,
                                   password=hashed_password).save()
                flash(f'{form.teacher_first_name.data}, Account Created Successfully, Log In now!', 'success')
                return redirect(url_for('home_page'))

    return render_template('pages/SignUpAsTeacher.html', title='Register', form=form)


@app.route("/ekhtebar/teacher_login", methods=['GET', 'POST'])  # used exactly the same name in front
def signin_teacher():
    if current_user.is_authenticated:
        return redirect(url_for('home_page'))
    form = TeacherLoginForm()
    if request.method == 'POST':
        if form.validate():
            db.register_connection(alias='core', name='ekhtebar')
            user = Teachers.objects(teacher_mail=form.teacher_mail.data).first()
            if bcrypt.check_password_hash(user['password'], form.password.data):
                return redirect(url_for('dashboard'))
    return render_template('pages/SignInAsTeacher.html', title='Log In', form=form)


@app.route("/ekhtebar/student_login")  # used exactly the same name in front
def sign_student():
    form = StudentLog()
    return render_template('pages/SignInAsStudent.html', title='Student Log', form=form)


@app.route("/ekhtebar/about")    # used exactly the same name in front
def about():
    pass


@app.route("/ekhtebar/controlpanel")  # used exactly the same name in front
def dashboard():
    return render_template('pages/controlpanel.html', title='dashboard')
