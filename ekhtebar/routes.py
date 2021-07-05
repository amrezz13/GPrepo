from flask import render_template, flash, redirect, url_for
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


@app.route("/home/teacher_signup", methods=['GET', 'POST'])  # used exactly the same name in front
def signup_teacher():
    form = RegesterForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data).decode('utf-8')

        db.register_connection(alias='core', name='ekhtebar')
        teacher = Teachers(teacher_first_name=form.teacher_first_name.data,
                           teacher_last_name=form.teacher_last_name.data, teacher_mail=form.teacher_mail.data,
                           phone_number=form.phone_number.data, school=form.school.data,
                           password=hashed_password).save()
        flash(f'{form.teacher_first_name.data}, Account Created Successfully, Log In now!', 'success')
        return redirect(url_for('home_page'))
    return render_template('pages/sign.html', title='Register', form=form)


@app.route("/ekhtebar/teacher_login", methods=['GET', 'POST'])  # used exactly the same name in front
def signin_teacher():
    form = TeacherLoginForm()
    if form.validate_on_submit():
        db.register_connection(alias='core', name='ekhtebar')
        user = Teachers.objects(teacher_mail=form.teacher_mail.data)
        if user and bcrypt.check_password_hash(user.password, form.password.data):
            login_user(user, remember=form.remember.data)
            flash(f'{form.teacher_first_name.data}, Account Created Successfully, Log In now!', 'success')
            return redirect(url_for('home_page'))
        else:
            return redirect(url_for('signin_teacher'))
    return render_template('pages/sign.html', title='Log In', form=form)


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
